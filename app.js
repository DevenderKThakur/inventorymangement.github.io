let sidebarOpen =  false;
let sidebar = document.getElementById("sidebar");
function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;

    }
}

function closeSidebar(){
    if(!sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;

    }
} 
/////////////////     
var options1 = {
    series: [{
    data: [400, 430, 448, 470, 540]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Laptop','Phone','Monitor','Headphones','camera'
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options1);
  chart.render();
// ////////    //  
  var options2 = {
    series: [{
    name: 'Purchase Order',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'Stock Order',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Jan','Feb','Mar','Apr','May','Jun','July'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purcahse Order',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Stock Order',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options2);
  chart.render();