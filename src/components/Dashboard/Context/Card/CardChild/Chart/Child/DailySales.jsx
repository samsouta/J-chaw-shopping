import React, { Component } from "react";
import Chart from "react-apexcharts";

class DailySales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996]
                },
                markers: {
                    size: 5,
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60]
                }
            ],

        };
    }

    render() {
        return (
            <div className="app flex items-start py-5 bg-white justify-center w-[350px] rounded-lg">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="100%"
                            height="250"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DailySales;

