import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 15%;
  margin-left: 15px;
  align-content: center;
`;
export const CardHeader = ({ title }) => {
  return <Header>{title}</Header>;
};
