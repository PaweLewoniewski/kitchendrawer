import styled, { keyframes } from "styled-components";

const DecoLine = () => {
    return (
        <Contener>
            <Line></Line>
        </Contener>
    );
};
export default DecoLine;

const Contener = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const leftToRightInfinite = keyframes`
  20%, 100% {
    opacity: 0;
    transform: translate(100%, 0);
  }
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
`;

const Line = styled.div`
  height:2px;
  width: 100%;
  background: black;
  position: relative;
  &:before{
      position:absolute;
      content:'';
      height:1px;
      width:500px;
      background: radial-gradient(circle, rgba(255,0,215,1) 0%, rgba(0,0,0,1) 100%);
      animation: ${leftToRightInfinite} 20s linear infinite;
  }
`;





