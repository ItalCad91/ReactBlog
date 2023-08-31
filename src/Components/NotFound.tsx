import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 0;
  color: #e74c3c;
`;

const Message = styled.p`
  font-size: 24px;
  margin: 10px 0;
  color: #333;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! The page you are looking for doesn't exist.</Message>
      <Link href="/">Go back to home</Link>
    </Container>
  );
}

export default NotFound;
