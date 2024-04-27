import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Leaderboard from "./components/LeaderBoard";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";

//uncomment the api-link and all the project-IDs in the quiz-component,appwrite.jsx and appwriteConfig.jsx

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>

        </Routes>

      </AuthProvider>
      
    </Router>
  );
}

export default App;
