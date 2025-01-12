import styled from "styled-components";
import Lottie from "react-lottie";
import lottieData from "../../assets/lottie/authLottie.json";
import { agent } from "../../shared/util/agent";
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

const LogoImg = styled.img`
  position: absolute;
  z-index: 9999;

  border-radius: 15px;
  width: 200px;
  height: 150px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border: 0.2px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  left: 30%;
  top: 60px;
  /* 3D 효과 */
  box-shadow: -35px 20px 30px rgba(0, 0, 0, 0.2),
    50px -30px 40px rgba(255, 255, 255, 0.8);
  transform: rotateX(25deg) rotateY(-25deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  @media (min-width: 768px) {
    flex-direction: row;
    left: 208px;
    top: 142px;
    width: 400px;
    height: 300px;
  }
`;
const BackBox = styled.div`
  border-radius: 15px;
  width: 200px;
  height: 150px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  position: absolute;
  /* 3D 효과 */
  transform: rotateX(25deg) rotateY(-25deg);
  left: calc(30% + 20px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: ${(props) => {
    props.index;
  }};

  left: ${({ left }) => `calc(21% + ${left}px)`};
  top: ${(props) => `${40 + props.top}px`};
  @media (min-width: 768px) {
    left: ${(props) => `${188 + props.left}px`};
    top: ${(props) => `${122 + props.top}px`};
    width: 400px;
    height: 300px;
  }
`;

const LottieContainer = styled.div`
  position: absolute;
  z-index: 9999;
  left: 35%;
  top: 13%;
  transform: rotateX(25deg) rotateY(25deg);
  @media (min-width: 768px) {
    left: 538px;
    top: 292px;
  }
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
  const { checkUserAgent } = agent();
  const lottie = {
    width: checkUserAgent() ? 200 : 400,
    height: checkUserAgent() ? 200 : 400,
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImg src="/favicon_logo.png" />
        {[...Array(20)].map((v, i) => (
          <BackBox left={i} index={i} top={i} />
        ))}
      </LogoContainer>
      <LottieContainer>
        <Lottie
          options={defaultOptions}
          height={lottie.height}
          width={lottie.width}
        />
      </LottieContainer>
    </Container>
  );
};
