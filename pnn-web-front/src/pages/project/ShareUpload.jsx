import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Dropdown } from "../../features/platform/OptionDropdown";
import { ImageUpload } from "../../features/platform/ImageUpload";
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0;
`;

const TitleFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  width: 100%;
  margin: 60px 0px 100px 0px;
`;

const SubTitleFrame = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
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
`;

const CharacterCounter = styled.span`
  padding: 5px 0 0 5px;
  font-size: 12px;
  color: ${(props) => (props.isOverLimit ? "#ff0000" : "#666")};
`;

const TagListFrame = styled.div`
  display: flex;
  gap: 20px;
`;

const ReadMeFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;
  overflow: auto;
  line-height: 2.5;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-top: solid 2px;
  margin-bottom: 30px;
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
`;

const WrapperFrame = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubInputFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 88%;
  height: auto;
  padding: 20px;
  border-bottom: solid 1px #e0e0e0;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

const FetchButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const ShareUpload = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [techStack, setTechStack] = useState("");
  const [image, setImage] = useState(null);
  const [githubUrl, setGithubUrl] = useState("");
  const [readmeContent, setReadmeContent] = useState("");
  const [error, setError] = useState(null);

  const TITLE_LIMIT = 20;
  const SUBTITLE_LIMIT = 30;

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

  const handleTechStackChange = (e) => {
    setTechStack(e.target.value);
  };

  const fetchReadme = async () => {
    setError(null);
    setReadmeContent("");

    try {
      const match = githubUrl.match(/github\.com\/([\w-]+)\/([\w-]+)/);
      if (!match) {
        throw new Error("유효한 GitHub URL을 입력하세요.");
      }

      const [_, owner, repo] = match;
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/contents/README.md`
      );

      const decodedContent = decodeURIComponent(
        escape(atob(response.data.content))
      );
      setReadmeContent(decodedContent);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const platformOptions = ["Web", "Mobile", "AI", "Game"];
  const techStackOptions = ["React", "Fast API", "Spring Boot"];

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

        <SubTitleFrame>태그 선택</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>플랫폼</InputFrame>
            <SubInputFrame>
              <TagListFrame>
                <Dropdown
                  label="플랫폼 선택"
                  options={platformOptions}
                  onChange={handlePlatformChange}
                />
                <Dropdown
                  label="기술 스택 선택"
                  options={techStackOptions}
                  onChange={handleTechStackChange}
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

        <SubTitleFrame>프로젝트</SubTitleFrame>
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
                onChange={(e) => setGithubUrl(e.target.value)}
              />
              <FetchButton onClick={fetchReadme} disabled={!githubUrl}>
                README 가져오기
              </FetchButton>
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <ReadMeFrame>
          {error ? (
            <span style={{ color: "red" }}>{error}</span>
          ) : readmeContent ? (
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => <StyledImage {...props} />
              }}
            >
              {readmeContent}
            </ReactMarkdown>
          ) : (
            "README가 여기에 표시됩니다."
          )}
        </ReadMeFrame>
      </ContentContainer>
    </Container>
  );
};