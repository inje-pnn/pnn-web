import styled from "styled-components";
import { CoreValues } from "../about/component/CoreValues";
import { FQABox } from "../../shared/components/fqa/FQABox";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  position: relative;
  padding: 40px 20px;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 20px 15px;
    height: auto;
  }
`;

const CoreValuesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const SectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const FQAContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f4f6fc;
`;

const FQAFrame = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

const Section4 = () => {
  return (
    <Container>
      <SectionContent>
        <CoreValuesContent>
          <CoreValues />
        </CoreValuesContent>

        <FQAContent>
          <FQAFrame>
            <FQABox />
          </FQAFrame>
        </FQAContent>
      </SectionContent>
    </Container>
  );
};

export default Section4;