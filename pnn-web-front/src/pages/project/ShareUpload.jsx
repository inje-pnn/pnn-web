import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  background-color: lightsalmon;
  margin-top: 50px;
`;

const TitleFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  width: 100%;
  height: 100px;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 80%;
  margin-top: 30px;
  gap: 20px;
`;

const WriteFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;
  height: 100%;
  background-color: lightblue;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const InputFrame = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: bold;
    margin-bottom: 8px;
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

const ReadMeFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  background-color: lightgreen;
  border-radius: 8px;
`;

export const ShareUpload = () => {
  return (
    <Container>
      <TitleFrame>프로젝트 작성하기</TitleFrame>
      <Frame>
        <WriteFrame>
          <InputFrame>
            <h4>타이틀 입력</h4>
            <GlobalInput
              type="text"
              id="title"
              placeholder="타이틀을 입력하세요"
            />
          </InputFrame>

          <InputFrame>
            <h4>서브 타이틀 입력</h4>
            <GlobalInput
              type="text"
              id="subtitle"
              placeholder="서브 타이틀을 입력하세요"
            />
          </InputFrame>

          <TagListFrame>
            <DropdownContainer>
              <h4>플랫폼 선택</h4>
              <select defaultValue="">
                <option value="" disabled>
                  선택
                </option>
                <option value="WEB">Web</option>
                <option value="APP">Mobile</option>
                <option value="AI(인공지능)">Desktop</option>
                <option value="GAME">Desktop</option>
              </select>
            </DropdownContainer>
            <DropdownContainer>
              <h4>기술 스택 선택</h4>
              <select defaultValue="">
                <option value="" disabled>
                  선택
                </option>
                <option value="react">React</option>
                <option value="node">Fast API</option>
                <option value="python">Spring Boot</option>
              </select>
            </DropdownContainer>
          </TagListFrame>

          <InputFrame>
            <h4>GitHub 링크</h4>
            <GlobalInput
              type="text"
              id="github"
              placeholder="GitHub 링크를 입력하세요"
            />
          </InputFrame>

          <InputFrame>
            <h4>이미지 파일 추가</h4>
            <FileInput type="file" id="image" />
          </InputFrame>
        </WriteFrame>

        <ReadMeFrame>ReadMe 파일이 띄워질 프레임</ReadMeFrame>
      </Frame>
    </Container>
  );
};