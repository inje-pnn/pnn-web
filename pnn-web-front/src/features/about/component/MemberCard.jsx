import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;
  h3 {
    text-align: center;
  }
`;

const IconBox = styled.div`
  width: 100%;
  height: 100px;
`;

const ImgFrame = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid gray;
  border-radius: 50%;
`;

const MemberCard = ({ name, explain }) => {
  return (
    <Container>
      <ImgFrame>
        <img src="" />
      </ImgFrame>
      <h2>{name}</h2>
      <h3>{explain}</h3>
      <IconBox>

      </IconBox>
    </Container>
  );
};
export default MemberCard;