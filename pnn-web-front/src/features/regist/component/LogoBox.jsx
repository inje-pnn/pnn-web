import styled from "styled-components";
import Lottie from "react-lottie";
import lottieData from "../../../assets/lottie/authLottie.json";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: row;
`;
const LogoContainer = styled.div`
  position: relative;

  display: flex;
  flex: 0.5;
`;
const ComentContainer = styled.div`
  position: relative;

  top: -102px;
  display: flex;
  flex: 0.5;

  flex-direction: column;
  justify-content: center;
`;
const LogoImg = styled.img`
  position: absolute;
  z-index: 9999;
  left: 208px;
  top: 142px;
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

const LottieContainer = styled.div`
  position: absolute;
  z-index: 9999;
  left: 538px;
  top: 292px;
  transform: rotateX(25deg) rotateY(25deg);
`;
export const LogoBox = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImg src="/favicon_logo.png" />
        {[...Array(20)].map((v, i) => (
          <BackBox left={188 + i} index={i} top={122 + i} />
        ))}
      </LogoContainer>
      <LottieContainer>
        <Lottie options={defaultOptions} height={400} width={400} />
      </LottieContainer>
    </Container>
  );
};
