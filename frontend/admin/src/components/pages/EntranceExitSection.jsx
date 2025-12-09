import "../style/EntranceExitSection.css";
import { useState } from "react";
import LicenseModal from "./LicenseModal.jsx";

export default function EntranceExitSection() {
  const [modalData, setModalData] = useState(null);

  // 모달 열기
  const openModal = () => {
    setModalData({
      Text: "12가3456",
      time: "2025-11-28 14:23",
      type: "입차",
      image: "/assets/sample-camera.jpg",
    });
  };

  // 모달 닫기
  const closeModal = () => setModalData(null);

  return (
    <div className="section-container">
      {/* ---------------- 상단 요약(KPI) 영역 ---------------- */}
      <div className="summary-grid">
        <div className="summary-card">
          <div>
            <p className="summary-title">금일 입차</p>
            <p className="summary-value">0대</p>
          </div>
          <div className="summary-icon green-icon">🚗</div>
        </div>

        <div className="summary-card">
          <div>
            <p className="summary-title">금일 출차</p>
            <p className="summary-value">0대</p>
          </div>
          <div className="summary-icon blue-icon">🚙</div>
        </div>

        <div className="summary-card">
          <div>
            <p className="summary-title">현재 주차</p>
            <p className="summary-value">0대</p>
          </div>
          <div className="summary-icon purple-icon">🚘</div>
        </div>
      </div>

      {/* ---------------- 상단 카메라 2개 ---------------- */}
      <div className="camera-grid">
        {/* 입구 카메라 */}
        <div className="camera-card">
          <div className="camera-top">
            <span className="camera-title-left">금일입차</span>
          </div>

          <div className="camera-view">
            <img src="/assets/sample-camera.jpg" alt="입구 카메라" />
          </div>

          <div className="camera-info">
            <p className="cam-title">입구 카메라</p>
            <p className="cam-id">Camera ID: 카메라 id</p>
            <p className="cam-time">입차시 카메라</p>
          </div>
        </div>

        {/* 출구 카메라 */}
        <div className="camera-card">
          <div className="camera-top">
            <span className="camera-title-left">금일출차</span>
          </div>

          <div className="camera-view">
            <img src="/assets/sample-camera.jpg" alt="출구 카메라" />
          </div>

          <div className="camera-info">
            <p className="cam-title">출구 카메라</p>
            <p className="cam-id">Camera ID: 카메라 id</p>
            <p className="cam-time">출차시 시간</p>
          </div>
        </div>
      </div>

      {/* ---------------- 하단 테이블 2개 ---------------- */}
      <div className="table-grid">
        {/* 입차 테이블 */}
        <div className="table-card">
          <h3 className="table-title">입차 차량 기록</h3>

          <table className="record-table">
            <thead>
              <tr>
                <th>차량번호</th>
                <th>시간</th>
                <th>상태</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-green">차량 번호</td>
                <td className="cell-green">시간</td>
                <td className="cell-green">
                  <span className="badge-complete">완료</span>
                </td>
                <td>
                  <button className="btn-view" onClick={openModal}>
                    보기
                  </button>
                </td>
              </tr>

              <tr>
                <td className="cell-green">차량 번호</td>
                <td className="cell-green">시간</td>
                <td className="cell-green">
                  <span className="badge-wait">대기</span>
                </td>
                <td>
                  <button className="btn-view" onClick={openModal}>
                    보기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 출차 테이블 */}
        <div className="table-card">
          <h3 className="table-title">출차 차량 기록</h3>

          <table className="record-table">
            <thead>
              <tr>
                <th>차량번호</th>
                <th>시간</th>
                <th>상태</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cell-green">차량 번호</td>
                <td className="cell-green">시간</td>
                <td className="cell-green">
                  <span className="badge-complete">완료</span>
                </td>
                <td>
                  <button className="btn-view" onClick={openModal}>
                    보기
                  </button>
                </td>
              </tr>

              <tr>
                <td className="cell-green">차량 번호</td>
                <td className="cell-green">시간</td>
                <td className="cell-green">
                  <span className="badge-wait">대기</span>
                </td>
                <td>
                  <button className="btn-view" onClick={openModal}>
                    보기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------- 모달 렌더링 ---------------- */}
      {modalData && <LicenseModal onClose={closeModal} data={modalData} />}
    </div>
  );
}
