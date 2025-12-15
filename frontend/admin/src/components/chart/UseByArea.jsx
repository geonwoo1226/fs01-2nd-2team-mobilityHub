import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

// 예제: API에서 받아온 workList를 props 대신 내부 state에서 처리
const UseByArea = ({ workList = [] }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!workList || workList.length === 0) return;

    // 1️⃣ workType별 count 집계 (콤마 구분 시 분리)
    const dataMap = workList.reduce((acc, item) => {
      const types = (item.workType || "Unknown").split(",");
      types.forEach((type) => {
        const trimmed = type.trim();
        acc[trimmed] = (acc[trimmed] || 0) + 1;
      });
      return acc;
    }, {});

    // 2️⃣ 색상 지정
    const colorMap = {
      park: "#76A7FA",
      carwash: "#FFA500",
      repair: "#FF6347",
      Unknown: "#C0C0C0",
    };

    // 3️⃣ Material BarChart용 데이터
    const data = [
      ["작업 유형", "이용수", "style", "tooltip"], // role 문자열 사용
      ...Object.entries(dataMap).map(([type, count]) => [
        String(type), // 문자열 X축
        Number(count), // 숫자 Y값
        colorMap[type] || "#76A7FA",
        `${type}: ${count}회`, // tooltip
      ]),
    ];

    setChartData(data);
  }, [workList]);

  if (!chartData || chartData.length === 0) return <div>데이터 없음</div>;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartType="Bar" // Material BarChart
        width="100%"
        height="100%"
        data={chartData}
        options={{
          legend: { position: "none" },
          hAxis: { title: "이용수" },
          vAxis: { title: "작업 유형" },
          bars: "vertical",
          bar: { groupWidth: "60%" },
          tooltip: { isHtml: true },
        }}
      />
    </div>
  );
};

export default UseByArea;
