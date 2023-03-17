import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // import MemoryRouter
import { FavouritesProvider } from "../Components/FavouritesProvider";
import Home from "../pages/Home";

describe("Home page renders correctly", () => {
  const games = [
    {
      developer: "Blizzard Entertainment",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      id: 540,
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      release_date: "2022-10-04",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      title: "Overwatch 2",
    },
  ];
  const filteredGames = [
    {
      developer: "Blizzard Entertainment",
      freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
      game_url: "https://www.freetogame.com/open/overwatch-2",
      genre: "Shooter",
      id: 540,
      platform: "PC (Windows)",
      publisher: "Activision Blizzard",
      release_date: "2022-10-04",
      short_description:
        "A hero-focused first-person team shooter from Blizzard Entertainment.",
      thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
      title: "Overwatch 2",
    },
  ];
  it("should render", () => {
    render(
      <MemoryRouter>
        <FavouritesProvider>
          <Home filteredGames={filteredGames} games={games} />
        </FavouritesProvider>
      </MemoryRouter>
    );

    const heading = screen.getByTestId("search-input");
    expect(heading).toBeInTheDocument();
  });
});
