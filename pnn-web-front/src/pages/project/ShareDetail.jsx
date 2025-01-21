import styled from "styled-components";
import testimage from "./../../assets/images/test.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const TitleFrame = styled.div`
  width: 50%;
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
  width: 100%;
  height: 647px;
  border: solid 1px;
`

const UploadMainFrame = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 240px;
`

const ProjectSummaryFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-right: 30px;
  border-radius: 10px;
  padding: 40px;
  border: solid 1px;
`

const SummaryText = styled.div`
  width: 100%;
  font-size: 24px;
  margin-bottom: 20px;
`

const SummaryFrame = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`

const SummaryLeftFrame = styled.div`
  margin-right: 32px;
  h3 {
    margin-bottom: 48px;
  }
`

const SummaryRighttFrame = styled.div`
  margin-right: 32px;
  h1 {
    margin-bottom: 48px;
  }
`

const ProjectExplainFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 890px;
  border: solid 2px rgb(62,62,62);
  border-radius: 10px;
  padding: 40px;
`

export const ShareDetail = () => {
  return (
    <Container>
      <Frame>

      <ImageFrame>
        <ProjectImage src={testimage}/>
        </ImageFrame>

      <TitleFrame>
        <h1>프로젝트 이름</h1>
        <SubTitleFrame>프로젝트 소제목</SubTitleFrame>
      </TitleFrame>
     

        <UploadMainFrame>
        <ProjectSummaryFrame>
          <SummaryText>프로젝트 요약</SummaryText>
          <SummaryFrame>
            <SummaryLeftFrame>
              <h3>프로젝트 기간</h3>
              <h3>프로젝트 형태</h3>
            </SummaryLeftFrame>
            <SummaryRighttFrame>
            </SummaryRighttFrame>
          </SummaryFrame>
        </ProjectSummaryFrame>
        <ProjectExplainFrame>
            <h2>프로젝트 설명</h2>
        </ProjectExplainFrame>
        </UploadMainFrame>
      </Frame>
    </Container>
  );
};