import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CombinedError, Provider } from "urql";
import { fromValue, never } from "wonka";
import EpisodeCardList from "./EpisodeCardList";

describe("<EpisodeCardList>", () => {
  const mockClient = {
    executeQuery: jest.fn(() =>
      fromValue({
        data: {
          episodes: {
            info: {
              next: 2,
              prev: null,
            },
            results: [
              {
                name: "The Wedding Squanchers",
                air_date: "October 4, 2015",
                episode: "S02E10",
                characters: [
                  {
                    name: "Rick Sanchez",
                  },
                ],
              },
            ],
          },
        },
      })
    ),
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider value={mockClient as any}>
          <EpisodeCardList />
        </Provider>
      </BrowserRouter>
    );
  });

  test("Query execution", () => {
    expect(mockClient.executeQuery).toBeCalledTimes(2);
    expect(screen.getByText("The Wedding Squanchers")).toBeInTheDocument();
  });

  test("Page navigation", () => {
    const user = userEvent.setup();

    user.click(screen.getAllByTestId("next")[0]).then(() => {
      expect(mockClient.executeQuery).toBeCalledTimes(3);
    });

    user.click(screen.getAllByTestId("prev")[0]).then(() => {
      expect(mockClient.executeQuery).toBeCalledTimes(4);
    });
  });

  test("Search button and input search", () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText("Search by name or title...");

    user.type(input, "search test..");

    user.click(screen.getByText("☌")).then(() => {
      expect(mockClient.executeQuery).toBeCalledTimes(4);
    });
  });

  test("Reset button", () => {
    const user = userEvent.setup();

    user
      .click(screen.getByText("↺"))
      .then(() => expect(mockClient.executeQuery).toBeCalledTimes(6));
  });

  test("Loading spinner display", () => {
    const mockClient = {
      executeQuery: jest.fn(() => never),
    };

    render(
      <BrowserRouter>
        <Provider value={mockClient as any}>
          <EpisodeCardList />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.getByLabelText("fetch-spinner", { selector: "svg" })
    ).toBeInTheDocument();
  });

  test("Error display", () => {
    const mockClient = {
      executeQuery: () =>
        fromValue({
          error: new CombinedError({
            networkError: Error("something went wrong!"),
          }),
        }),
    };

    render(
      <BrowserRouter>
        <Provider value={mockClient as any}>
          <EpisodeCardList />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.getByLabelText("rick-face", { selector: "svg" })
    ).toBeInTheDocument();
    expect(screen.getByText(/something went wrong!/i)).toBeInTheDocument();
  });
});
