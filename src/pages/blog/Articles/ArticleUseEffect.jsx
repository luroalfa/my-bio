import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// Dark background with pattern
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

        <Title>Understanding useEffect in React</Title>
        <Meta>Published on July 1, 2025 · 5 min read</Meta>

        <Content>
          <p>
            The <code>useEffect</code> hook in React allows you to perform side
            effects in function components. It's one of the most essential hooks
            for handling logic like fetching data, subscriptions, or manually
            changing the DOM.
          </p>

          <h2>1. Basic Syntax</h2>
          <p>
            The syntax of <code>useEffect</code> looks like this:
          </p>
          <pre>{`useEffect(() => {
  // side effect logic
}, [dependencies]);`}</pre>

          <h2>2. When does it run?</h2>
          <p>
            - By default, it runs after every render.
            <br />
            - If you provide a dependency array, it only runs when those
            dependencies change.
            <br />- If the array is empty, it runs once after the first render
            (similar to <code>componentDidMount</code>).
          </p>

          <h2>3. Fetching Data</h2>
          <p>Example of fetching data on mount:</p>
          <pre>{`useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);`}</pre>

          <h2>4. Cleaning Up</h2>
          <p>
            If your effect returns a function, it will be used to clean up
            before the component unmounts or before re-running the effect:
          </p>
          <pre>{`useEffect(() => {
  const interval = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(interval);
}, []);`}</pre>

          <h2>5. Common Pitfalls</h2>
          <ul>
            <li>Not providing dependencies can cause infinite loops.</li>
            <li>
              Referencing stale state inside the effect without updating
              dependencies.
            </li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            <code>useEffect</code> is a powerful tool for managing side effects
            in functional React components. Understanding its lifecycle and how
            dependencies work will help you write better, cleaner logic in your
            apps.
          </p>
        </Content>

        <BackButton to="/blog">← Back to Blog</BackButton>
      </Wrapper>
    </Background>
  );
}

export default Article;
