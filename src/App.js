import Home from "./pages/Home"
import Game from "./pages/Game"
import {Favourites} from "./pages/Favourites"
import {useEffect, useState} from 'react'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import NavBar from "./Layout/NavBar";
import { FavouritesProvider } from "./Components/FavouritesProvider";
import { ThemeProvider } from "styled-components"
import GlobalStyle from './GlobalStyle'
import { lightTheme, darkTheme } from './theme';


function App() {
  const [games, setGames] = useState([])
  const [filteredGames, setfilteredGames] = useState([])
  const [theme, setTheme] = useState('light');
  

  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        params: {'sort-by': 'relevance'},
        headers: {
        'X-RapidAPI-Key': 'ed0f6ccb7bmsh9200f9766b62019p106265jsnd28ce46f0cb9',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        fetch(url, options)
        .then(res => res.json())
        .then(data => {
            setGames(data)
            setfilteredGames(data)
        })
    },[])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyle />
    <FavouritesProvider>
    <div className="App"> 
      <BrowserRouter>
        <NavBar theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home games={games} filteredGames={filteredGames} setfilteredGames={setfilteredGames} />}/>
          <Route path="/:id" element={<Game/>}/>
          <Route path="/favourites" element={<Favourites games={games} />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;
