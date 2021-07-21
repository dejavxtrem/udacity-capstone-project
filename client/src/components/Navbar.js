import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0 1rem;

`;

const BurgerMenu = styled.div`
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: black;
    position: absolute;
    display: block;
    content: "";
  }

  & span:before {
    top: -10px;
  }

  & span:after {
    bottom: -10px;
  }
`;

const Navbar = ({ toggleMenu }) => {
  return (
    <NavWrapper>
      <BurgerMenu
        onClick={() => {
          toggleMenu(true);
          console.log("Hamburger menu clicked, toggle open");
        }}
      >
        <span />
      </BurgerMenu>
      <p>Something here</p>
    </NavWrapper>
  );
};

export default Navbar;
