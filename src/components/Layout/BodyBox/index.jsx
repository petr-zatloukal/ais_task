import styled from "styled-components";

const BodyBox = ({ children, style }) => {
  return (
    <BodyWrapper style={style}>
      <Body>{children}</Body>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42);
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #dddddd;
`;

const Body = styled.div`
  padding: 20px;
`;

export default BodyBox;
