import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import { Search } from './Components/Search/Search';
import { CompanySearch } from './company';
import { SearchCompanies } from './Api/api';
import { CardList } from './Components/CardLists/CardList';
import { PortfolioList } from './Components/Portfolio/PortfolioList/PortfolioList';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSerachResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await SearchCompanies(search);
    if(typeof result === "string"){
      setServerError(result);
    }
    else if(Array.isArray(result.data)){
      setSerachResult(result.data);
    }
    console.log(searchResult);
    console.log(serverError);
  };

  const onPortfolioCreate = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const exist = portfolioValues.find((value) => value === e.target[0].value);
    if(exist) return;
    const updatePortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatePortfolio);
  }

  const onPortfolioDelete = async (e: any) => {
    e.preventDefault();
    console.log(e);
    const removeItem = portfolioValues.filter((value) => {
      return value !== e.target[0].value
    });

    setPortfolioValues(removeItem)
  }
  
  return (
    <div className="App">

      <Navbar/>

      {/* <Hero/> */}

      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange} />

      <PortfolioList portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
     {serverError && <h1>{serverError}</h1>}

     <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
