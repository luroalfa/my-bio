import styled from "styled-components";

const Wrapper = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  color: #888;
  margin-top: 1.5rem;
`;

function Footer() {
  return (
    <Wrapper>© 2025 Luis Rodríguez. All rights reserved.</Wrapper>
  );
}

export default Footer;
