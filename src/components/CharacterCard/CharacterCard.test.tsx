import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EpisodeCardList from "../../views/EpisodeCardList/EpisodeCardList";
import { CharacterCard } from "./CharacterCard";

describe("<CharacterCard>", () => {
  const character = {
    id: 0,
    url: "",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "",
    },
    episode: [
      {
        id: 0,
        url: "",
        created: "",
        air_date: "12-09-2013",
        name: "Close Rick-counters of the Rick Kind",
        episode: "S01E10",
        characters: [],
      },
    ],
    location: {
      name: "Citadel of Ricks",
      url: "",
    },
    created: "",
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterCard {...character} />} />
          <Route path="/episodes" element={<EpisodeCardList />} />
        </Routes>
      </BrowserRouter>
    );
  });

  test("Location label link", () => {
    const user = userEvent.setup();

    user
      .click(screen.getByText("Citadel of Ricks"))
      .then(() =>
        expect(screen.getByText("Citadel of Ricks")).toBeInTheDocument()
      );
  });

  test("Origin label link", () => {
    const user = userEvent.setup();

    user
      .click(screen.getByText("Earth (C-137)"))
      .then(() =>
        expect(screen.getByText("Earth (C-137)")).toBeInTheDocument()
      );
  });

  test("Pre card flip styles", () => {
    expect(screen.getByRole("img")).toHaveStyle("display: block");
    expect(screen.getByTestId("c-card")).toHaveStyle("transform: none");
    expect(screen.getByTestId("front")).toHaveStyle("display: block");
    expect(screen.getByTestId("back")).toHaveStyle("display: none");
  });

  test("Card flip and post flip styles", () => {
    const user = userEvent.setup();

    user.click(screen.getByLabelText("Flip", { selector: "svg" })).then(() => {
      expect(
        screen.getByText("Close Rick-counters of the Rick Kind")
      ).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveStyle("display: none");
      expect(screen.getByTestId("card")).toHaveStyle(
        "transform: rotateY(180deg)"
      );
      expect(screen.getByTestId("front")).toHaveStyle("display: none");
      expect(screen.getByTestId("back")).toHaveStyle("display: block");
    });
  });

  test("Episode label links", () => {
    const user = userEvent.setup();

    user
      .click(screen.getByLabelText("Flip", { selector: "svg" }))
      .then(() =>
        user
          .click(screen.getByText("Close Rick-counters of the Rick Kind"))
          .then(() => expect(screen.getByText("S01E10")).toBeInTheDocument())
      );
  });
});
