import TVShowsList from "./components/tvShowsList";
import "./App.css";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // return <TVShowsList />;
  // return <ShowDetails />;
  <BrowserRouter>
    <Routes>
      <Route path="/tv-shows" element={<TVShowsList />}>
      <Route path="/tv-shows/details/" element={<ShowDetails />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
