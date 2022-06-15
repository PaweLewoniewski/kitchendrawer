import styled from "styled-components";
import useSound from 'use-sound';
import BtnSound from '../sounds/slight_click.wav';

interface SingleBtnProps {
    btnName?: string;
    children?: any;
    onClick:() => void;
    danger?:string;
    className?:string;
}

const SingleBtn = ({ btnName, children, onClick, danger, className }: SingleBtnProps) => {

  const [play] = useSound(BtnSound);

  const handleClick = () => {
    onClick();
    play();
  }

    return (
        <Contener>
            <Btn danger={danger} onClick={handleClick} className={className}>{btnName ? btnName : children}</Btn>
        </Contener>
    );
};
export default SingleBtn;

const Contener = styled.div`
  display: flex;
`;

const Btn = styled.button<SingleBtnProps>`
  border:none;
  border-radius:3px;
  border-bottom:1px dotted #06151f;
  border-top:1px dotted #06151f;
  color:#06151f;
  background:none;
  cursor: pointer;
  padding:10px 15px 10px 15px;
  transition:0.3s ease-in-out;
  font-family: 'Josefin Sans', sans-serif;
  background:${props => props.danger === 'danger' ? `#e30000` : '#3abfa5'};
  margin:5px 2px;
  &:hover{
    border-bottom:1px solid #06151f;
    transition:0.3s ease-in-out;
    background:#ffcc00;
  }
`;







