import styled from "styled-components";

interface TitlesPageProps {
  text?: string;
}

const PageTitles = ({ text }: TitlesPageProps) => {
  return (
    <TitlesContener>
      <TitlesName>{text}</TitlesName>
      <TitlesLine></TitlesLine>
    </TitlesContener>
  );
};
export default PageTitles;

const TitlesContener = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px 20px 5px;
`;

const TitlesName = styled.h2`
  font-size: 18px;
  width: 100%;
  margin:0;
  padding:10px;
  font-weight: 500;
`;

const TitlesLine = styled.div`
  height:1px;
  width: 100%;
  background: black;
`;
