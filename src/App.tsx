import React from 'react';
// import GlobalFonts from './fonts/fonts';
import './App.css';
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <MaxPage>
      <ContentPage>
        <Router>
          {/* <GlobalFonts /> */}
          <Header>
            <Title>Kitchen Drawer</Title>
          </Header>
          <Content>
            <Pages>
              <Routes>
                {/* <Route path="/" element={<FrontPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} /> */}
              </Routes>
            </Pages>
          </Content>
        </Router>
      </ContentPage>
    </MaxPage>
  );
}

export default App;


const MaxPage = styled.div`
  display: flex;
  flex-direction:column ;
  width: 100%;
  background-color:#efe4ff;
  overflow-x:hidden;
  position:relative; 
   /* @media (max-width: 1080px) {
    height: calc(100vh + 35px);
  }  */
`;


const Header = styled.div`
  display:flex;
  justify-content:space-between;
  /* background: linear-gradient(40deg, rgba(130,130,130,0.1) 0%, rgba(239,228,255,1) 100%); */
`;

const Title = styled.h1`
  display:flex;
  font-size:3em;
  font-weight:300;
  /* font-family: 'Press Start 2P'; */
`;

const Content = styled.div`
  display:flex;
  height:100%;
`;


const ContentPage = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column ;
`;


const Pages = styled.div`
 display:flex;
 align-self:center;
`;