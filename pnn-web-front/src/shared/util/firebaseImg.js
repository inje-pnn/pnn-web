import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase";

const storage = getStorage(app);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB 제한

export const uploadImageToFirebase = async (file, folder = "uploads") => {
  if (!file) throw new Error("파일이 없습니다.");
  if (file.size > MAX_FILE_SIZE) throw new Error("파일 크기는 5MB 이하로 업로드해주세요.");

  return new Promise((resolve, reject) => {
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`업로드 진행률: ${progress.toFixed(2)}%`);
      },
      (error) => {
        console.error("이미지 업로드 실패:", error);
        reject(new Error(`이미지 업로드 중 오류 발생: ${error.message}`));
      },
      async () => {
        try {
          // ✅ 업로드 완료 후 다운로드 URL 가져오기
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("업로드 완료, 다운로드 URL:", downloadURL);
          resolve(downloadURL);
        } catch (error) {
          console.error("URL 가져오기 실패:", error);
          reject(new Error("업로드는 완료되었지만 URL을 가져오는 데 실패했습니다."));
        }
      }
    );
  });
};
