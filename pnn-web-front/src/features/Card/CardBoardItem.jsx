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
const CustomChip = muiStyled(Chip)(({ color }) => ({
  display: "relative",
  width: "auto",
  height: 20,
  backgroundColor: `${color}`,
  marginRight: "5px",
  fontSize: "12px",
}));
const Text = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #666;
`;
const CardDescription = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  font-size: 15px;
  color: #444;
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
  overflow-x: auto;
  width: 100%;
  height: 25px;
`;
export const CardBoardItem = ({ isLoading, item }) => {
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
  const SkeletonBoard = () => {
    return (
      <Container className="card-item">
        <CardContainer>
          <Skeleton
            animation="wave"
            height={220}
            width="90%"
            style={{ marginTop: -40 }}
          />
        </CardContainer>
        <CardContent>
          <Skeleton animation="wave" height={30} width="80%" />
          <Skeleton animation="wave" height={200} width="80%" />
          <ChipContainer>
            <Skeleton animation="wave" height={20} width="80%" />
          </ChipContainer>

          <CardInfoContainer>
            <Skeleton animation="wave" height={10} width="30%" />
            <Skeleton
              animation="wave"
              height={10}
              width="30%"
              style={{ marginRight: 85 }}
            />
          </CardInfoContainer>
        </CardContent>
      </Container>
    );
  };
  return (
    <>
      {isLoading ? (
        <SkeletonBoard />
      ) : (
        <Container className="card-item" onClick={onClickCard}>
          <CardContainer>
            <CardImage src={item.imgae} />
          </CardContainer>
          <CardContent>
            <h3>{item.title}</h3>
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
      )}
    </>
  );
};
