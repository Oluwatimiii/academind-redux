import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import HomePage from "../src/pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserProfile from './components/Profile/UserProfile'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
