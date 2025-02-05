import styled from "styled-components";
import axios from "axios";
import testimage from "./../../assets/images/test.png";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import BuildIcon from "@mui/icons-material/Build";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3f4f6;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 580px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TitleFrame = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: #555;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Card = styled.div`
  flex: 1 1 calc(33% - 20px);
  min-width: 280px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }

  .icon {
    font-size: 48px;
    color: #0077b6;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ExplanationFrame = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 40px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: #555;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ShareDetail = () => {
  return (
    <Container>
      <ImageFrame src={testimage} alt="project image" />

      <TitleFrame>
        <h1>Unknown Entity</h1>
        <h2>유니티로 즐기는 3D 공포게임</h2>
      </TitleFrame>

      <InfoSection>
        <Card>
          <PeopleIcon className="icon" />
          <h3>프로젝트 멤버</h3>
          <p>박준수, 이승훈, 현지훈</p>
        </Card>

        <Card>
          <CategoryIcon className="icon" />
          <h3>프로젝트 형태</h3>
          <p>게임</p>
        </Card>

        <Card>
          <BuildIcon className="icon" />
          <h3>프로젝트 유형</h3>
          <p>캡스톤 디자인</p>
        </Card>
      </InfoSection>

      <ExplanationFrame>
        <h2>프로젝트 설명</h2>
        <p>
          이 프레임은 ReadMe 내용이 표시될 영역입니다. 프로젝트에 대한 상세한
          정보와 실행 방법을 여기에 작성할 수 있습니다.
        </p>
      </ExplanationFrame>
    </Container>
  );
};
