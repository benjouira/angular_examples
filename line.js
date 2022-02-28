import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from `chart.js`

Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

const chart = new Chart(ctx, {
    type: 'line',
    // data: ...
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart Title'
            }
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    }
})

options: {
  scales: {
    xAxes: [{
      id: 'x',
      type: 'time',
      display: true,
      title: {
        display: true,
        text: 'Date'
      },
      ticks: {
        major: {
          enabled: true
        },
        font: function(context) {
          if (context.tick && context.tick.major) {
            return {
              weight: 'bold',
              color: '#FF0000'
            };
          }
        }
      }
    }],
    yAxes: [{
      id: 'y',
      display: true,
      title: {
        display: true,
        text: 'value'
      }
    }]
  }
}


options: {
  scales: {
    x: {
      type: 'time',
      display: true,
      title: {
        display: true,
        text: 'Date'
      },
      ticks: {
        major: {
          enabled: true
        },
        color: (context) => context.tick && context.tick.major && '#FF0000',
        font: function(context) {
          if (context.tick && context.tick.major) {
            return {
              weight: 'bold'
            };
          }
        }
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'value'
      }
    }
  }
}
