import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaLaptopCode,
} from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  {
    label: "WhatsApp",
    desc: "Contáctame directamente por mensaje",
    href: "https://wa.me/50670031154",
    icon: <FaWhatsapp />,
  },
  {
    label: "LinkedIn",
    desc: "Connect with me professionally",
    href: "https://www.linkedin.com/in/rodriguezfallasluis/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    desc: "Check out my code projects",
    href: "https://github.com/luroalfa",
    icon: <FaGithub />,
  },
  {
    label: "Tech Blog",
    desc: "Read my technical articles and tutorials",
    href: "/blog",
    icon: <BsBook />,
    internal: true,
  },
  {
    label: "Download CV",
    desc: "Get my resume in PDF format",
    href: "/LuisRodriguezCV.pdf",
    icon: <FaFileDownload />,
  },
  // {
  //   label: 'Web Dev Services',
  //   desc: 'Sitio web de mis servicios como desarrollador',
  //   href: 'https://tusitioweb.com',
  //   icon: <FaLaptopCode />,
  // },
  // {
  //   label: "Portafolio",
  //   desc: "See my featured work and case studies",
  //   href: "https://tusitio.dev/", // o Netlify, Vercel, etc.
  // },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ disabled }) => (disabled ? "#f1f1f1" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#111")};
  border: 1px solid #e5e7eb;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#f1f1f1" : "#f9fafb")};
  }

  .icon-wrapper {
    min-width: 42px;
    min-height: 42px;
    border-radius: 50%;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #4b5563;
      font-size: 18px;
    }
  }

  .content {
    flex-grow: 1;

    strong {
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.1rem;
    }

    span {
      font-size: 0.83rem;
      color: #666;
    }
  }
`;

function LinkCard() {
  return (
    <Container>
      {links.map(({ label, desc, href, icon, disabled, internal }) => {
        const Component = internal ? RouterLink : "a";

        return (
          <Card
            as={Component}
            key={label}
            to={internal ? href : undefined}
            href={!internal ? href || "#" : undefined}
            target={!internal && !disabled ? "_blank" : undefined}
            rel={!internal && !disabled ? "noopener noreferrer" : undefined}
            disabled={disabled}
          >
            <div className="icon-wrapper">{icon}</div>
            <div className="content">
              <strong>{label}</strong>
              <span>{desc}</span>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

export default LinkCard;
