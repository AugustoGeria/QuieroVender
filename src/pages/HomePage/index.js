import React from "react";
import CategoryListContainer from "../../components/CategoryListContainer/index";
import Navbar from "../../components/Navbar";

function HomePage(props) {
  return (
    <>
      <Navbar></Navbar>
      <img src="https://placehold.co/1400x400" alt="banner"></img>
      <CategoryListContainer></CategoryListContainer>
    </>
  );
}

export default HomePage;
