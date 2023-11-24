fx = [0, 0];

function f_generate_graph() {
    xy = {};
    y = [];

    points_text = document.getElementById("xy").value;
    
    points = points_text.split("\n");
    console.log(points);

    for (let i = 0; i < points.length; i++) {
        x_y = points[i].split(" ");
        xy[parseFloat(x_y[0])] = parseFloat(x_y[1]);
    }
    
    x = Object.keys(xy);
    x.sort(function(a,b) { return a - b;});

    for (var i=0; i<x.length; i++) {
        y.push(xy[x[i]]);
        x[i] = parseFloat(x[i]);
    } 

    fx = [x, y];

    console.log(fx);
    chart.data.datasets[0].data = fx[1];
    chart.data.labels = fx[0];
    chart.update();
}
var chart = new Chart("Graph", {
    type: "line",
    data: {
      labels: fx[0],
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: fx[1]
      }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {display: false},
        clip: false,
        scales: {
          y: {
            min: Math.min(fx[1]),
            max: Math.max(fx[1]),
            ticks: {
              stepSize: 0.01,
           }
          },
          x: {
            min: Math.min(fx[0]),
            max: Math.max(fx[0]),
              ticks: {
                  stepSize: 0.01,
              }
          }
        }
    }
}); 