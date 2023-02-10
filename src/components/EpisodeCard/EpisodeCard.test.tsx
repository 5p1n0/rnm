import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterCardList from "../../views/CharacterCardList/CharacterCardList";
import { EpisodeCard } from "./EpisodeCard";

describe("<EpisodeCard>", () => {
  const episode = {
    id: 0,
    url: "",
    created: "",
    air_date: "12-09-2013",
    name: "Close Rick-counters of the Rick Kind",
    episode: "S01E10",
    characters: [
      {
        id: 0,
        url: "",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        name: "Rick Sanchez",
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
          <Route path="/" element={<EpisodeCard {...episode} />} />
          <Route path="/characters" element={<CharacterCardList />} />
        </Routes>
      </BrowserRouter>
    );
  });

  test("Character label links", () => {
    const user = userEvent.setup();

    user
      .click(screen.getByText("Rick Sanchez"))
      .then(() => expect(screen.getByText("Rick Sanchez")).toBeInTheDocument());
  });
});
