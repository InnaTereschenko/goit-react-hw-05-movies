import { styled } from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const StyledLink = styled(NavLink)`
  color: #ff6918;
  background-color: #5a18ff;
  text-decoration: none;

  height: 40px;
  margin: 10px;

  padding: 0 40px;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;

  &.active {
    color: #ff6918;
  }
  &:hover {
    color: #00ffff;
    background-color: #08aca0;

    box-shadow: inset 0px 2px 4px rgba(0, 255, 255, 0.3),
      inset 0px 4px 8px rgba(0, 255, 255, 0.3),
      inset 0px 8px 16px rgba(0, 255, 255, 0.3);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;

const Navigation = styled.nav`
  top: 0;

  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
    background-color: #5a18ff;
  box-shadow: 0px 1px 2px rgba(0,255,255,0.5), 
              0px 2px 4px rgba(0,255,255,0.5), 
              0px 4px 8px rgba(0,255,255,0.5), 
              0px 8px 16px rgba(0,255,255,0.5);
}`;

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
