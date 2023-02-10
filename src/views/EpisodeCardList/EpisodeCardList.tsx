/**
 * Episode page
 * 
 * @remarks 
 *  This page contains a search-bar with search and reset buttons,
 *  a list of episode cards with pagination 
 *  and a CTA button near the page end.
 * 
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "urql";
import { MainWrapper, SearchButtonWrapper } from "@components/wrappers/";
import {
  ResetButton,
  SearchButton,
  TopButton,
} from "@components/buttons/index";
import { SearchBar } from "@components/SearchBar/SearchBar";
import { ErrorBlock } from "@components/ErrorBlock/ErrorBlock";
import { FetchSpinner } from "@assets/FetchSpinner/FetchSpinner";
import { EpisodeCard } from "@components/EpisodeCard/EpisodeCard";
import { Episode } from "../../interfaces";
import { RickFace } from "@assets/RickFace/RickFace";
import { PageNavigator } from "@components/PageNavigator/PageNavigator";


const EpisodeCardList = () => {
  // Query filters used for pagination and episode search 
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ name: "" });

  /*
   * Previously selected episode link from a character card
   * 
   * Here i'm using useLocation hook to get the episode name.
   * Also, i'm using history.state.usr with e2e tests 
   * to manually update episode and trigger a query update
   */
  const episode = history.state?.usr ?? useLocation().state;

  // Episode filter update on change 
  useEffect(() => {
    setFilter(episode);
  }, [episode]);

  
  const query = `
    query($page: Int, $filter: FilterEpisode) {
      episodes(page: $page, filter: $filter) {
        info{
          next,
          prev
        },
        results{
          name,
          air_date,
          episode,
          characters {
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
  
  // Update episode and pagination query filters 
  const searchHandler = () => {
    if (inputEl?.current?.value) {
      setFilter({ name: inputEl.current.value });
      setPage(1);
    }
  };

  // Reset episode and pagination query filters
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
          prev={data.episodes.info.prev}
          next={data.episodes.info.next}
          setPage={setPage}
        />
      }

      {!fetching &&
        !error &&
        data.episodes.results.map((res: Episode, index: number) => {
          return <EpisodeCard key={index} {...res} />;
        })
      }

      {!fetching &&
        !error &&
        <PageNavigator
          prev={data.episodes.info.prev}
          next={data.episodes.info.next}
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

export default EpisodeCardList;
