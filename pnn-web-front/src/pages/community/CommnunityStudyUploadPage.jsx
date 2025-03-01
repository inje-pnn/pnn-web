import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { OptionDropdown } from "../../features/platform/OptionDropdown";
import { ImageUpload } from "../../features/platform/ImageUpload";
import { uploadImageToFirebase } from "../../shared/util/firebaseImg";
import { categoryData } from "../../shared/data/categoryData";
import useUserStore from "../../shared/store/useUserStroe";
import { communityApi } from "../../shared/api/communityApi";
import LinkIcon from "@mui/icons-material/Link";

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

const IconContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const TITLE_LIMIT = 20;
const SUBTITLE_LIMIT = 30;

export const CommunityUploadPage = ({ type }) => {
  const { postStudyBoard, postAccountboard } = communityApi();
  const user = useUserStore((state) => state.user);
  const [isUploading, setIsUploading] = useState(false);
  const [image, setImage] = useState(null);
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);
  const [boardData, setBoardData] = useState({
    title: "",
    subtitle: "",
    boardLink: "",
    platform: "",
    projectType: [],
  });

  useEffect(() => {
    const isValiedValue =
      !boardData.title ||
      !boardData.subtitle ||
      !boardData.platform ||
      boardData.projectType.length === 0 ||
      !boardData.projectTag ||
      isUploading;
    setIsUploading(!isValiedValue);

    setIsUploadDisabled(!isValiedValue);

    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    urlRegex.test(boardData.boardLink);
  }, [boardData, image]);

  const navigate = useNavigate();

  const handlePostUpload = async () => {
    setIsUploading(true);
    try {
      const imageUrl = await uploadImageToFirebase(image);
      postStudyBoard({
        ...boardData,
        userEmail: user.email,
        imageUrl: imageUrl,
      });
      if (response.status === 200 && response.data) {
        alert("프로젝트가 성공적으로 업로드되었습니다!");
        setBoardData({
          title: "",
          subtitle: "",
          platform: "",
          projectType: [],
        });

        setImage(null);

        navigate("/commnuty/study");
      } else {
        throw new Error("업로드 실패");
      }
    } catch (error) {
      alert(`업로드에 실패했습니다: ${error.message}`);
      setIsUploading(false);
    }
  };

  const handleBoardData = (data, setData, type) => {
    setData((prev) => ({ ...prev, [type]: data }));
  };

  return (
    <Container>
      <TitleFrame>게시글 작성하기</TitleFrame>
      <ContentContainer>
        <SubTitleFrame>게시글 타이틀</SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>
              <h4>게시글 제목</h4>
            </InputFrame>
            <SubInputFrame>
              <GlobalInput
                type="text"
                placeholder="프로젝트 이름을 입력하세요"
                value={boardData.title}
                onChange={(e) =>
                  handleBoardData(e.target.value, setBoardData, "title")
                }
                isOverLimit={boardData.title.length >= TITLE_LIMIT}
              />
              <CharacterCounter
                isOverLimit={boardData.title.length >= TITLE_LIMIT}
              >
                {boardData.title.length}/{TITLE_LIMIT}자
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
                value={boardData.subtitle}
                onChange={(e) =>
                  handleBoardData(e.target.value, setBoardData, "subtitle")
                }
                isOverLimit={boardData.subtitle.length >= SUBTITLE_LIMIT}
              />
              <CharacterCounter
                isOverLimit={boardData.subtitle.length >= SUBTITLE_LIMIT}
              >
                {boardData.subtitle.length}/{SUBTITLE_LIMIT}자
              </CharacterCounter>
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>
        <SubTitleFrame>
          링크 입력
          <IconContainer>
            <LinkIcon />
          </IconContainer>
        </SubTitleFrame>
        <InputContainer>
          <WrapperFrame>
            <InputFrame>링크</InputFrame>
            <SubInputFrame>
              <TagListFrame>
                <GlobalInput
                  type="text"
                  placeholder="주소를 입력하세요"
                  value={boardData.boardLink}
                  onChange={(e) =>
                    handleBoardData(e.target.value, setBoardData, "boardLink")
                  }
                  isOverLimit={boardData.boardLink.length >= TITLE_LIMIT}
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
                  value={boardData.platform}
                  options={categoryData.product}
                  onChange={(e) =>
                    handleBoardData(e.target.value, setBoardData, "platform")
                  }
                />
                <OptionDropdown
                  label="프레임워크 선택"
                  value={boardData.projectType}
                  options={categoryData.framwork}
                  onChange={(e) =>
                    handleBoardData(e.target.value, setBoardData, "projectType")
                  }
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
                image={boardData.image}
                onImageChange={setImage}
                onImageRemove={() => setImage(null)}
              />
            </SubInputFrame>
          </WrapperFrame>
        </InputContainer>

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
