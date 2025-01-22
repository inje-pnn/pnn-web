import styled from "styled-components";
import pnn2 from "../../../assets/images/pnn2.jpeg";
import pnn3 from "../../../assets/images/pnn3.jpeg";
import pnn4 from "../../../assets/images/pnn4.jpeg";
import pnn5 from "../../../assets/images/pnn5.jpeg";
import pnn6 from "../../../assets/images/pnn6.jpeg";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  flex-wrap: wrap;
  gap: 80px;
  padding: 100px;
`;

const ContentFrame = styled.div`
  width: 500px;
  height: 350px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;

  ${ContentFrame}:hover & {
    transform: rotate(5deg) rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 80%;
    height: 80%;
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
  font-size: 24px;
  padding: 20px;
  color: #333;
`;

const History = () => {
  return (
    <Container>
      <ContentFrame>
        <Card>
          <CardFront>
            <img src={pnn2} />
          </CardFront>
          <CardBack>
            23년도 P&N MT
          </CardBack>
        </Card>
      </ContentFrame>
      <ContentFrame>
        <Card>
          <CardFront>
            <img src={pnn3} />
          </CardFront>
          <CardBack>
            23년 2학기 23학술제 준비!!
          </CardBack>
        </Card>
      </ContentFrame>

      <ContentFrame>
        <Card>
          <CardFront>
            <img src={pnn4} />
          </CardFront>
          <CardBack>
            24년 레전드 자체제작 모니터 테스트 현장
          </CardBack>
        </Card>
      </ContentFrame>
      <ContentFrame>
        <Card>
          <CardFront>
            <img src={pnn5} />
          </CardFront>
          <CardBack>
            제1회 pnn 바퀴벌레 탐구
          </CardBack>
        </Card>
      </ContentFrame>
      <ContentFrame>
        <Card>
          <CardFront>
            <img src={pnn6} />
          </CardFront>
          <CardBack>
            25년 1학기 대면식 현장
          </CardBack>
        </Card>
      </ContentFrame>
      <ContentFrame>
        <Card>
          <CardFront>
            <img src="test" />
          </CardFront>
          <CardBack>
            "사진 준비중입니다"
          </CardBack>
        </Card>
      </ContentFrame>
    </Container>
  );
};

export default History;