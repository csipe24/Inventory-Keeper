const categoryData = {
  labels: [],

  datasets: [
    {
      values: [],
      chartType: "percentage"
    }
  ]
};

// Percentage Data Graph
function getChart() {
  $.get("/api/charts", renderChart);
}

getChart();

// NPM Package
function renderChart(data) {
  console.log(data);
  data.forEach(data => {
    if (data.Items.length > 0) {
      // Push into categoryData.labels
      categoryData.labels.push(data.category);
      // Push into categoryData.datasets[0].
      if (data.Items.length === 1) {
        categoryData.datasets[0].values.push(data.Items[0].quantity);
      } else {
        categoryData.datasets[0].values.push(
          data.Items.reduce(
            (accumulator, currentValue) => accumulator.quantity + currentValue.quantity
          )
        );
      }
    }
  });

  console.log(categoryData);

  const chart = new frappe.Chart("#Chart", {
    title: "Number of Products Per Category",
    type: "percentage",
    data: categoryData,
    height: 200,
    colors: [
      "#042278",
      "#a87fff",
      "#d60542",
      "#3267d4",
      "#8c94ac",
      "#13CA91",
      "black"
    ],
    barOptions: {
      height: 40,
      depth: 5
    }
  });
}