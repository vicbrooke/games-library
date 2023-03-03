import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import '../styles/_Home.scss';
import {Card, Button} from "react-bootstrap"
import { GameCard } from '../Components/GameCard';

function Home({games, filteredGames, setfilteredGames}){
    const navigate = useNavigate()
    
    const [filterBy, setFilterBy] = useState({searchTerm: "", genre: "", platform:"", sortBy:"" })

    useEffect(()=>{
        let arr = games.filter(game => {
            if(game.genre === filterBy.genre || filterBy.genre === ""){ 
                //games that are on multiple platforms are included when filtering for one platform
                if(filterBy.platform=== "" || game.platform.includes(filterBy.platform)){
                    const regex = new RegExp(filterBy.searchTerm, "gi")
                    return game.genre.match(regex)|| game.title.match(regex)
                }
            }
            return false
        })
        if (filterBy.sortBy === "most recent"|filterBy.sortBy === "least recent"){
            arr.sort((a,b)=> {
                let date1 =a.release_date.split("-")
                let date2 =b.release_date.split("-")
                if(parseInt(date1[0])-parseInt(date2[0]) !== 0)return parseInt(date1[0])-parseInt(date2[0])
                if(parseInt(date1[1])-parseInt(date2[1]) !== 0)return parseInt(date1[1])-parseInt(date2[1])
                return parseInt(date1[2])-parseInt(date2[2])
            })
            if (filterBy.sortBy === "most recent") arr.reverse()
        }
        if(filterBy.sortBy === "alphabetically"){
            arr.sort((a,b) => {
                if (a.title[0] > b.title[0]) return 1;
                if (a.title[0] < b.title[0]) return-1;
                return 0;
            })
        }
        setfilteredGames(arr)
    }, [filterBy])

    return (
        <div className="home">
            <section className='home-container'>
            <section className="filter-bar">
                    <div className="flex-item">
                        <input
                            aria-label="filter by search term"
                            className="c-form-input"
                            placeholder="Search term"
                            id="cfbSearchTermInput"
                            data-testid="search-input"
                            value={filterBy.searchTerm}
                            onChange={e => {
                            setFilterBy({
                                ...filterBy,
                                searchTerm: e.target.value
                            });
                            }}
                        />
                    </div>
                    <div className="c-form-select flex-item">
                        <select
                            aria-label="filter by genre"
                            name="filter"
                            className="c-form-select__dropdown"
                            value={filterBy.genre}
                            id="creatorSelect"
                            onChange={e => {
                            setFilterBy({
                                ...filterBy,
                                genre: e.target.value
                            });
                            }}>
                            <option value="">Genre</option>
                            <option value="Shooter">Shooter</option>
                            <option value="MMORPG">MMORPG</option>
                            <option value="Racing">Racing</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Sports">Sports</option>
                            <option value="Card Game">Card Game</option>
                            <option value="MOBA">MOBA</option>
                            <option value="Fighting">Fighting</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Social">Social</option>
                            <option value="MMO">MMO</option>
                            <option value="Battle Royale">Battle Royale</option>
                            <option value="ARPG">ARPG</option>
                            <option value="MMOARPG">MMOARPG</option>
                            <option value="MMOFPS">MMOFPS</option>
                            <option value="Action RPG">Action RPG</option>
                            <option value="MMORPG">Action RPG</option>
                        </select>
                    </div>
                    <div className="c-form-select flex-item">
                        <select
                            aria-label="filter by platform"
                            name="filter"
                            data-testid="platform-filter"
                            className="c-form-select__dropdown"
                            value={filterBy.platform}
                            id="statusSelect"
                            onChange={e => {
                            setFilterBy({
                                ...filterBy,
                                platform: e.target.value
                            });
                            }}>
                            <option value="">Platform</option>
                            <option key="0" value="PC (Windows)">PC (Windows)</option>
                            <option key="1" value="Web Browser">Web Browser</option>
                        </select>
                    </div>
                    <div className="c-form-select flex-item">
                        <select
                            aria-label="sort by"
                            name="filter"
                            className="c-form-select__dropdown"
                            value={filterBy.sortBy}
                            id="sortBySelect"
                            onChange={e => {
                            setFilterBy({
                                ...filterBy,
                                sortBy: e.target.value
                            });
                            }}>
                            <option key="0"value="">Relevance</option>
                            <option key="1" value="most recent">Most Recent</option>
                            <option key="2" value="least recent">Least Recent</option>
                            <option key="3" value="alphabetically">alphabetically</option>
                        </select>
                    </div>
                    <div className="flex-item c-button">
                        <Button
                        aria-label="clear filters"
                        className="btn btn-sm btn-light btn-outline-dark"
                        onClick={()=>{setFilterBy({searchTerm: "", genre: "", platform:"",sortBy:"" })}}
                        >Clear</Button>
                    </div>
                </section>
            <div data-testid="games-container" className="card-container">
            {filteredGames.map(game => {
                return (
                    <GameCard game={game} key={game.id}/>
                )})}
            </div>
            </section>
      </div>
    )
}

export default Home