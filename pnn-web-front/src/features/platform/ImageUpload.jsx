import React, { useState, useRef } from "react";
import styled from "styled-components";

const DropZone = styled.div`
  width: 400px;
  height: 300px;
  border: 2px dashed ${props => props.isDragging ? '#4a90e2' : '#ededed'};
  background-color: ${props => props.isDragging ? '#f0f8ff' : '#fcfcfc'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: #4a90e2;
    background-color: #f0f8ff;
  }

  ${props => props.isDragging && `
    transform: scale(1.02);
    border-width: 3px;
    box-shadow: 0 0 10px rgba(74, 144, 226, 0.3);
  `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: ${props => props.isDragging ? '0' : '-100%'};
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  ${props => props.isDragging && `
    &::after {
      left: 100%;
    }
  `}
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const DropzoneContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  pointer-events: none;
  opacity: ${props => props.hasImage ? 0 : 1};
  transition: opacity 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 18px;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  ${props => props.show && `
    opacity: 1;
  `}
`;

export const ImageUpload = ({ image, onImageChange, onImageRemove }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          onImageChange(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('이미지 파일만 업로드 가능합니다.');
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInput = (e) => {
    handleFiles(e.target.files);
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    onImageRemove();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <DropZone
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        isDragging={isDragging}
      >
        {image && (
          <>
            <PreviewImage src={image} alt="Preview" />
            <RemoveButton 
              onClick={handleRemoveImage}
              show={true}
            >
              ×
            </RemoveButton>
          </>
        )}
        <DropzoneContent hasImage={!!image}>
          <p>이미지를 드래그하여 업로드하거나 클릭하여 선택하세요</p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            (지원 형식: JPG, PNG, GIF)
          </p>
        </DropzoneContent>
      </DropZone>
    </>
  );
};