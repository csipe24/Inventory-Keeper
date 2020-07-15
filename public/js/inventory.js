// Script File to add functionality to front end

// Using JQuery to get and render categories to page
const categorySelect = $(".categoryId");
function getCategories() {
  $.get("/api/categories", renderCategoryList);
}

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

getCategories();

// Creates the Category options in the dropdown
function createCategoryRow(category) {
  const listOption = $("<option>");
  listOption.attr("value", category.id);
  listOption.text(category.category);
  return listOption;
}

// JQUERY to add submit function adding category to database
$(".create-category").on("submit", event => {
  event.preventDefault();
  const newCategory = {
    category: $("#category")
      .val()
      .trim()
  };
  console.log("Creating Category");
  // Send the POST request.
  $.ajax("/api/categories", {
    type: "POST",
    data: newCategory
  }).then(() => {
    console.log("Created New Category");
    // Reload the page to update front end
    location.reload();
  });
});

// JQUERY to add submit function adding item to database
$(".create-item").on("submit", event => {
  event.preventDefault();
  const newItem = {
    item: $("#item")
      .val()
      .trim(),
    CategoryId: categorySelect.val(),
    quantity: $("#itemQuantity")
      .val()
      .trim(),
    cost: $("#cost")
      .val()
      .trim()
  };
  console.log("Creating Item");
  // Send the POST request.
  $.ajax("/api/items", {
    type: "POST",
    data: newItem
  }).then(() => {
    console.log("Created New Item");
    // Reload the page to update List
    location.reload();
  });
});

// JQUERY to add on click function to remove an item
$(".remove").on("click", function(event) {
  event.preventDefault();
  const itemId = $(this).data("id");
  const updateRoute = "/api/items/" + itemId;
  $.ajax({
    method: "DELETE",
    url: updateRoute
  }).then(() => {
    // Reload the page to update List
    location.reload();
  });
});

// JQUERY to add on click function for updating/saving updated item info
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

// On Click Event to display Bootstrap Modal containing specific item info
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
