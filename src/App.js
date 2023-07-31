import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import News from "./components/news/News";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<News category="general" pageSize="6" />} />
        <Route
          path="/business"
          element={<News category="business" pageSize="6" />}
        />
        <Route
          path="/entertainment"
          element={<News category="entertainment" pageSize="6" />}
        />
        <Route
          path="/health"
          element={<News category="health" pageSize="6" />}
        />
        <Route
          path="/science"
          element={<News category="science" pageSize="6" />}
        />
        <Route
          path="/sports"
          element={<News category="sports" pageSize="6" />}
        />
        <Route
          path="/technology"
          element={<News category="technology" pageSize="6" />}
        />
      </Routes>
    </>
  );
}

export default App;
