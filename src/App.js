import React, { Suspense } from "react";
import MainLayout from "./modules/main";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import CustomTheme from "./theme";
import { SWRConfig } from "swr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListHeading from "./modules/common/heading/ListHeading";
import List from "./modules/list";
import ListError from "./modules/list/error";
import Details from "./modules/details";
import DetailsError from "./modules/details/error";
import SuspenseFallback from "./modules/common/SuspenseFallback";
import ErrorBoundary from "./modules/common/ErrorBoundary";

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <Router>
        <ThemeProvider theme={CustomTheme}>
          <CSSReset />
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <ListHeading
                  title="Marvel characters list"
                  subtitle="Browse details and add to your favorites"
                />
                <ErrorBoundary fallback={<ListError />}>
                  <Suspense fallback={<SuspenseFallback />}>
                    <List />
                  </Suspense>
                </ErrorBoundary>
              </Route>
              <Route path="/details/:id">
                <ErrorBoundary fallback={<DetailsError />}>
                  <Suspense fallback={<SuspenseFallback />}>
                    <Details />
                  </Suspense>
                </ErrorBoundary>
              </Route>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </Router>
    </SWRConfig>
  );
}

export default App;
