import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 15%;
  margin-left: 15px;
  align-content: center;
  border-bottom: 1px solid #d1d1d1;
`;
export const CardHeader = ({ title }) => {
  return <Header>{title}</Header>;
};
