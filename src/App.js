import React, { createContext, useState } from 'react';
import {BrowserRouter ,Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import UserDetails from './components/UserPostDetails/UserPostDetails';
import NotFount from './components/NotFount/NotFount';
import User from './components/UserPost/UserPost';

export const PostContext = createContext();

function App() {
  const [posts,setPosts] = useState([]);
  return (
    <PostContext.Provider value={[posts,setPosts]}>
    <BrowserRouter>
      <div style={{backgroundColor:"#a3c2c2"}}> 
        
        <Header/>
        <Switch>
          <Route exact path="/post/details/:postId" component={UserDetails} />
          <Route exact path="/" component={User} />
          <Route exact path="*" component={NotFount} />
        </Switch>
      </div>
    </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
