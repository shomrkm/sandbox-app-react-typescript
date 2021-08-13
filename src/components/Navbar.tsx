import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

import { SidebarData } from './SidebarData';

const StyledNavbar = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  li {
    list-style: none;
  }
`;

const StyledMenuBars = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

const StyledNavMenu = styled.div<{ active: boolean }>`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0%;
  left: ${(props) => (props.active ? 0 : '-100%')};
  transition: ${(props) => (props.active ? '350ms' : '850ms')};
`;

const StyledNavText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  a:hover {
    background-color: #1a83ff;
  }

  span {
    margin-left: 16px;
  }
`;

const StyledNavMenuItem = styled.div`
  width: 100%;
`;

const StyledNavbarToggle = styled.div`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

interface Props {}

export const Navbar: React.VFC<Props> = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <StyledNavbar>
          <StyledMenuBars>
            <Link to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </StyledMenuBars>
          <StyledNavMenu active={sidebar}>
            <nav>
              <ul onClick={showSidebar}>
                <StyledNavMenuItem>
                  <li>
                    <StyledNavbarToggle>
                      <Link to="#">
                        <AiIcons.AiOutlineClose />
                      </Link>
                    </StyledNavbarToggle>
                  </li>
                </StyledNavMenuItem>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index}>
                      <StyledNavText>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </StyledNavText>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </StyledNavMenu>
        </StyledNavbar>
      </IconContext.Provider>
    </>
  );
};
