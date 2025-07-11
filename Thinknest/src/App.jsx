import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import Listblog from './pages/admin/Listblog';
import Newlayout from './components/Newuser/Newlayout';
import Newblog from './components/Newuser/Newblog';
import Comments from './pages/admin/Comments';
import Login from './components/admin/Login';
import Signup from './components/Signup';
import Newprofile from './components/Newuser/Newprofile';
const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userprofile" element={<Newprofile />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/user" element={<Newlayout />}>
          <Route path="addblog" element={<Newblog />} />
        </Route>

        <Route>
          <Route index element={<Dashboard />} />
          <Route path="listblog" element={<Listblog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;