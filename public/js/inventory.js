const categorySelect = $("#categoryId");

function getCategories() {
  $.get("/api/categories", renderCategoryList);
}

getCategories();

function renderCategoryList(data) {
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

$(".update").on("click", function(event) {
  event.preventDefault();
  const itemId = $(this).data("id");
  const updateRoute = "/api/items/" + itemId;
  const itemQuantity = $(this).data("quantity");
  const itemCost = $(this).data("cost");
  const itemData = {
    quantity: itemQuantity,
    cost: itemCost
  };
  $.ajax({
    method: "PUT",
    url: updateRoute,
    data: itemData
  }).then(() => {
    location.reload();
  });
});
