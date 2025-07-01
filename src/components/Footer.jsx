import styled from "styled-components";

const Wrapper = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  color: #888;
  margin-top: 1.5rem;
`;

function Footer() {
  return (
    <Wrapper>© 2025 Luis Rodríguez. Todos los derechos reservados.</Wrapper>
  );
}

export default Footer;
