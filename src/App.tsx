import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import styled from "styled-components";
import HomePage from './views/homepage';
import Policy from './views/policy';
import MainNavigation from './components/mainNavigation';
import BottomBoxes from './playground/bottomBoxes';
import TopBoxes from './playground/topBoxes';


function App() {
  return (
    <MaxPage>
      <ContentPage>
        <Router>
          <Header>
            <Title>------  Kitchen Drawer  ------------------------------------------------------------</Title>
            <MainNavigation />
          </Header>
          <Content>
            <Pages>
              <Routes>
                <Route path="/playground" element={<HomePage />} >
                  <Route path=":bottomId" element={<BottomBoxes />} />
                  <Route path=":topId" element={<TopBoxes />} />
                </Route>
                <Route path="/policy" element={<Policy />} />
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
  background: #e8f4ff;
  /* background: linear-gradient(40deg, rgba(130,130,130,0.1) 0%, rgba(239,228,255,1) 100%); */
`;

const Title = styled.h1`
  display:flex;
  font-size:3em;
  font-weight:300;
  font-family: 'Josefin Sans', sans-serif;
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