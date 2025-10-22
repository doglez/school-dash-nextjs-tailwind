"use client";
import Image from "next/image";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Mon",
        present: 60,
        absent: 40,
    },
    {
        name: "Tue",
        present: 70,
        absent: 60,
    },
    {
        name: "Wen",
        present: 90,
        absent: 75,
    },
    {
        name: "Thu",
        present: 95,
        absent: 65,
    },
    {
        name: "Fri",
        present: 50,
        absent: 34,
    },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <ResponsiveContainer width={"100%"} height={"90%"}>
                <BarChart width={500} height={300} data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <YAxis
                        width="auto"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: "10px",
                            borderColor: "lightgrey",
                        }}
                    />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{
                            paddingTop: "20px",
                            paddingBottom: "40px",
                        }}
                    />
                    <Bar
                        dataKey="present"
                        fill="#fae27c"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill="#c3ebfa"
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
