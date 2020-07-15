const categorySelect = $(".categoryId");

function getCategories() {
  $.get("/api/categories", renderCategoryList);
}

getCategories();

function renderCategoryList(data) {
  console.log("Categories" + data);
  const rowsToAdd = [];
  for (let i = 0; i < data.length; i++) {
    rowsToAdd.push(createCategoryRow(data[i]));
  }
  categorySelect.empty();
  console.log(rowsToAdd);
  console.log(categorySelect);
  categorySelect.append(rowsToAdd);
  categorySelect.val(categoryId);
}

// Creates the Category options in the dropdown
function createCategoryRow(category) {
  const listOption = $("<option>");
  listOption.attr("value", category.id);
  listOption.text(category.category);
  return listOption;
}

$(".create-category").on("submit", event => {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  const newCategory = {
    category: $("#category")
      .val()
      .trim()
  };

  console.log("Submit");
  // Send the POST request.
  $.ajax("/api/categories", {
    type: "POST",
    data: newCategory
  }).then(() => {
    console.log("created new category");
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".create-item").on("submit", event => {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  const newItem = {
    item: $("#item")
      .val()
      .trim(),
    CategoryId: categorySelect.val(),
    quantity: $("#quantity")
      .val()
      .trim(),
    cost: $("#cost")
      .val()
      .trim()
  };

  // Send the POST request.
  $.ajax("/api/items", {
    type: "POST",
    data: newItem
  }).then(() => {
    console.log("created new item");
    // Reload the page to get the updated list
    location.reload();
  });
});

// Delete Button
$(".remove").on("click", function(event) {
  event.preventDefault();
  const itemId = $(this).data("id");
  const updateRoute = "/api/items/" + itemId;
  $.ajax({
    method: "DELETE",
    url: updateRoute
  }).then(() => {
    location.reload();
  });
});

$("#save").on("click", function(event) {
  event.preventDefault();
  console.log($(this).data("value"));
  const itemId = $(this).data("value");
  const updateRoute = "/api/items/" + itemId;
  const itemName = $(this).data("#editItem");
  const itemCategoryId = $(this).data("#editCategoryId");
  const itemQuantity = $(this).data("#editQuantity");
  const itemCost = $(this).data("#editCost");
  const itemData = {
    item: itemName,
    CategoryId: itemCategoryId,
    quantity: itemQuantity,
    cost: itemCost
  };
  $.ajax({
    method: "PUT",
    url: updateRoute,
    data: itemData
  }).then(() => {
    // itemName.empty();
    // itemCategoryId.empty();
    // itemCost.empty();
    // itemQuantity.empty();
    location.reload();
  });
});

$("#editItem").on("show.bs.modal", event => {
  const id = $(event.relatedTarget).data("id");
  console.log("event" + event.relatedTarget);
  $.get("/api/items/" + id, data => {
    console.log("Modal Item " + id + data.Category.category);
    $("#editItemName").val(data.item);
    $("#editCategoryId").val(data.Category.category);
    $("#editQuantity").val(data.quantity);
    $("#editCost").val(data.cost);
    $("#save").attr("data-value", id);
  });
});
