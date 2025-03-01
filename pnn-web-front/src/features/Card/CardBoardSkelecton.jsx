import { Chip, Skeleton } from "@mui/material";
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
export const CardBoardSkeleton = () => {
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
