// Percentage Data Graph
function getChart() {
  $.get("/api/categories", renderChart);
}

getChart();

// NPM Package
function renderChart(data) {
  $.get("/api/items", items => {
    // Map through array of objects for all values
    const categoryResults = data.map(value => value.category);
    console.log(categoryResults);

    console.log(items);
    const itemResults = items.map(items => items.CategoryId);
    console.log(itemResults);

    // const chartEl = document.querySelector("#Chart");
    const categoryData = {
      labels: categoryResults,

      datasets: [
        {
          values: [20, 10, 20],
          chartType: "percentage"
        }
      ]
    };

    const chart = new frappe.Chart("#Chart",{
      title: "Inventory Percentages",
      type: "percentage",
      data: categoryData,
      height: 200,
      colors: ["red", "orange", "yellow", "green", "blue", "violet", "black"],
      barOptions: {
        height: 15,
        depth: 5
      }
    });
  });
}
