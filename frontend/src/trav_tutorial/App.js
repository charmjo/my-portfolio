import logo from './logo.svg';
import { Fragment } from 'react';
import { Posts } from './trav_tutorial/components/posts';
import { PostPage } from './trav_tutorial/components/PostPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route exact path="/post/:id" element={<PostPage />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
