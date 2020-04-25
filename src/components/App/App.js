import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import HomePage from '../HomePage/HomePage'
import PostPage from '../PostPage/PostPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/post/:postId"
          render={(props) => <PostPage {...props}
            postId={props.match.params.postId} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;