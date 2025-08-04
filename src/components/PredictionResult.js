import React from "react";

function PredictionResult({ tags, description }) {
  return (
    <div className="result-box">
      <h2>Tahmin Sonuçları</h2>
      <ul className="result-list">
        {Object.entries(tags).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      {description && (
        <p className="result-description">
          <strong>Açıklama:</strong> {description}
        </p>
      )}
    </div>
  );
}

export default PredictionResult;
