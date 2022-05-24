import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import styled from "styled-components";
import HomePage from './views/homepage';
import Policy from './views/policy';
import MainNavigation from './components/mainNavigation';
import BottomBoxes from './playground/bottomBoxes';
import TopBoxes from './playground/topBoxes';
import Footer from './components/footer';
import PlaygroundRoom from './playground/playgroundRoom';


function App() {
  return (
    <MaxPage>
      <ContentPage>
        <Router>
          <Header>
            <MainNavigation />
            <Title>Kitchen Drawer</Title>
          </Header>
          <Content>
            <Pages>
              <Routes>
                <Route path="/" element={<HomePage />} >
                  <Route path=":bottomId" element={<BottomBoxes />} />
                  <Route path=":topId" element={<TopBoxes />} />
                  <Route path=":preview" element={<PlaygroundRoom />} />
                </Route>
                <Route path="/policy" element={<Policy />} />
              </Routes>
            </Pages>
          </Content>
        </Router>
      </ContentPage>
      <Footer />
    </MaxPage>
  );
}

export default App;


const MaxPage = styled.div`
  display: flex;
  flex-direction:column ;
  width: 100%;
  height:100%;
  overflow-x:hidden;
  position:relative; 
   /* @media (max-width: 1080px) {
    height: calc(100vh + 35px);
  }  */
`;


const Header = styled.div`
  display:flex;
  flex-direction:column ;
  background: rgb(59,194,167);
  background: linear-gradient(90deg, rgba(59,194,167,1) 0%, rgba(42,42,42,1) 100%);
  box-shadow:0px 1px 7px #2a2a2a;
  z-index:1;
`;

const Title = styled.h1`
  display:flex;
  font-size:3em;
  font-weight:300;
  text-shadow:0px 1px 0px #00fcff;
  font-family: 'Josefin Sans', sans-serif;
  white-space:nowrap;
  align-items:center;
  padding:0 0 33.6px 0;
  margin:0;
  color:#06151f;
  &:before{
    content:'';
    height:1px;
    width:10%;
    background:black;
    box-shadow: 0px 0px 1px #00fcff;
    margin:0px 30px 0px 0px;
  }
  &:after{
    content:'';
    height:1px;
    width:90%;
    box-shadow: 0px 0px 1px #00fcff;
    background:black;
    margin:0px 0px 0px 30px;
  }
`;

const ContentPage = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column ;

`;

const Content = styled.div`
  display:flex;
  height:100%;
  justify-content:flex-end ;
`;


const Pages = styled.div`
 display:flex;
 width:90%;
 /* margin:0 auto; */
 background:#d6fff9;
`;