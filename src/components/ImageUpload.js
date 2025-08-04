import React from "react";
import { FiUploadCloud, FiCheckCircle } from "react-icons/fi";

function ImageUpload({ onImageChange, onUpload, previewUrl, loading, image }) {
  return (
    <div className="upload-section">
      <label className="file-upload-label">
        <FiUploadCloud size={18} />
        Görsel Seç
        <input type="file" accept="image/*" onChange={onImageChange} />
      </label>

      {image && (
        <p className="file-name">
          Seçilen dosya: <strong>{image.name}</strong>
        </p>
      )}

      {previewUrl && (
        <div className="image-preview-container">
          <img src={previewUrl} alt="Yüklenen görsel" className="preview-image" />
          <div style={{ marginTop: 20 }}>
            <button
              onClick={onUpload}
              disabled={loading}
              className="upload-button"
            >
              <FiCheckCircle size={18} />
              {loading ? "Tahmin Yapılıyor..." : "Tahmin Al"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
