import React from 'react';
import "./home.css";
import Letter from '../../components/Letter/Letter';

const Home = () => {
  return (
    <div className="home">
      <Letter letter={"L"} number={"1"} />
      <Letter letter={"M"} number={"14"} />
      <Letter letter={"d"} number={"18"} />
      <Letter letter={"y"} number={"25"} />
    </div>
  )
}

export default Home