import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const Badge = styled.span`
  background: ${({ bg }) => bg || "#e0e7ff"};
  color: ${({ color }) => color || "#1e3a8a"};
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const skills = [
  { name: "Node.js", bg: "#e8f5e9", color: "#2e7d32" },
  { name: "Go", bg: "#e0f7fa", color: "#007c91" },
  { name: "PostgreSQL", bg: "#ede7f6", color: "#4527a0" },
  { name: "React.js", bg: "#e3f2fd", color: "#1565c0" },
];

function BadgeList() {
  return (
    <Wrapper>
      {skills.map(({ name, bg, color }) => (
        <Badge key={name} bg={bg} color={color}>
          {name}
        </Badge>
      ))}
    </Wrapper>
  );
}

export default BadgeList;
