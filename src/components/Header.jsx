import styled from "styled-components";
import { Code2 } from "lucide-react";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const DevTag = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #2ecc71;
  border: 2px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: pulse 1.8s infinite;

  svg {
    width: 12px;
    height: 12px;
    color: white;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

function Header() {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProfileImage src="/me.jpg" alt="Luis Rodríguez" />
        <DevTag>
          <Code2 />
        </DevTag>
      </ImageWrapper>
      <Name>Luis Rodríguez</Name>
      <Subtitle>Fullstack Developer</Subtitle>
    </Wrapper>
  );
}

export default Header;
