import styled from "styled-components";
import { FaReact } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContener>
            <IconContener><FaReact size={25} color={'#39b098'}/></IconContener>
        </FooterContener>
    );
};

export default Footer;

const FooterContener = styled.div`
display:flex;
padding:15px 35px;
background:#06151f;
//background: linear-gradient(90deg, rgba(59,194,167,1) 0%, rgba(42,42,42,1) 100%);
position:relative;
&:before{
    content:'';
    height:1px;
    width:100%;
    box-shadow: 0px 0px 1px #00fcff;
    background:black;
    position:absolute;
    top:1px;
    left:0;
    right:0;
  }
&:after{
    content:'';
    height:1px;
    width:100%;
    box-shadow: 0px 0px 1px #00fcff;
    background:black;
    position:absolute;
    bottom:1px;
    left:0;
    right:0;
  }
`;

const IconContener = styled.div`
  display: flex;
  width:100%;
  justify-content:flex-end;
`;