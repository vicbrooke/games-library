import React from "react"
import {render,screen, fireEvent, cleanup, getAllByRole, act, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom";
import Home from "../pages/Home"
import App from "../App"
import "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { GameCard } from "../Components/GameCard";

// beforeEach(()=>render(<App/>))
afterEach(cleanup)

describe("the home page returns the games in the correct order", ()=>{
    test("renders the games fetched from the API", async ()=>{
        await act(async ()=>{
            await render(<App/>)
        })
        let gamesContainer = screen.getByTestId("games-container")
        await (waitFor( ()=> expect(gamesContainer.children.length).toBeGreaterThan(0)))
    })


    test("filters through the results by a search term", async ()=>{
        console.log("running")
        await act(async()=>{
            await render (<App/>)
        })
        // let gamesContainer
        // await act(async() => {
            // gamesContainer = await screen.findByTestId("games-container")
            await userEvent.type(screen.getByPlaceholderText("Search term"),"z") 
            // let gamesCard = await screen.findAllByTestId("game-card")
            // console.log(gamesCard.length)
        // }) 
        // let gamesCard
        await waitFor(async ()=>{
            expect(screen.getByText("Overwatch 2")).not.toBeInTheDocument()
            // console.log(gamesContainer.children.length)
            // // console.log(gamesContainer)
            // let gamesCard = await screen.findAllByTestId("game-card")
            // console.log(gamesCard.length)

            // expect(gamesCard[0].querySelector(".card-title").innerHTML).toContain("z")
        })
    })
       
    
    // test("filters through the games by platform (windows)", ()=>{
    //     act(()=>{
    //         render (<App/>)
    //     })
    //     fireEvent.change(screen.getByTestId("platform-filter"), { target: { value: 'PC (Windows)' } })
    //     let gamesContainer = screen.getByTestId("games-container")
    //     expect(gamesContainer.findByText("PC (Windows)")).toBeInTheDocument()
    // })
    
    // test("filters through the games by platform (web browser)", ()=>{
    
    // })
    
    // test("returns games that are available for multiple platforms when filtering for one of the included platforms", ()=>{
    
    // })
    
    // test("sorts through the results by date", ()=>{
    
    // })
})
