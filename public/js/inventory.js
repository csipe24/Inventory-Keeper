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
    CategoryId: $("#category")
      .val()
      .trim(),
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
