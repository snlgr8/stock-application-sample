import React, { Component } from 'react';
import Chart from 'react-google-charts';

class Dashboard extends Component {
  render() {
    return (
      <div style={{ display: 'flex', maxWidth: 900 }}>
        <Chart
          width={900}
          height={400}
          chartType='ColumnChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
          ]}
          options={{
            title: 'Population of US cities',
            chartArea: { width: '70%' },
            hAxis: {
              title: 'Population',
              minValue: 0,
            },
            vAxis: {
              title: 'City',
            },
          }}
          legendToggle
          chartActions={() => console.log('clicked')}
        />
      </div>
    );
  }
}

export default Dashboard;
