// import logo from './logo.svg';
// import './App.css';

// import Header from "./components/Header";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import{routePath, routPath} from './routes/route';
import AllPosts from "./pages/AllPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>}/>
        <Route path={routePath.create} element={<CreatePost/>}/>
        <Route path={routePath.posts} element={<AllPosts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
