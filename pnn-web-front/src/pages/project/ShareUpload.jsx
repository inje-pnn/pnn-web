import React, { useState } from "react";
import styled from "styled-components";

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

const FileInput = styled.input`
  margin-top: 8px;
`;

const TagListFrame = styled.div`
  display: flex;
  gap: 20px;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h4 {
    font-weight: bold;
    margin-bottom: 8px;
  }

  select {
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
  }
`;

const ImagePreviewFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    color: #656573;
    border: solid 2px #ededed;
    background-color: #fcfcfc;
`

const ReadMeFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-top: 20px;
`;

// 여기부터 임시 프레임
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

export const ShareUpload = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

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
                id="title"
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
                id="subtitle"
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
                <DropdownContainer>
                  <h4>플랫폼 선택</h4>
                  <select defaultValue="">
                    <option value="" disabled>
                      선택
                    </option>
                    <option value="WEB">Web</option>
                    <option value="APP">Mobile</option>
                    <option value="AI(인공지능)">AI</option>
                    <option value="GAME">Game</option>
                  </select>
                </DropdownContainer>

                <DropdownContainer>
                  <h4>기술 스택 선택</h4>
                  <select defaultValue="">
                    <option value="" disabled>
                      선택
                    </option>
                    <option value="react">React</option>
                    <option value="python">Fast API</option>
                    <option value="java">Spring Boot</option>
                  </select>
                </DropdownContainer>
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
              <FileInput type="file" id="image" />
              <ImagePreviewFrame>
              사진 미리보기
            </ImagePreviewFrame>
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
                id="github"
                placeholder="GitHub 링크를 입력하세요"
              />
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

        <ReadMeFrame>ReadMe 파일이 띄워질 프레임</ReadMeFrame>
      </ContentContainer>
    </Container>
  );
};