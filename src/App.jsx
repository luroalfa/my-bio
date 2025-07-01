import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import BadgeList from "./components/BadgeList";
import LinkCard from "./components/LinkCard";
import Footer from "./components/Footer";
import Blog from "./pages/blog/Blog";
import ArticleRouterDom from "./pages/blog/Articles/ArticleRouterDom";
import ArticleUseEffect from "./pages/blog/Articles/ArticleUseEffect";

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: float 12s ease-in-out infinite;
  z-index: 0;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.05);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #0f172a;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Card = styled.main`
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid #dde4ee;
  width: 100%;
  max-width: 420px;
`;

function Home() {
  return (
    <Card>
      <Header />
      <BadgeList />
      <LinkCard />
      <Footer />
    </Card>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Bubble
                style={{
                  width: "100px",
                  height: "100px",
                  top: "20%",
                  left: "10%",
                }}
              />
              <Bubble
                style={{
                  width: "60px",
                  height: "60px",
                  top: "80%",
                  left: "30%",
                }}
              />
              <Bubble
                style={{
                  width: "80px",
                  height: "80px",
                  bottom: "10%",
                  right: "15%",
                }}
              />
              <Bubble
                style={{
                  width: "50px",
                  height: "50px",
                  bottom: "50%",
                  right: "25%",
                }}
              />
              <Home />
            </Wrapper>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/mastering-router-dom"
          element={<ArticleRouterDom />}
        />
        <Route
          path="/blog/mastering-use-effect"
          element={<ArticleUseEffect />}
        />
      </Routes>
    </>
  );
}

export default App;
