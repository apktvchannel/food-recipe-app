import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/food-recipe-app/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0.5rem 20rem;
  width: 30rem;
  position: relative;
  left: -12%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #ffffff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    color: #ffffff;
    transform: translate(100%, -50%);
  }
`;

export default Search;
