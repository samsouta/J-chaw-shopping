import React, { Component } from "react";
import Chart from "react-apexcharts";

class WebView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
      
    };
  }

  render() {
    return (
      <div className="app bg-white py-5 flex justify-center items-start w-[350px] rounded-lg">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="250"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WebView;

