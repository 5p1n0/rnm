/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * Routing and graphql client setup
 * 
 * @remarks
 * 
 * All routes are child of "/" route.
 * 404 is handled with errorElement.
 */

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createClient, Provider } from "urql";
import NotFound from "./views/NotFound/NotFound";
import CharacterCardList from "./views/CharacterCardList/CharacterCardList";
import EpisodeCardList from "./views/EpisodeCardList/EpisodeCardList";
import LocationCardList from "./views/LocationCardList/LocationCardList";
import IndexPage from "./views/IndexPage/IndexPage";


const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider value={client}>
        <IndexPage />
      </Provider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "characters",
        element: <CharacterCardList />,
      },
      {
        path: "episodes",
        element: <EpisodeCardList />,
      },
      {
        path: "locations",
        element: <LocationCardList />,
      },
    ],
  },
]);

createRoot(document.getElementById("app")!).render(
  <RouterProvider router={router} />
);
