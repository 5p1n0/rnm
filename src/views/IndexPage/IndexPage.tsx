/**
 * Main page
 * 
 * @remarks The header with a navbar and a hero image 
 */

import { Outlet } from "react-router-dom";
import { TitleWrapper } from "@components/wrappers/index";
import { HeroBanner } from "@components/HeroBanner/HeroBanner";
import { Header } from "@components/Header/Header";

const IndexPage = () => {
  return (
    <>
      <Header />

      <TitleWrapper>
        <HeroBanner />
      </TitleWrapper>

      <Outlet />
    </>
  );
};

export default IndexPage;
