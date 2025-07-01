import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

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

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 1rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
  }
`;

const ArticleCard = styled.article`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 1.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (max-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ArticleMeta = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ArticleExcerpt = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReadMoreButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #5a6fd8;
  }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem 1rem;
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


const CoverImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: #eef2f7;
  color: #333;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-weight: 500;
`;

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "How to implement React Router in a React project",
      excerpt: `React Router is an essential library for handling routes in single-page applications (SPA).
      In this article, I’ll show you how to set it up from scratch, define routes, navigate between views, and use dynamic parameters.`,
      date: "2025-06-30",
      readTime: "6 min",
      image: "/routerdom.png",
      tags: ["React", "Routing", "SPA"],
      path: "mastering-router-dom",
    },
    {
      id: 2,
      title: "Mastering useEffect in React",
      excerpt: `Discover how to use the useEffect hook properly for fetching data, syncing with external systems, and improving user experience.`,
      date: "2025-07-01",
      readTime: "5 min",
      image: "/useEffect.png",
      tags: ["React", "Hooks", "useEffect"],
      path: "mastering-use-effect",
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const filteredArticles = articles.filter((article) => {
    const search = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(search) ||
      article.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  return (
    <Background>
      <Wrapper>
      <BackLink to="/">
        <FaArrowLeft /> Back to Home
      </BackLink>
        <Header>
          <Title>Tech Blog</Title>
          <Subtitle>
            Sharing real-world solutions, best practices, and hands-on
            experience as a fullstack developer.
          </Subtitle>
        </Header>

        <SearchBar
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredArticles.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleContent>
              <CoverImage src={article.image} alt={article.title} />
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleMeta>
                {formatDate(article.date)} • {article.readTime} read
              </ArticleMeta>
              <Tags>
                {article.tags.map((tag) => (
                  <Tag key={tag}>#{tag}</Tag>
                ))}
              </Tags>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <Link to={`/blog/${article.path}`}>
                <ReadMoreButton>Read more</ReadMoreButton>
              </Link>
            </ArticleContent>
          </ArticleCard>
        ))}

        {filteredArticles.length === 0 && (
          <p style={{ textAlign: "center", color: "#999" }}>
            No articles found for "{searchTerm}"
          </p>
        )}
      </Wrapper>
    </Background>
  );
}

export default Blog;
