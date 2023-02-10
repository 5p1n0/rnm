/**
 * 404 error page
 * 
 * @returns 404 page
 */

import { Header } from "@components/Header/Header";
import { MainWrapper } from "@components/wrappers/index";
import { ErrorBlock } from "@components/ErrorBlock/ErrorBlock";
import { MortyFace } from "@assets/MortyFace/MortyFace";

const NotFound = () => {
  return (
    <>
      <Header />

      <MainWrapper>
        <ErrorBlock message="&lsquo;Geez, oh - oh...&rsquo;">
          <MortyFace />
        </ErrorBlock>
      </MainWrapper>
    </>
  );
};

export default NotFound;
