import { Chip, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  width: 70%;
  height: 180px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 140px;
  }
`;
const CardContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 20px;

  overflow: hidden;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  border: 0.4px solid #ddd;
  border-radius: 20px;
  position: relative;
  &:hover {
    transform: scale(1.1); /* 이미지 확대 */
  }
`;
const CardContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const CustomChip = muiStyled(Chip)(({ theme, color }) => ({
  display: "relative",
  width: "auto",
  height: 20,
  backgroundColor: `${color}`,
  marginRight: "5px",
  fontSize: "12px",
  [theme.breakpoints.down("sm")]: {
    height: 18,
    fontSize: "10px",
  },
}));
const TitleText = styled.div`
  font-size: 16px;
`;
const CardDescription = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  font-size: 15px;
  color: #444;
  text-align: start;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const CardInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 11px;
  color: #666;
  padding-right: 10px;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  width: 100%;
  height: 25px;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const CardBoardItem = ({ item }) => {
  const onClickCard = () => {
    window.location.href = item.content_link;
  };
  const formatDate = (isoString) => {
    const cleanString = isoString?.split(".")[0]; // 마이크로초 제거
    const date = new Date(cleanString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}.${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <Container className="card-item" onClick={onClickCard}>
      <CardContainer>
        <CardImage src={item.imgae} />
      </CardContainer>
      <CardContent>
        <TitleText>{item.title}</TitleText>
        <CardDescription>{item.description}</CardDescription>
        <ChipContainer>
          {item.project_type.map((v) => {
            return <CustomChip label={v} />;
          })}
        </ChipContainer>
        <CardInfoContainer>
          <span>
            {item.category}WEB {formatDate(item.created_at)}
          </span>
          <span>Editor · {item.username}</span>
        </CardInfoContainer>
      </CardContent>
    </Container>
  );
};
