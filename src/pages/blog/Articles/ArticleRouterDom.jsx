import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Background = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: auto;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      circle at 1px 1px,
      #1e293b 1px,
      transparent 0
    );
    background-size: 32px 32px;
    opacity: 0.2;
    z-index: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 720px;
  width: 100%;
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 0.75rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  color: #333;
  line-height: 1.7;

  h2 {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: #1a1a1a;

    @media (max-width: 640px) {
      font-size: 1.1rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  code {
    background: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9rem;
  }

  pre {
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 0.9rem;

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  background: #1e40af;
  color: white;
  padding: 0.65rem 1.2rem;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #1c3aa9;
  }

  @media (max-width: 640px) {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.95rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #1e40af;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #374fc7;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    display: block;
    text-align: left;
  }
`;

function Article() {
  return (
    <Background>
      <Wrapper>
        <BackLink to="/blog">
          <FaArrowLeft /> Back to Blog
        </BackLink>

        <Title>How to implement React Router in a React project</Title>
        <Meta>Published on June 30, 2025 · 6 min read</Meta>

        <Content>
          <p>
            React Router is a powerful library that allows you to manage
            navigation in single-page React apps (SPA).
          </p>

          <h2>1. Installation</h2>
          <p>First, install the package:</p>
          <pre>{`npm install react-router-dom`}</pre>

          <h2>2. Initial Setup</h2>
          <p>
            Wrap your app in <code>BrowserRouter</code> inside{" "}
            <code>main.jsx</code>:
          </p>
          <pre>{`import { BrowserRouter } from 'react-router-dom';
import App from './App';

<BrowserRouter>
  <App />
</BrowserRouter>`}</pre>

          <h2>3. Defining Routes</h2>
          <p>
            Inside <code>App.jsx</code>:
          </p>
          <pre>{`import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import NotFound from './pages/NotFound';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/1" element={<Article />} />
  <Route path="*" element={<NotFound />} />
</Routes>`}</pre>

          <h2>4. Navigation with &lt;Link /&gt;</h2>
          <p>To navigate internally without reload:</p>
          <pre>{`import { Link } from 'react-router-dom';

<Link to="/blog">Go to Blog</Link>`}</pre>

          <h2>5. Creating a Not Found Page (404)</h2>
          <p>
            Create a <code>NotFound.jsx</code>:
          </p>
          <pre>{`function NotFound() {
  return (
    <div>
      <h1>This page doesn’t exist</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
}`}</pre>

          <h2>6. Dynamic Routes with Parameters</h2>
          <p>Define routes like this:</p>
          <pre>{`<Route path="/dashboard/:id" element={<DashboardItem />} />`}</pre>
          <p>
            Then use the <code>useParams</code> hook to access the{" "}
            <code>:id</code> value:
          </p>
          <pre>{`import { useParams } from 'react-router-dom';

const { id } = useParams();`}</pre>

          <h2>7. Example: Fetching Dynamic Data</h2>
          <p>Example: fetch todos for a user with dynamic ID:</p>
          <pre>{`useEffect(() => {
  fetch(\`https://jsonplaceholder.typicode.com/users/\${id}/todos\`)
    .then(res => res.json())
    .then(data => setTodos(data));
}, [id]);`}</pre>

          <h2>Conclusion</h2>
          <p>
            React Router enables scalable routing and navigation. Using features
            like nested routes, dynamic parameters, and lazy loading, you can
            build rich and performant SPAs.
          </p>
        </Content>

        <BackButton to="/blog">← Back to Blog</BackButton>
      </Wrapper>
    </Background>
  );
}

export default Article;
