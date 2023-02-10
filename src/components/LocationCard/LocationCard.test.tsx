import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterCardList from "../../views/CharacterCardList/CharacterCardList";
import { LocationCard } from "./LocationCard";

describe("<LocationCard>", () => {
  const location = {
    id: 0,
    url: "",
    created: "",
    name: "Rick's Battery Microverse",
    type: "Microverse",
    dimension: "Replacement Dimension",
    residents: [
      {
        id: 0,
        url: "",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Chris",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        episode: [],
        origin: {
          name: "Earth (C-137)",
          url: "",
        },
        location: {
          name: "Citadel of Ricks",
          url: "",
        },
        created: "",
      },
    ],
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LocationCard {...location} />} />
          <Route path="/characters" element={<CharacterCardList />} />
        </Routes>
      </BrowserRouter>
    );
  });

  test("Character labels links", () => {
    const user = userEvent.setup();

    user
      .click(screen.getByText("Chris"))
      .then(() => expect(screen.getByText("Chris")).toBeInTheDocument());
  });
});
