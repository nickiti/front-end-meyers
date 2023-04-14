import './App.css';
 
import Home from './components/Home'
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import StoreContainer from './components/StoreContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<StoreContainer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
    }

export default App;
