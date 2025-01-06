import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 1000px;
  padding: 16px;
`;

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1112px;
  gap: 50px 28px;
`;

const CardFrame = styled.div`
  width: 352px;
  height: 345px;
  border: solid 1px #333;
  border-radius: 20px;
  background-color: #2c2c2c; 
  display: flex;
  flex-direction: column;
  padding: 14px 14px 11px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

const ImageFrame = styled.img` /* 'image' -> 'img'로 수정 */
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
  border: solid 1px;
`;

const PlatformContainer = styled.div`
  color: rgb(102, 102, 109);
  font-size: 12px;
`;

const MiniTitleFrame = styled.div`
  font-size: 12px;
  border: solid 1px;
  height: 44px;
`;

const projects = [
  {
    id: 1,
    title: "VirtuaLeaf",
    platform: "WEB",
    description: "3D로 식물을 키워볼까요??",
    imageUrl: "image_url_1"
  },
  {
    id: 2,
    title: "Unknown Entity",
    platform: "APP",
    description: "무서운 3D 공포게임을 해보세요..",
    imageUrl: "image_url_2"
  },
  {
    id: 3,
    title: "Reaction",
    platform: "WEB",
    description: "노래를 맞춰보세요!",
    imageUrl: "image_url_3"
  },
  {
    id: 4,
    title: "Lime",
    platform: "WEB",
    description: "아프리카, 치지직 저리가라 !! 최고의 스트리밍 사이트",
    imageUrl: "image_url_3"
  }
];

export const SharePage = () => {
  return (
    <Container>
      <Frame>
        {projects.map(project => (
          <CardFrame key={project.id}>
            <ImageFrame src={project.imageUrl} alt={project.title} />
            <TitleFrame>
              <span>{project.title}</span>
              <PlatformContainer>
                <span>{project.platform}</span>
              </PlatformContainer>
            </TitleFrame>
            <MiniTitleFrame>
              <span>{project.description}</span>
            </MiniTitleFrame>
          </CardFrame>
        ))}
      </Frame>
    </Container>
  );
};