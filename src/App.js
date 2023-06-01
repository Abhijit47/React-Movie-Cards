import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardSection from './components/CardSection/CardSection';
import Footer from './components/Footer/Footer';
import data from './assets/data.json';
import Button from './components/Button/Button';

const App = () => {

  const [searchValue, setSearchValue] = useState("");

  const inputHandler = (e) => {
    setSearchValue(() => e.target.value);

  };

  // Populate card filter all cards
  const newCard = () => {
    return data.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === ""
    );
  };


  return (
    <>
      <Button />
      <Navbar inputHandler={inputHandler} />
      <CardSection data={data} newCard={newCard} />
      <Footer />
    </>
  );
};

export default App;
