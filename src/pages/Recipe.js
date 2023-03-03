import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #ffffff;
  }
  img {
    margin: 0% 20%;
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 300px;
    height: 250px;
    object-fit: cover;
  }

  h2 {
    margin-bottom: 2rem;
    width: 300px;
  }

  h3 {
    font-size: 16px;
    margin-left: 60px;
    line-height: 25px;
  }
  li {
    font-size: 1.2rem;
    line-hight: 2.5rem;
  }
  ul {
    margin-top: 2rem;
    margin-left: 5rem;
  }
`;

const Button = styled.button`
  margin-left: 55px;
  padding: 0.5rem 1rem;
  color: #313131;
  background: #ffffff;
  border: 2px solid black;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 1rem;
`;

export default Recipe;
