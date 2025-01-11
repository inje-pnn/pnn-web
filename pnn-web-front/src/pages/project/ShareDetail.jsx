import styled from "styled-components";
import pnnlogo from "./../../assets/images/pnnlogo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 1200px;
  padding: 16px;
  background-color: lightsalmon;
`

const Frame = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TitleFrame = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #667eea;
  border-radius: 12px;
  color: white;
`

const SubTitleFrame = styled.div`
  font-size: 20px;
  height: 44px;
  color: black;
  padding-top: 5px;
`

const ImageFrame = styled.div`
  width: 100%;
  height: 440px;
  margin: 20px 20px;
  display: flex;
  justify-content: center;
`

const ProjectImage = styled.img`
  width: 786px;
  height: 100%;
  border: solid 1px;
`

export const ShareDetail = () => {
  return (
    <Container>
      <Frame>
      <TitleFrame>
        <h1>프로젝트 이름</h1>
        <SubTitleFrame>프로젝트 소제목</SubTitleFrame>
      </TitleFrame>
      <ImageFrame>
        <ProjectImage src={pnnlogo}/>
        </ImageFrame>
      </Frame>
    </Container>
  );
};