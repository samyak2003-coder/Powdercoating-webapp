import React from 'react';
import Header from "../../components/header/Header";
import YellowButton from "../../components/button/YellowButton";
import GreyButton from "../../components/button/GreyButton";

const Database: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-20 space-x-10">
        <GreyButton text="Main Page" href="/"/>
        <YellowButton text="Database" href="/database"/>
      </div>
      
    </>
  );
};

export default Database;