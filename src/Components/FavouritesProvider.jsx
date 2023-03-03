import { createContext, useState } from 'react';

export const FavouritesContext = createContext();

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    function addFavourite(title) {
      setFavourites([...favourites, title]);
    }
  
    function removeFavourite(title) {
      setFavourites(
        favourites.filter((favourite) => {
          return title !== favourite;
        })
      );
    }
  
    return (
      <FavouritesContext.Provider
        value={{ favourites, addFavourite, removeFavourite }}
      >
        {children}
      </FavouritesContext.Provider>
    );
}