import Header from './Components/Header'
import Description from './Components/Description'
import SearchBar from './Components/SearchBar'
import FoodList from './posts/FoodList'

const App = () => {
  
  const processAttribute = (text) => {
    if (text === "food") {
      return <FoodList/>
    }
  }
  
  return (
    <div className="container">
      <Header />
      <Description />
      <SearchBar onSearch = {processAttribute}/>
      {processAttribute("food")}
    </div>
  );
}

export default App;
