import "../style/LicenseModal.css";

export default function LicenseModal({ onClose, data }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>차량 번호판 확인</h2>
          <p>{data.time}</p>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-image">
          <img src={data.image} alt="번호판 이미지" />
        </div>

        <div className="modal-section">
          <p className="label">인식된 번호판</p>
          <div className="number-edit">
            <input value={data.plate} readOnly />
            <button className="edit-btn">수정</button>
          </div>
        </div>

        <div className="modal-info-box">
          <div>
            <p className="info-label">출입 유형</p>
            <p className="info-value">{data.type}</p>
          </div>

          <div>
            <p className="info-label">시간</p>
            <p className="info-value">{data.time}</p>
          </div>
        </div>

        <button className="modal-close-footer" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
