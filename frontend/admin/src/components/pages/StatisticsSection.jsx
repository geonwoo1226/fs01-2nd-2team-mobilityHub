import React, { useState } from "react";
import "../style/StatisticsSection.css";

export default function StatisticsSection() {
  const [periodType, setPeriodType] = useState("daily");

  return (
    <div className="statistics-page">
      {/* ------------------------ 상단 SUMMARY ------------------------ */}
      <div className="summary-row">
        <div className="summary-card">
          <p className="summary-title">오늘 총 이용량</p>
          <p className="summary-value">총 이용량</p>
        </div>

        <div className="summary-card">
          <p className="summary-title">이번 달 이용량</p>
          <p className="summary-value">이용량</p>
        </div>

        <div className="summary-card">
          <p className="summary-title">평균 체류시간</p>
          <p className="summary-value">시간</p>
        </div>
      </div>

      {/* ------------------------ 중단: 그래프 2개 ------------------------ */}
      <div className="chart-row">
        <div className="chart-box">
          <h3 className="chart-title">금일 집계 (시간대별 입출차)</h3>
          <div className="chart-placeholder">여기에 선 그래프 들어갈 자리</div>
        </div>

        <div className="chart-box">
          <h3 className="chart-title">금일 이용회원 (구역별)</h3>
          <div className="chart-placeholder">여기에 막대 그래프 들어갈 자리</div>
        </div>
      </div>

      {/* ------------------------ 하단 영역 ------------------------ */}
      <div className="bottom-row">
        {/* 좌측 테이블 */}
        <div className="parking-list">
          <div className="parking-title-box">
            <h3 className="parking-title">현재 주차장 차량 목록</h3>
            <span className="parking-count">총 3대 주차중</span>
          </div>

          <table className="parking-table">
            <thead>
              <tr>
                <th>차량번호</th>
                <th>주차 위치</th>
                <th>입차 시간</th>
                <th>주차 시간</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>차량번호</td>
                <td>주차위치</td>
                <td>입차 시간</td>
                <td>주차 시간</td>
              </tr>

              <tr className="parking-list">
                <td>차량번호</td>
                <td>주차위치</td>
                <td>입차 시간</td>
                <td>주차 시간</td>
              </tr>

              <tr className="parking-list">
                <td>차량번호</td>
                <td>주차위치</td>
                <td>입차 시간</td>
                <td>주차 시간</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 우측 날씨 + 센서 */}
        <div className="weather-info-box">
          <p className="weather-date-title">오늘 날짜</p>
          <p className="weather-date">2025년 12월 8일 월요일</p>

          <div className="weather-box">
            <span className="weather-icon">🌧</span>
            <span className="weather-text">비</span>
          </div>

          <div className="water-box">
            <p className="water-title">물 수위 센서 시스템</p>

            <div className="water-status">
              <span className="indicator"></span>
              <span className="state-text">ON</span>
            </div>

            <p className="water-message">비가 내리고 있어 센서가 활성화되었습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
