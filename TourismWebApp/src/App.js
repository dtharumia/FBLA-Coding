import Header from './Components/Header'
import Description from './Components/Description'
import SearchBar from './Components/SearchBar'
import FoodList from './posts/FoodList'
import React, { useState } from "react";

const App = () => {
  const [showFood, setShowFood] = useState(false);
  const [showFuns, setShowFuns] = useState(false);
  const [showNatures, setShowNatures] = useState(false);
  const [showRelaxes, setShowRelaxes] = useState(false);
  const [showShops, setShowShops] = useState(false);
  const [showSports, setShowSports] = useState(false);
  const processAttribute = (data) => {
    if (data.text === "Food & Drink") {
      setShowFood(true)
      setShowFuns(false)
      setShowShops(false)
      setShowRelaxes(false)
      setShowNatures(false)
      setShowSports(false)

    }
    else if (data.text === 'Fun/Play') {
      setShowFood(false)
      setShowFuns(true)
      setShowShops(false)
      setShowRelaxes(false)
      setShowNatures(false)
      setShowSports(false)
    }
    else if (data.text === 'Shop') {
      setShowFood(false)
      setShowFuns(false)
      setShowShops(true)
      setShowRelaxes(false)
      setShowNatures(false)
      setShowSports(false)
    }
    else if (data.text === 'Relax') {
      setShowFood(false)
      setShowFuns(false)
      setShowShops(false)
      setShowRelaxes(true)
      setShowNatures(false)
      setShowSports(false)
    }
    else if (data.text === 'Nature') {
      setShowFood(false)
      setShowFuns(false)
      setShowShops(false)
      setShowRelaxes(false)
      setShowNatures(true)
      setShowSports(false)
    }
    else if (data.text === 'Sport') {
      setShowFood(false)
      setShowFuns(false)
      setShowShops(false)
      setShowRelaxes(false)
      setShowNatures(false)
      setShowSports(true)
    }

  }



  return (
    <div className="container">
      <Header />
      <Description />
      <SearchBar onSearch={processAttribute} />
      {showFood ? <FoodList /> : null}
      {showFuns ? <div>fun</div> : null}
      {showNatures ? <div>nature</div> : null}
      {showRelaxes ? <div>relax</div> : null}
      {showShops ? <div>shops</div> : null}
      {showSports ? <div>sports</div> : null}
    </div>
  );
}

export default App;