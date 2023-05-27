import TVShowsList from "./components/tvShowsList";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // return <TVShowsList />;
  // return <ShowDetails />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tv-shows" element={<TVShowsList />}></Route>
        <Route path="/tv-shows/details/:id" element={<ShowDetails />}></Route>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
