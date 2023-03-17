import React from "react";
import {
  render,
  screen,
  userEvent,
  cleanup,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import App from "../App";
import "@testing-library/react";
import { FavouritesProvider } from "../Components/FavouritesProvider.jsx";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router";

afterEach(cleanup);

describe.skip("the game page renders the correct game", () => {
  test("a game renders when id is passed", async () => {
    const favourites = [
      /* put some initial favourites here */
    ];
    const addFavourite = jest.fn();
    const removeFavourite = jest.fn();
    const id = 540;

    await act(async () => {
      await render(
        <FavouritesProvider
          value={{ favourites, addFavourite, removeFavourite }}
        >
          <MemoryRouter initialEntries={[`/${id}`]}>
            <Routes>
              <Route path="/:id" component={Game}>
                <Game />
              </Route>
            </Routes>
          </MemoryRouter>
        </FavouritesProvider>
      );
    });
    const textElement = screen.getByText("Overwatch 2");
    expect(textElement).toBeInTheDocument();
  });
});
