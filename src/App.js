import React, { createContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import UserDetails from './components/UserPostDetails/UserPostDetails';
import NotFount from './components/NotFount/NotFount';
import UserPost from './components/UserPost/UserPost';

export const PostContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#91969e" }}>

        <Header />
        <Switch>
          <Route exact path="/post/details/:postId" component={UserDetails} />
          <Route exact path="/" component={UserPost} />
          <Route exact path="*" component={NotFount} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
