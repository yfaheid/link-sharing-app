import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import { LinkProvider } from "./LinksContext";
import { DetailsProvider } from "./DetailsContext";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function App() {
  return (
    <Router>
      <LinkProvider>
        <DetailsProvider>
          <Routes>
            <Route
              path="/"
              element={
                <div className="font-instrument min-h-screen bg-lighter-gray">
                  <Header />
                </div>
              }
            />
            <Route path="/Preview" element={<Preview />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </DetailsProvider>
      </LinkProvider>
    </Router>
  );
}
