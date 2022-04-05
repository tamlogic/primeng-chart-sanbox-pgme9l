import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';

  data = {
    labels: ['TASK 1', 'Task 2'],
    datasets: [
      {
        label: 'Completed Task',
        backgroundColor: ['#56C4B1', '#FC863E'],
        borderColor: ['#56C4B1', '#FC863E'],
        data: [],
      },
      {
        label: 'Completed Task',
        backgroundColor: ['#56C4B1', '#FC863E'],
        borderColor: ['#56C4B1', '#FC863E'],
        data: ['21', '8'],
      },
    ],
  };

  options = {
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          const tooltipValue =
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return parseInt(tooltipValue, 10).toLocaleString();
        },
      },
    },
    layout: {
      padding: {
        left: 100,
      },
    },
    legend: {
      display: false,
      position: 'top',
      onClick: (e) => e.stopPropagation(),
      labels: {
        fontColor: '#777777',
      },
    },
    scales: {
      xAxes: [
        {
          display: false,
          stacked: false,
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          barThickness: '22',
          stacked: true,
          scaleLabel: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      limitCenterText: false,
      datalabels: {
        display: true,
        anchor: 'end',
        align: 'end',
        formatter(value) {
          return parseInt(value, 10).toLocaleString();
        },
        color: '#777777',
        font: {
          weight: 500,
          family: 'Roboto',
          size: 12,
        },
      },
    },
  };
}
