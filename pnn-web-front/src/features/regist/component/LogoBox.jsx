import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const LogoContainer = styled.div`
  position: relative;

  display: flex;
  flex: 0.6;
`;
const ComentContainer = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  justify-content: center;
`;
const LogoImg = styled.img`
  position: absolute;
  z-index: 9999;
  left: 208px;
  top: 242px;
  border-radius: 15px;
  width: 400px;
  height: 300px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border: 0.2px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  /* 3D 효과 */
  box-shadow: -35px 20px 30px rgba(0, 0, 0, 0.2),
    50px -30px 40px rgba(255, 255, 255, 0.8);
  transform: rotateX(25deg) rotateY(-25deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;
const BackBox = styled.div`
  position: absolute;
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
  z-index: ${(props) => {
    props.index;
  }};

  border-radius: 15px;
  width: 400px;
  height: 300px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;

  /* 3D 효과 */
  transform: rotateX(25deg) rotateY(-25deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const LogoBox = () => {
  return (
    <>
      <Container>
        <LogoContainer>
          <LogoImg src="/favicon_logo.png" />
          {[...Array(20)].map((v, i) => (
            <BackBox left={188 + i} index={i} top={222 + i} />
          ))}
        </LogoContainer>
        <ComentContainer>
          <p>P&N은 인제대학교 컴퓨터공학부의 학술 동아리입니다.</p>
          <p>가입하고 다양한 활동을 해보세요.</p>
        </ComentContainer>
        {/* <LogoImg src="/favicon_logo.png"></LogoImg>
        <BackBox /> */}
      </Container>
    </>
  );
};
