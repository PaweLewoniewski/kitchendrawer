import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContener></FooterContener>
    );
};

export default Footer;

const FooterContener = styled.div`
display:flex;
padding:10px 20px;
width:100%;
height:30px;
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