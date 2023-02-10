/**
 * Characters page
 * 
 * @remarks 
 *  This page contains a search-bar with search and reset buttons,
 *  a list of character cards with pagination 
 *  and a CTA button near the page end.  
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "urql";
import { MainWrapper, SearchButtonWrapper } from "@components/wrappers";
import {
  ResetButton,
  SearchButton,
  TopButton,
} from "@components/buttons/index";
import { SearchBar } from "@components/SearchBar/SearchBar";
import { ErrorBlock } from "@components/ErrorBlock/ErrorBlock";
import { FetchSpinner } from "@assets/FetchSpinner/FetchSpinner";
import { CharacterCard } from "@components/CharacterCard/CharacterCard";
import { Character } from "../../interfaces";
import { RickFace } from "@assets/RickFace/RickFace";
import { PageNavigator } from "@components/PageNavigator/PageNavigator";

const CharacterCardList = () => {
  // Query filters used for pagination and character search 
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ name: "" });

  /*
   * Previously selected character link from a episode/location card
   * 
   * Here i'm using useLocation hook to get the character name.
   * Also, i'm using history.state.usr with e2e tests 
   * to manually update character and trigger a query update
   */
  const character = history.state?.usr ?? useLocation().state;

  // Character filter update on change
  useEffect(() => {
    setFilter(character);
  }, [character]);
  
  const query = `
  query($page: Int, $filter: FilterCharacter) {
      characters(page: $page, filter: $filter) {
        info{
          next,
          prev
        },
        results{
          image,
          name,
          status,
          species,
          type,
          gender,
          origin {
            name
          },
          episode {
            name,
            episode
          },
          location {
            name
          },
        }
      }    
    }
  `;
  
  // Query execution 
  const [{ data, fetching, error }] = useQuery({
    query: query,
    variables: { page, filter },
  });

  // Search-bar ref 
  const inputEl = useRef<HTMLInputElement>(null);

  // Update character and pagination query filters 
  const searchHandler = () => {
    if (inputEl?.current?.value) {
      setFilter({ name: inputEl.current.value });
      setPage(1);
    }
  };

  // Reset character and pagination query filters 
  const resetHandler = () => {
    if (inputEl?.current?.value) inputEl.current.value = "";
    setFilter({ name: "" });
    setPage(1);
  };

  return (
    <MainWrapper>
      <SearchBar inputEl={inputEl} />

      <SearchButtonWrapper>
        <SearchButton handler={searchHandler} />
        <ResetButton handler={resetHandler} />
      </SearchButtonWrapper>

      {error && (
        <ErrorBlock
          message={`‘There's a lesson here...and I'm not gonna be the one to figure it out’ \u000A \u000A ${error.message}`}
        >
          <RickFace />
        </ErrorBlock>
      )}

      {fetching && <FetchSpinner />}

      {!fetching &&
        !error && 
        <PageNavigator
          prev={data.characters.info.prev}
          next={data.characters.info.next}
          setPage={setPage}
        />
      }

      {!fetching &&
        !error &&
        data.characters.results.map((res: Character, index: number) => {
          return <CharacterCard key={index} {...res} />;
        })
      }

      {!fetching &&
        !error && 
        <PageNavigator
          prev={data.characters.info.prev}
          next={data.characters.info.next}
          setPage={setPage}
        />
      }

      {!fetching &&
        !error &&
         <TopButton />
      }
    </MainWrapper>
  );
};

export default CharacterCardList;
