import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageUpload from "./components/ImageUpload";
import PredictionResult from "./components/PredictionResult";

function App() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setPrediction(null);
    setDescription("");
    setError(null);
  };

  const handleUpload = async () => {
    if (!image) return alert("Lütfen önce bir görsel seçin.");
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const fakeResponse = {
        tags: {
          "Yaka Tipi": "Bisiklet Yaka",
          "Kol Tipi": "Kısa Kol",
          "Kumaş": "Pamuk",
          "Desen": "Düz",
        },
        description:
          "Bu kısa kollu pamuk tişört, yaz mevsimi için rahat ve sade bir seçenektir.",
      };
      setPrediction(fakeResponse.tags);
      setDescription(fakeResponse.description);
    } catch {
      setError("Tahmin alınamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rgb-wrapper">
      <div className="glass-container">
        <Header />
        <div className="grid-layout">
          <ImageUpload
            onImageChange={handleImageChange}
            onUpload={handleUpload}
            previewUrl={previewUrl}
            loading={loading}
            image={image}
          />
          {prediction && (
            <PredictionResult tags={prediction} description={description} />
          )}
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default App;
