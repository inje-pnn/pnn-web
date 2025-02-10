// src/util/imageUpload.js

import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../firebase-config';

// 이미지 파일 업로드
export const uploadImageToFirebase = async (file) => {
  try {
    if (!file) return null;
    
    // 파일 경로 생성 (projects/년월일시분초_파일명)
    const filePath = `projects/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, filePath);
    
    // 파일 업로드
    const snapshot = await uploadBytes(storageRef, file);
    
    // 업로드된 파일의 URL 가져오기
    const downloadUrl = await getDownloadURL(snapshot.ref);
    
    // 파일 경로와 URL 반환
    return {
      url: downloadUrl,
      path: filePath
    };
  } catch (error) {
    console.error('이미지 업로드 중 에러 발생:', error);
    throw new Error('이미지 업로드에 실패했습니다.');
  }
};

// 이미지 파일 삭제
export const deleteImageFromFirebase = async (filePath) => {
  try {
    if (!filePath) return;
    
    const imageRef = ref(storage, filePath);
    await deleteObject(imageRef);
  } catch (error) {
    console.error('이미지 삭제 중 에러 발생:', error);
    throw new Error('이미지 삭제에 실패했습니다.');
  }
};

// 이미지 파일 크기 및 타입 검증
export const validateImage = (file) => {
  // 허용할 이미지 타입
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  // 최대 파일 크기 (5MB)
  const maxSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    throw new Error('JPG, PNG, GIF 형식의 이미지만 업로드 가능합니다.');
  }

  if (file.size > maxSize) {
    throw new Error('이미지 크기는 5MB 이하여야 합니다.');
  }

  return true;
};

// 이미지 업로드 전 처리 함수
export const handleImageUpload = async (file) => {
  try {
    // 이미지 유효성 검사
    validateImage(file);
    
    // Firebase에 이미지 업로드
    const imageData = await uploadImageToFirebase(file);
    
    return imageData;
  } catch (error) {
    throw error;
  }
};