// Percentage Data Graph
function getChart() {
  $.get("/api/categories", renderChart);
}

getChart();

// NPM Package
function renderChart(data) {
  $.get("/api/itemInfo", itemCount => {
    // Map through array of objects for all values
    const categoryResults = data.map(value => value.category);
    console.log(categoryResults);
    console.log(itemCount);
    const itemCountValues = itemCount.map(data => data.count);
    console.log(itemCountValues);

    // const chartEl = document.querySelector("#Chart");
    const categoryData = {
      labels: categoryResults,

      datasets: [
        {
          values: itemCountValues,
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
