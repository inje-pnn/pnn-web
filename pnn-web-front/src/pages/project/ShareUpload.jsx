import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Cookies from "js-cookie";
import { OptionDropdown } from "../../features/platform/OptionDropdown";
import { ImageUpload } from "../../features/platform/ImageUpload";
import { fetchGitHubReadme } from "../../shared/api/githubApi";
import { uploadImageToFirebase } from "../../shared/util/firebaseImg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const TitleFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  width: 100%;
  margin: 60px 0px 100px 0px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 30px 0px 50px 0px;
  }
`;

const SubTitleFrame = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GlobalInput = styled.input`
  padding-left: 20px;
  padding-right: 40px;
  font-size: 14px;
  width: 100%;
  height: 50px;
  border: solid 1px #dbdbdb;
  border-radius: 4px;

  &:hover {
    border: solid 0.5px #dbdbdb;
  }

  &:focus {
    border: solid 1.5px #222222;
    outline: none;
  }

  ${(props) =>
    props.isOverLimit &&
    `
    border-color: #ff0000;

    &:focus {
      border-color: #ff0000;
    }
  `}

  @media (max-width: 768px) {
    height: 40px;
    font-size: 13px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const CharacterCounter = styled.span`
  padding: 5px 0 0 5px;
  font-size: 12px;
  color: ${(props) => (props.isOverLimit ? "#ff0000" : "#666")};

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 0 0 3px;
  }
`;

const TagListFrame = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ReadMeFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 20px;
  padding: 60px;
  overflow: auto;
  line-height: 2.5;

  @media (max-width: 768px) {
    padding: 20px;
    line-height: 2;
    margin-top: 16px;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 8px auto;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin: 6px auto;
  }
`;

const TableStyles = styled.div`
  table {
    width: auto;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 4px;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    table {
      font-size: 14px;
      margin: 16px 0;
      width: 100%;
    }

    th,
    td {
      padding: 3px;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-top: solid 2px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  position: relative;
  background-color: #f6f6f6;
  border-bottom: solid 1px #e0e0e0;
  width: 12%;
  height: auto;

  h4 {
    font-weight: bold;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    width: 25%;
    padding-left: 10px;

    h4 {
      font-size: 12px;
      margin-bottom: 4px;
    }
  }
`;

const WrapperFrame = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubInputFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 88%;
  height: auto;
  padding: 20px;
  border-bottom: solid 1px #e0e0e0;

  @media (max-width: 768px) {
    width: 75%;
    padding: 12px;
  }
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    border-width: 2px;
    margin-right: 8px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UploadButton = styled.button`
  margin-top: 40px;
  background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#007bff")};
  color: ${(props) => (props.disabled ? "#9e9e9e" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#0056b3")};
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 8px 16px;
    font-size: 14px;
    width: 100%;
  }
`;

export const ShareUpload = () => {
  const [memberId, setMemberId] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [projectType, setProjectType] = useState([]);
  const [projectTag, setProjectTag] = useState("");
  const [image, setImage] = useState(null);
  const [githubUrl, setGithubUrl] = useState("");
  const [readmeContent, setReadmeContent] = useState("");
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);

  const navigate = useNavigate();

  const TITLE_LIMIT = 20;
  const SUBTITLE_LIMIT = 30;

  useEffect(() => {
    const storedMemberId = Cookies.get("user");
    if (storedMemberId) {
      setMemberId(storedMemberId);
    }
  }, []);

  useEffect(() => {
    const isDisabled =
      !title ||
      !subtitle ||
      !platform ||
      projectType.length === 0 ||
      !projectTag ||
      !image ||
      !githubUrl ||
      isUploading;

    setIsUploadDisabled(isDisabled);
  }, [
    title,
    subtitle,
    platform,
    projectType,
    projectTag,
    image,
    githubUrl,
    isUploading,
  ]);

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= TITLE_LIMIT) {
      setTitle(input);
    }
  };

  const handleSubtitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= SUBTITLE_LIMIT) {
      setSubtitle(input);
    }
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleProjectTypeChange = (e) => {
    const selectedOptions = e.target.value;
    if (selectedOptions.length <= 6) {
      setProjectType(selectedOptions);
    } else {
      alert("최대 6개까지만 선택할 수 있습니다.");
    }
  };

  const handleProjectTagChange = (e) => {
    setProjectTag(e.target.value);
  };

  const fetchReadme = async (url) => {
    setError(null);
    setReadmeContent("");

    try {
      const content = await fetchGitHubReadme(url);
      setReadmeContent(content);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubUrlChange = (e) => {
    const url = e.target.value;
    setGithubUrl(url);
    if (url) {
      fetchReadme(url);
    }
  };

  const handlePostUpload = async () => {
    setIsUploading(true);

    try {
      const imageUrl = await uploadImageToFirebase(image);

      const now = new Date();
      const createData = now
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/. /g, "-")
        .replace(".", ""); // "YYYY-MM-DD" 형식으로 변환

      const response = await axios.post(
        "https://port-0-pnn-web-backend-m5m6xltec2c87be9.sel4.cloudtype.app/project/create",
        {
          memberid: memberId,
          title: title,
          sub_title: subtitle,
          project_tag: projectTag,
          project_type: projectType,
          project_category: platform,
          link: githubUrl,
          image: imageUrl,
          create_data: createData,
        }
      );

      if (response.status === 200 && response.data) {
        alert("프로젝트가 성공적으로 업로드되었습니다!");
        setTitle("");
        setSubtitle("");
        setProjectTag("");
        setPlatform("");
        setProjectType([]);
        setImage(null);
        setGithubUrl("");
        setReadmeContent("");

        navigate("/share");
      } else {
        throw new Error("업로드 실패");
      }
    } catch (error) {
      setIsUploading(false);
    }
  };

  const tagOptions = ["캡스톤 디자인", "졸업 작품", "학술제", "기타 프로젝트"]
  const platformOptions = ["WEB", "APP", "AI", "GANE"];
  const frameworkOptions = [
    "Java Script",
    "Java",
    "Python",
    "C",
    "C++",
    "Spring",
    "React",
    "Vue",
    "React Native",
    "Unity",
    "Flutter",
  ];

  return (
    <Container>
      <TitleFrame>프로젝트 작성하기</TitleFrame>
      <ContentContainer>
        <SubTitleFrame>프로젝트 타이틀</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>
              <h4>프로젝트 이름</h4>
            </InputFrame>
            <SubInputFrame>
              <GlobalInput
                type="text"
                placeholder="프로젝트 이름을 입력하세요"
                value={title}
                onChange={handleTitleChange}
                isOverLimit={title.length >= TITLE_LIMIT}
              />
              <CharacterCounter isOverLimit={title.length >= TITLE_LIMIT}>
                {title.length}/{TITLE_LIMIT}자
              </CharacterCounter>
            </SubInputFrame>
          </WrapperFrame>
          <WrapperFrame>
            <InputFrame>
              <h4>상세설명</h4>
            </InputFrame>
            <SubInputFrame>
              <GlobalInput
                type="text"
                placeholder="프로젝트에 대한 상세설명을 입력하세요"
                value={subtitle}
                onChange={handleSubtitleChange}
                isOverLimit={subtitle.length >= SUBTITLE_LIMIT}
              />
              <CharacterCounter isOverLimit={subtitle.length >= SUBTITLE_LIMIT}>
                {subtitle.length}/{SUBTITLE_LIMIT}자
              </CharacterCounter>
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <SubTitleFrame>프로젝트 유형</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>유형</InputFrame>
            <SubInputFrame>
              <TagListFrame>
                <OptionDropdown
                  label="유형 선택"
                  value={projectTag}
                  options={tagOptions}
                  onChange={handleProjectTagChange}
                />
              </TagListFrame>
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <SubTitleFrame>태그 선택</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>플랫폼</InputFrame>
            <SubInputFrame>
              <TagListFrame>
                <OptionDropdown
                  label="플랫폼 선택"
                  value={platform}
                  options={platformOptions}
                  onChange={handlePlatformChange}
                />
                <OptionDropdown
                  label="프레임워크 선택"
                  value={projectType}
                  options={frameworkOptions}
                  onChange={handleProjectTypeChange}
                  multiple={true}
                />
              </TagListFrame>
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <SubTitleFrame>사진 등록</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>
              <h4>대표 사진</h4>
            </InputFrame>
            <SubInputFrame>
              <ImageUpload
                image={image}
                onImageChange={setImage}
                onImageRemove={() => setImage(null)}
              />
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <SubTitleFrame>ReadMe 업로드</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>
              <h4>GitHub 링크</h4>
            </InputFrame>
            <SubInputFrame>
              <GlobalInput
                type="text"
                placeholder="GitHub 레포지토리 URL을 입력하세요"
                value={githubUrl}
                onChange={handleGithubUrlChange}
              />
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <ReadMeFrame>
          <TableStyles>
            {error ? (
              <span style={{ color: "red" }}>{error}</span>
            ) : readmeContent ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ node, ...props }) => <StyledImage {...props} />,
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            ) : (
              "README가 여기에 표시됩니다."
            )}
          </TableStyles>
        </ReadMeFrame>

        <UploadButton onClick={handlePostUpload} disabled={isUploadDisabled}>
          <ButtonContent>
            {isUploading && <Spinner />}
            업로드 하기
          </ButtonContent>
        </UploadButton>
      </ContentContainer>
    </Container>
  );
};
