import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
`;

const NavBar = () => {
  return (
    <Container>
      <Link to="/home">Home</Link>
      <Link to="/test">Test</Link>
    </Container>
  );
};

export default NavBar;
