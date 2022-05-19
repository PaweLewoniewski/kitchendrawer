import styled from "styled-components";
import skirt from '../../Images/skirt.png';
import hesuit from '../../Images/hesuit.png';
import ActionBtn from "../ActionBtn/ActionBtn";

interface SimpleCardProps {
  cardTitle: string;
}


const SimpleCard = ({ cardTitle }: SimpleCardProps) => {
  return (
    <Contener>
      <ImageContener>
        {cardTitle === 'She Long Shop Item name card component' ? <CardImage src={skirt} alt='card' /> : <CardImage src={hesuit} alt='card' />}
      </ImageContener>
      <CardTextBox>
        <TextContener>
          <TextTitle>{cardTitle}</TextTitle>
          <SubTextTitle>Sub info item</SubTextTitle>
        </TextContener>
        <TextContener>
          <Price>$ 74.5</Price>
          <SmallCardInfo>Price drop 12%</SmallCardInfo>
        </TextContener>
        <TextContener>
          <ActionBtn btnName={'Show'}></ActionBtn>
        </TextContener>
      </CardTextBox>
    </Contener>
  );
};
export default SimpleCard;

const Contener = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  align-items: center;
    width:224px;
    height:430px;
    background-color: rgb(0 0 0 / 25%);
    margin:5px;
    position:relative;
    //border:1px solid transparent;
`;

const TextContener = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
    justify-content: flex-start;
    padding:10px 15px;
    background-color:#b800e6;
`;

const CardTextBox = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  z-index:2;
  position: absolute;
  bottom:0;
`;

const ImageContener = styled.div`
  display: flex;
  max-width:224px;
  justify-content: center;
  z-index:1;
`;

const CardImage = styled.img`
  display: flex;
width:100%;
z-index:1;
`;

const TextTitle = styled.h4`
color: white;
font-size:14px;
display: flex;
width:200px;
margin:0;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
line-clamp: 2;
box-orient: vertical;
`;

const SubTextTitle = styled.h4`
  display: flex;
  font-size:14px;
width:100%;
margin:0;
color:#00CF9F;
`;

const Price = styled.h3`
color:white;
  display: flex;
  font-size:18px;
width:100%;
margin:0;
`;

const SmallCardInfo = styled.h5`
  display: flex;
  font-size:12px;
width:100%;
margin:0;
color:greenyellow;
`;







