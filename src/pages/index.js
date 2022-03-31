import React from "react"
import Header from "@components/shared/Header";
import { Router } from '@reach/router';
import GeneralContext from "@configs/context";
import ProgramacaoPage from "@components/pages/ProgramacaoPage";
import { LANGUAGES_TEXTS } from "@configs/languages";

import '@vendor/bootstrap-grid.min.css'
import '@sass/_global.scss';

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
);

const Home = ({ text }) => <h2>{text.LANDING_PAGE_TITLE}</h2>;

const IndexPage = () => {

  return (
    <GeneralContext.Consumer>
      {({ state }) => (
        <div id="app">
          <Header />
          <Router>
            <Home path="/" text={LANGUAGES_TEXTS[state.languageId]} />
            <LazyComponent Component={ProgramacaoPage} path="/programacao" />
            {/* <LazyComponent Component={About} path="about-us" /> */}
          </Router>
        </div>
      )}
    </GeneralContext.Consumer>
  )
}

export default IndexPage;
