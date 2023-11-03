import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview from "./Preview";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-lighter-gray font-instrument">
              <Header />
            </div>
          }
        />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}
