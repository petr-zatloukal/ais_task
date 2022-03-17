import styled from "styled-components";

const Layout = ({ children }) => (
  <Container>
    <NavBar>NavBar</NavBar>
    <Main>{children}</Main>
    <SideBar>SideBar</SideBar>
    <Footer>Footer</Footer>
  </Container>
);

export default Layout;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 100px 1fr 1fr;
  grid-template-areas:
    "nav nav nav"
    "sidebar main main"
    "sidebar footer footer";
  text-align: center;
  grid-gap: 0;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "footer";
  }
  color: white;
`;

const NavBar = styled.nav`
  background: #727279;
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  background: #eeeeee;
  color: black;
  grid-area: main;
  padding: 0.25rem;
  @media (max-width: 550px) {
    width: calc(100vw - 15px);
  }
`;
const SideBar = styled.div`
  background: #b1b1be;
  grid-area: sidebar;
  padding: 1rem;
`;

const Footer = styled.footer`
  background: #47474b;
  grid-area: footer;
  padding: 0.25rem;
`;
