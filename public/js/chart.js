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
  }); 
  //   console.log(data.Items.reduce((accumulator, currentValue) => accumulator.quantity + currentValue.quantity));
  // });

  console.log(categoryData);


  const chart = new frappe.Chart("#Chart", {
    title: "Inventory Percentages",
    type: "percentage",
    data: categoryData,
    height: 300,
    colors: ["red", "orange", "yellow", "green", "blue", "violet", "black"],
    barOptions: {
      height: 40,
      depth: 5
    }
=======
    const chart = new frappe.Chart("#Chart", {
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
