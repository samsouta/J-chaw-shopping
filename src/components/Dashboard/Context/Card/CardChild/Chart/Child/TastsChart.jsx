import React, { Component } from "react";
import Chart from "react-apexcharts";

class TastsChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
              chart: {
                id: "basic-bar",
              },
              xaxis: {
                categories:["January","February","March","April","May","June","July",
                "August","September","October","November","December"],
              },
              yaxis: {
                title: {
                  text: 'Price'
                },
              },
              stroke: {
                curve: 'smooth',
              },
            
            },
            
           
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              },
              {
                name: "series-2",
                data: [40, 30, 65, 80, 19, 90, 40, 51]
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
                            type="area"
                            width="100%"
                            height="250"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TastsChart;

