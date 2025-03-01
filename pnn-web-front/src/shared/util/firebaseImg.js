import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";

const storage = getStorage(app);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB 제한
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp"]; // 허용 확장자

export const uploadImageToFirebase = async (file, folder = "uploads") => {
  if (!file || !file.name) {
    throw new Error("유효한 파일이 아닙니다. 파일을 다시 선택해주세요.");
  }

  // ✅ 파일 크기 검사
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      `파일 크기는 최대 5MB까지 업로드할 수 있습니다. (현재: ${(
        file.size /
        (1024 * 1024)
      ).toFixed(2)}MB)`
    );
  }

  // ✅ 파일 확장자 및 MIME 타입 검사
  let fileExtension = file.name?.split(".").pop()?.toLowerCase() || "";
  const fileType = file.type || "";

  // 파일 확장자가 없으면 MIME 타입 기반 확장자 설정
  if (!fileExtension) {
    if (fileType === "image/jpeg") fileExtension = "jpg";
    else if (fileType === "image/png") fileExtension = "png";
    else if (fileType === "image/webp") fileExtension = "webp";
    else if (fileType === "image/gif") fileExtension = "gif";
  }

  if (
    !ALLOWED_MIME_TYPES.includes(fileType) &&
    !ALLOWED_EXTENSIONS.includes(fileExtension)
  ) {
    throw new Error(
      "지원되지 않는 파일 형식입니다. (허용: JPG, PNG, WEBP, GIF)"
    );
  }

  return new Promise((resolve, reject) => {
    const finalExtension = fileExtension || "jpg"; // 확장자가 없으면 기본값으로 jpg 설정
    const fileName = `${Date.now()}_${crypto.randomUUID()}.${finalExtension}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    let lastLoggedProgress = 0;

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        // ✅ 10% 단위로만 로그 출력
        if (progress - lastLoggedProgress >= 10 || progress === 100) {
          lastLoggedProgress = progress;
        }
      },
      (error) => {
        console.error("이미지 업로드 실패:", error);
        reject(new Error(`이미지 업로드 중 오류 발생: ${error.message}`));
      },
      async () => {
        try {
          // ✅ 업로드 완료 후 다운로드 URL 가져오기
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          console.error("URL 가져오기 실패:", error);
          reject(
            new Error("업로드는 완료되었지만 URL을 가져오는 데 실패했습니다.")
          );
        }
      }
    );
  });
};
