import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import { LinkProvider } from "./LinksContext";
import { DetailsProvider } from "./DetailsContext";

export default function App() {
  return (
    <Router>
      <LinkProvider>
        <DetailsProvider>
          <Routes>
            <Route
              path="/"
              element={
                <div className="font-instrument bg-lighter-gray min-h-screen">
                  <Header />
                </div>
              }
            />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </DetailsProvider>
      </LinkProvider>
    </Router>
  );
}
