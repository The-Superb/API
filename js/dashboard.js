(function($) {
  'use strict';

  $(function() {
    if ($("#total-sales-chart").length) {

      function getTotalSalesChart() {
        fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
        .then(res => res.json())              
        .then(data => {     

              let salesChart = data.labels;
              localStorage.setItem('totalSalesChart1', salesChart);

              let salesChartData1 = data.datasets[0].data;
              localStorage.setItem('totalSalesChart2', salesChartData1);

              let salesChartData2 = data.datasets[1].data;
              localStorage.setItem('totalSalesChart3', salesChartData2);
        })  
    }
    getTotalSalesChart();

    let salesChartArray = [];
    salesChartArray = localStorage.getItem('totalSalesChart1').split(",");

    let salesChartData1Array = [];
    salesChartData1Array = localStorage.getItem('totalSalesChart2').split(",");

    let salesChartData2Array = [];
    salesChartData2Array = localStorage.getItem('totalSalesChart3').split(",");

      var areaData = {
        labels: salesChartArray,
        datasets: [
          {
            data: salesChartData1Array,
            backgroundColor: [
              'rgba(61, 165, 244, .0)'
            ],
            borderColor: [
              'rgb(61, 165, 244)'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "services"
          },
          {
            data: salesChartData2Array,
            backgroundColor: [
              'rgba(241, 83, 110, .0)'
            ],
            borderColor: [
              'rgb(241, 83, 110)'
            ],
            borderWidth: 2,
            fill: 'origin',
            label: "services"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              display: true,
              padding: 20,
              fontColor:"#000",
              fontSize: 14
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              fontColor: "#000",
              fontSize: 14,
              padding: 18,
              stepSize: 100000,
              callback: function(value) {
                var ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                ];
                function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                      if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                      }
                    }
                    return n;
                }
                return formatNumber(value);
              }
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .37
          },
          point: {
            radius: 0
          }
        }
      }
      var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
 
    if ($("#users-chart").length) {
 
      function getUserChart() {
        fetch('https://inlupp-fa.azurewebsites.net/api/total-users')
        .then(res => res.json())              
        .then(data => {
    
            for(let i=0; i < data.dataset.labels.length; i++) {     

                let usersGraph = data.dataset.labels;
                localStorage.setItem('users-chart', usersGraph);
            }
    
            for(let i=0; i < data.dataset.data.length; i++) {
              let usersGraphData = data.dataset.data;
                localStorage.setItem('users-chart', usersGraphData);
            }
        })  
    }
    getUserChart();

    let usersGraphArray = [];
    usersGraphArray = localStorage.getItem('users-chart').split(",");

    let usersGraphDataArray = [];
    usersGraphDataArray = localStorage.getItem('users-chart').split(",");


      var areaData = {
        labels: usersGraphArray, 
        datasets: [{
            data: usersGraphDataArray, // Min kod slut
            backgroundColor: [
              '#e0fff4'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
 
    if ($("#users-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            data: [160, 105, 225, 140, 180, 61, 120, 60, 90],
            backgroundColor: [
              'rgba(0, 198, 137, .1)'
            ],
            borderWidth: 2,
            borderColor: "#00c689",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#users-chart-dark").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
 
    if ($("#projects-chart").length) {
 
      function getProjectsChart() {
        fetch('https://inlupp-fa.azurewebsites.net/api/total-projects')
        .then(res => res.json())              
        .then(data => {
    
            for(let i=0; i < data.dataset.labels.length; i++) {     

                let projectsGraph = data.dataset.labels;
                localStorage.setItem('projects-chart', projectsGraph);
            }
    
            for(let i=0; i < data.dataset.data.length; i++) {
              let projectsGraphData = data.dataset.data;
                localStorage.setItem('projects-chart', projectsGraphData);
            }
        })  
    }
    getProjectsChart();

    let projectsGraphArray = [];
    projectsGraphArray = localStorage.getItem('projects-chart').split(",");

    let projectsGraphDataArray = [];
    projectsGraphDataArray = localStorage.getItem('projects-chart').split(",");
 
      var areaData = {
        labels: projectsGraphArray,
        datasets: [{
            data: projectsGraphArray,
            backgroundColor: [
              '#e5f2ff'
            ],
            borderWidth: 2,
            borderColor: "#3da5f4",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .05
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
 
    if ($('#offlineProgress').length) {
      function getDownloadsOffline() {
        fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
        .then(res => res.json())              
        .then(data => {
    
            let offlineCircle = data[0].circleValue;
            localStorage.setItem('offlineProgress', offlineCircle);
      })  
  }
 
  getDownloadsOffline()
  let offlineNumber = parseFloat(localStorage.getItem('offlineProgress'));
 
      var bar = new ProgressBar.Circle(offlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e',
          width: 6
        },
        to: {
          color: '#f1536e',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(offlineNumber); // Number from 0.0 to 1.0
    }
 
    if ($('#onlineProgress').length) {
 
      function getDownloadsOnline() {
        fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
        .then(res => res.json())              
        .then(data => {
    
            let onlineCircle = data[1].circleValue;
            localStorage.setItem('onlineProgress', onlineCircle);
      })  
  }
 
  getDownloadsOnline()
  let onlineNumber = parseFloat(localStorage.getItem('onlineProgress'));
 
      var bar = new ProgressBar.Circle(onlineProgress, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#fff",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(onlineNumber); // Number from 0.0 to 1.0
    }
 
    if ($('#offlineProgressDark').length) {
      var bar = new ProgressBar.Circle(offlineProgressDark, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#131633",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#f1536e',
          width: 6
        },
        to: {
          color: '#f1536e',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.65); // Number from 0.0 to 1.0
    }
 
    if ($('#onlineProgressDark').length) {
      var bar = new ProgressBar.Circle(onlineProgressDark, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: true,
          style : {
            color : "#131633",
            position: 'absolute',
            left: '40%',
            top: '50%'
          }
        },
        svgStyle: {
          width: '90%'
        },
        from: {
          color: '#fda006',
          width: 6
        },
        to: {
          color: '#fda006',
          width: 6
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '1rem';
      bar.animate(.84); // Number from 0.0 to 1.0
    }
 
    if ($("#projects-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr","May"],
        datasets: [{
            data: [220, 120, 140, 135, 160, 65, 160, 135, 190,165, 120, 160, 140, 140, 130, 120,  150],
            backgroundColor: [
              'rgba(61, 165, 244, .1)'
            ],
            borderWidth: 2,
            borderColor: "#3da5f4",
            fill: 'origin',
            label: "purchases"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 300
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .05
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartCanvas = $("#projects-chart-dark").get(0).getContext("2d");
      var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
 
    if ($("#orders-chart-dark").length) {
      var CurrentChartCanvas = $("#orders-chart-dark").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Profit',
              data: [40, 100, 120, 80, 140, 120, 170, 100, 200, 150, 120, 100, 55],
              backgroundColor: '#3da5f4'
            },
            {
              label: 'Profit',
              data: [90, 80, 180, 60, 100, 60, 120, 150, 100, 110, 150, 150, 100],
              backgroundColor: '#23284f'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 30,
              bottom: -10
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: 3,
              barPercentage: .3,
              ticks: {
                beginAtZero: true,
                fontColor: "#9fa0a2",
                display: false
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
 
    if ($("#revenue-chart").length) {
      var CurrentChartCanvas = $("#revenue-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["1982","","1993", "", "2003", "", "2013"],
          datasets: [{
              label: 'Europe',
              data: [280000, 90000, 150000, 200000, 50000, 150000, 260000, 150000, 260000],
              backgroundColor: '#405189'
            },
            {
              label: 'Africa',
              data: [250000, 230000, 130000, 160000, 110000, 230000, 50000, 230000, 50000],
              backgroundColor: '#3da5f4'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                fontStyle: 400,
                fontSize: 14,
                stepSize: 100000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .5,
              barPercentage: 1,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
 
    if ($("#distribution-chart").length) {

      function getDistributionChart() {
        fetch('https://inlupp-fa.azurewebsites.net/api/distribution')
        .then(res => res.json())              
        .then(data => {
    
            for(let i=0; i < data.labels.length; i++) {     

                let distributionChart = data.labels;
                localStorage.setItem('distributionChart1', distributionChart);
            }
    
            for(let i=0; i < data.data.length; i++) {
              
              let distributionChartData = data.data;
              localStorage.setItem('distributionChart2', distributionChartData);
            }

              let distributionChartCities = data.cities;
              localStorage.setItem('distributionChart3', distributionChartCities);

              let distributionChartProcentage = data.procentage;
              localStorage.setItem('distributionChart4', distributionChartProcentage);
        })
    }
    getDistributionChart();

    let distributionChartArray = [];
    distributionChartArray = localStorage.getItem('distributionChart1').split(",");

    let distributionChartDataArray = [];
    distributionChartDataArray = localStorage.getItem('distributionChart2').split(",");

    let distributionChartCitiesArray = [];
    distributionChartCitiesArray = localStorage.getItem('distributionChart3').split(",");

    let distributionChartProcentageArray = [];
    distributionChartProcentageArray = localStorage.getItem('distributionChart4');

      var areaData = {
        labels: distributionChartArray,
        datasets: [{
            data: distributionChartDataArray,
            backgroundColor: [
              "#3da5f4", "#f1536e", "#fda006"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="distribution-chart">');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
            text.push(`<p>${distributionChartCitiesArray[0]}</p>`);
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
            text.push(`<p>${distributionChartCitiesArray[1]}</p>`);
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
            text.push(`<p>${distributionChartCitiesArray[2]}</p>`);
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var distributionChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";
      
          var text = distributionChartProcentageArray + "%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
      var distributionChart = new Chart(distributionChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: distributionChartPlugins
      });
      document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
    }

    if ($("#distribution-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [100, 50, 50],
            backgroundColor: [
              "#00c689", "#3da5f4","#f1536e"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="distribution-chart">');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
            text.push('<p>Texas</p>');
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
            text.push('<p>Utah</p>');
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
            text.push('<p>Georgia</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var distributionChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
      
          var text = "70%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var distributionChartCanvas = $("#distribution-chart-dark").get(0).getContext("2d");
      var distributionChart = new Chart(distributionChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: distributionChartPlugins
      });
      document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
    }
 
    if ($("#distribution-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [100, 50, 50],
            backgroundColor: [
              "#00c689", "#3da5f4","#f1536e"
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="distribution-chart">');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[0] + '"></div>');
            text.push('<p>Texas</p>');
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[1] + '"></div>');
            text.push('<p>Utah</p>');
            text.push('</div>');
            text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[2] + '"></div>');
            text.push('<p>Georgia</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var distributionChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#b1b1b5";
      
          var text = "70%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var distributionChartCanvas = $("#distribution-chart-dark").get(0).getContext("2d");
      var distributionChart = new Chart(distributionChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: distributionChartPlugins
      });
      document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
    }
 
    if ($("#sale-report-chart").length) {

      function getSaleReportChart() {
        fetch('https://inlupp-fa.azurewebsites.net/api/sales-report')
        .then(res => res.json())              
        .then(data => {
    
            for(let i=0; i < data.labels.length; i++) {     

                let saleReportChartLabels = data.labels;
                localStorage.setItem('saleReportChart1', saleReportChartLabels);
            }
            
            for(let i=0; i < data.datasets.length; i++) {

                let saleReportChartLabel = data.datasets[i].label;
                localStorage.setItem('saleReportChart2', saleReportChartLabel);
            }
              
              let saleReportChartData = data.datasets[0].data;
              localStorage.setItem('saleReportChart3', saleReportChartData);

              let saleReportBackgroundColor = data.datasets[0].backgroundColor;
              localStorage.setItem('saleReportChart4', saleReportBackgroundColor);
        })  
    }
    getSaleReportChart();

    let saleReportChartLabelsArray = [];
    saleReportChartLabelsArray = localStorage.getItem('saleReportChart1').split(",");

    let saleReportChartLabelArray = [];
    saleReportChartLabelArray = localStorage.getItem('saleReportChart2').split(",");

    let saleReportChartDataArray = [];
    saleReportChartDataArray = localStorage.getItem('saleReportChart3').split(",");

    let saleReportBackgroundColorArray = [];
    saleReportBackgroundColorArray = localStorage.getItem('saleReportChart4').split(",");

      var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: saleReportChartLabelsArray,
          datasets: [{
              label: saleReportChartLabelArray,
              data: saleReportChartDataArray,
              backgroundColor: saleReportBackgroundColorArray
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false
              },
              ticks: {
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14,
                stepSize: 10000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .6,
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                display: true,
                padding: 20,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
              barPercentage: .7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
 
    if ($("#sale-report-chart-dark").length) {
      var CurrentChartCanvas = $("#sale-report-chart-dark").get(0).getContext("2d");
      var CurrentChart = new Chart(CurrentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan","","Feb","","Mar", "", "Apr","", "May", "", "Jun"],
          datasets: [{
              label: 'Europe',
              data: [28000, 9000, 15000, 20000, 5000, 15000, 26000, 15000, 26000,20000, 28000],
              backgroundColor: ["#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4","#f1536e","#3da5f4"]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false,
                color: "rgba(255, 255, 255, .1)",
                zeroLineColor: "rgba(255, 255, 255, .1)"
              },
              ticks: {
                fontColor: "#b1b1b5",
                display: true,
                padding: 20,
                fontSize: 14,
                stepSize: 10000,
                callback: function(value) {
                  var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                  ];
                  function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                            return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                  }
                  return "$" + formatNumber(value);
                }
              }
            }],
            xAxes: [{
              stacked: false,
              categoryPercentage: .6,
              ticks: {
                beginAtZero: true,
                fontColor: "#b1b1b5",
                display: true,
                padding: 20,
                fontSize: 14
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: true
              },
              barPercentage: .7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
  });
})(jQuery);