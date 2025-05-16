import { Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppBar } from "./components";
import { MainPage, LoginPage, RegistrationPage, ProfilePage, RecipesPage, RecipePage, ChallengesPage, UserRatingPage, ChallengePage } from "../pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Stack justifyContent={"center"} alignItems={"center"} sx={{ minHeight:"calc(100vh - 64px)", width: "100%" }}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/challenges/:id" element={<ChallengePage />} />
          <Route path="/rating" element={<UserRatingPage />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
};

export default App;