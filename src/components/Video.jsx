import React, { useState, useEffect } from "react";
import "../components/styles/Video.css";

const Video = () => {
  const [selectedFile, setSelectedFile] = useState(() => {
    const saved = localStorage.getItem("savedVideo");
    return saved ? JSON.parse(saved) : null;
  });
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      const videoData = {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
      };
      localStorage.setItem("savedVideo", JSON.stringify(videoData));
    }
  }, [selectedFile]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setSelectedFile(file);
    }
  };

  const handleRemoveVideo = () => {
    setSelectedFile(null);
    localStorage.removeItem("savedVideo");
  };

  return (
    <div className="VideoSection">
      <div className="VideoUpLoadContainer">
        <div
          className={`TextContainer ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <label htmlFor="video-upload" className="upload-label">
            <span className="SpanVideo">🎥</span>
            <h1 className="HeaderVideo">
              {selectedFile ? selectedFile.name : "Ваша історія успіху тут"}
            </h1>
            <p className="paragrafVideo">
              {selectedFile ? (
                <>
                  {`Файл готовий до завантаження (${(
                    selectedFile.size /
                    (1024 * 1024)
                  ).toFixed(2)} MB)`}
                  <button onClick={handleRemoveVideo} className="remove-video">
                    Видалити відео
                  </button>
                </>
              ) : (
                "Цей блок чекає на ваше відео! Поділіться моментом, коли ваш ноутбук знайшов нового власника і став частиною чийогось нового початку. Ваш досвід може надихнути інших зробити свій внесок!"
              )}
            </p>
            <input
              type="file"
              id="video-upload"
              accept="video/*"
              onChange={handleFileSelect}
              className="file-input"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="VideoInstruction">
        <div className="InstructionContainer">
          <h1 className="InstructionHeader">Поділися своєю історією успіху!</h1>
          <p className="InstructionParagraf">
            Станьте першим учасником, чия історія надихне інших! Розкажіть, як
            ваш ноутбук допоміг ветерану зробити крок до нових можливостей.
          </p>
          <div className="SignUpDisplay">
            <button className="SignUp">Зареєструватися</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
