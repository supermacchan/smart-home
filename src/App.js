import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "components/Layout/Layout";

const Home = lazy(() => import('./pages/Home/Home'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
