import { Routes,Route } from "react-router-dom";
import HomePage from "./HomePage";
import ReactPage from "./ReactPage";
import HeaderPage from "./HeaderPage";


function App() {
  return (
    <>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
