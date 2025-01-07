import styled from "styled-components";
import pnnlogo from "./../../assets/images/pnnlogo.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 16px;
  background-color: lightsalmon;
`;

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1112px;
  gap: 50px 28px;
`;

const HeaderFrame = styled.div`
  width: 100%;
  height: auto;
  color: white;
`;

const CardFrame = styled.div`
  width: 352px;
  height: 345px;
  border: solid 1px rgb(46, 46, 53);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 14px 14px 11px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

const ImageFrame = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border: solid 1px;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 5px 0px;
`;

const PlatformContainer = styled.div`
  color: rgb(102, 102, 109);
  font-size: 12px;
`;

const SubTitleFrame = styled.div`
  font-size: 12px;
  height: 44px;
`;

const projects = [
  {
    id: 1,
    title: "VirtuaLeaf",
    platform: "WEB",
    description: "3D로 식물을 키워볼까요??",
    imageUrl: "image_url_1",
  },
  {
    id: 2,
    title: "Unknown Entity",
    platform: "APP",
    description: "무서운 3D 공포게임을 해보세요..",
    imageUrl: "image_url_2",
  },
  {
    id: 3,
    title: "Reaction",
    platform: "WEB",
    description: "노래를 맞춰보세요!",
    imageUrl: "image_url_3",
  },
  {
    id: 4,
    title: "Lime",
    platform: "WEB",
    description: "아프리카, 치지직 저리가라 !! 최고의 스트리밍 사이트",
    imageUrl: "image_url_3",
  },
];

export const SharePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Frame>
        <HeaderFrame>
          <h1>P&N에서 진행된 프로젝트 둘러보기</h1>
        </HeaderFrame>
        {projects.map((project) => (
          <CardFrame key={project.id} onClick={() => navigate("/share/detail")}>
            <ImageFrame src={pnnlogo} alt={project.title} />
            <TitleFrame>
              <span>{project.title}</span>
              <PlatformContainer>
                <span>{project.platform}</span>
              </PlatformContainer>
            </TitleFrame>
            <SubTitleFrame>
              <span>{project.description}</span>
            </SubTitleFrame>
          </CardFrame>
        ))}
      </Frame>
    </Container>
  );
};
