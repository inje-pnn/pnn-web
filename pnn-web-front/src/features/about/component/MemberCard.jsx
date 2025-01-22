import styled from "styled-components";
import { MdDesignServices } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Container = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;
  padding: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ImgFrame = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  border: 5px solid #667EEA;
  border-radius: 50%;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Name = styled.h3`ß
  font-size: 1.8rem;
  font-weight: 600;
  margin: 20px 0 10px 0;
  color: #2D3748;
`;

const Description = styled.span`
  font-size: 1rem;
  line-height: 1.6;
  color: #4A5568;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
`;

const IconBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #667EEA;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
`;

const MemberCard = ({ name, explain, img, social }) => {
  return (
    <Container>
      <ImgFrame>
        <img src={img} alt={name} />
      </ImgFrame>
      <Name>{name}</Name>
      <Description>{explain}</Description>
      <IconBox>
        <SocialIcon>
          <MdDesignServices />
        </SocialIcon>
        <SocialIcon href="https://github.com/seunghun-5945" target="github" style={{backgroundColor:"black"}}>
          <FaGithub />
        </SocialIcon>
      </IconBox>
    </Container>
  );
};

export default MemberCard;