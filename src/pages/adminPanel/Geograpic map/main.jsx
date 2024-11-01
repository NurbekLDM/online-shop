import React from "react";
import {Chart} from "react-google-charts";

export const data = [
    ["Country", "Orders"],
    ["Germany", 300],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["Russia", 700],
    ["Uzbekistan", 500],
    ["Kyrgyzstan", 400],
    ["India", 900],
    ["South Korea ", 600],
    ["Greenland", 500],
    ["Australia", 700],
    ["Portugal", 777],
    ["United Kingdom", 400],
    ["Spain", 500],
    ["Egypt", 600],
    ["Senegal", 700],
    ["South Africa", 900],
    ["China", 700],
    ["Guatemala", 666],
    ["Argentina", 200],
    ["Morocco", 400],
    ["Albania", 500],
    ["Tajikistan", 333],
    ["Japan", 600]
];

export default function Map() {
    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({chartWrapper}) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="300px"
            data={data}

        />
    );
}