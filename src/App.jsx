import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import { LinkProvider } from "./LinksContext";

export default function App() {
  return (
    <Router>
      <LinkProvider>
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
      </LinkProvider>
    </Router>
  );
}
