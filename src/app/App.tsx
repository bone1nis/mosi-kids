import { Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppBar } from "./components";
import { MainPage, LoginPage, RegistrationPage, ProfilePage, RecipesPage, RecipePage, ChallengesPage, UserRatingPage } from "../pages";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppBar />
      <Stack justifyContent={"center"} alignItems={"center"} sx={{ minHeight: "92vh", width: "100%" }}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/rating" element={<UserRatingPage />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
};

export default App;