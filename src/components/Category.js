import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { color } from "framer-motion";

function Category() {
  return (
    <List>
      <SLink to={"/food-recipe-app/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/food-recipe-app/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/food-recipe-app/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/food-recipe-app/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #ffffff;
    font-size: 0.8rem;
  }

  svg {
    color: #ffffff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: #ffffff;
    }

    h4 {
      color: #ffffff;
    }
  }
`;

export default Category;
