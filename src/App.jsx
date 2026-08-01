import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import { LinkProvider } from "./LinksContext";
import { DetailsProvider } from "./DetailsContext";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./authProvider";
import PublicPreview from "./PublicPreview";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <LinkProvider>
          <DetailsProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<CreateAccount />} />
              <Route
                path="/"
                element={
                  <div className="font-instrument min-h-screen bg-lighter-gray">
                    <PrivateRoute>
                      <Header />
                    </PrivateRoute>
                  </div>
                }
              />
              <Route
                path="/preview"
                element={
                  <PrivateRoute>
                    <Preview />
                  </PrivateRoute>
                }
              />
              <Route path="/preview/:uid" element={<PublicPreview />} />
            </Routes>
          </DetailsProvider>
        </LinkProvider>
      </AuthProvider>
    </Router>
  );
}
