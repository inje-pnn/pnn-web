import axios from "axios";

export const fetchGitHubReadme = async (url) => {
  const match = url.match(/github\.com\/([\w-]+)\/([\w-]+)/);
  if (!match) {
    throw new Error("유효한 GitHub URL을 입력하세요.");
  }

  const [_, owner, repo] = match;

  const readmeResponse = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/contents/README.md`
  );

  // Base64 디코딩
  const decodedContent = decodeURIComponent(
    escape(atob(readmeResponse.data.content.replace(/\s/g, "")))
  );

  // 상대 경로 이미지 URL을 절대 경로로 변환
  const processedContent = decodedContent.replace(
    /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
    (match, altText, imagePath) => {
      if (imagePath.startsWith("/")) {
        imagePath = imagePath.substring(1);
      }
      return `![${altText}](https://raw.githubusercontent.com/${owner}/${repo}/master/${imagePath})`;
    }
  );

  return processedContent;
};