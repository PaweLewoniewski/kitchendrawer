import styled from "styled-components";
import { FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContener>
      <IconContener><FaReact size={25} color={'#39b098'} /></IconContener>
      <TextRightsBox><TextRights>All rights reserved. <span>Created by Leeo</span></TextRights></TextRightsBox>
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
justify-content:center;
flex-direction:column;
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

const TextRightsBox = styled.div`
    display:flex;
    justify-content:center;
`;

const TextRights = styled.div`
    font-size:12px;
    color:#1b9d95;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span{
      color:#315a75;
    }
`;