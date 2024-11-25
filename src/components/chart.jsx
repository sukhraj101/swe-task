import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const BillHighChart = ({ tableData }) => {
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'areaspline',
      },
      title: {
        text: '',
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: '',
        },
        labels: {
          format: '{value:%b %Y}',
        },
        accessibility: {
          rangeDescription: 'Range: Dec 2018 to Dec 2019',
        },
        tickInterval: 30 * 24 * 3600 * 1000,
      },
      yAxis: {
        title: {
          text: 'Power Factor',
        },
        labels: {
          format: '{value}',
        },
        min: 160,
        max: 200,
        accessibility: {
          rangeDescription: 'Range: 100 to 200',
        },
        lineWidth: 2,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%b %Y}: {point.y}',
      },
      plotOptions: {
        areaspline: {
          marker: {
            enable: false,
          },
        },
      },
      series: [
        {
          name: 'Electricity Consumption',
          data: tableData,
          fillColor: 'rgba(64, 158, 255, 0.3)',
        },
      ],
    });
  }, [tableData]);

  return <div id="container" style={{ width: '100%', height: '400px' }}></div>;
};

export default BillHighChart;
