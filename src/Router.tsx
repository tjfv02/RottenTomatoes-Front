import { Route, Routes } from "react-router-dom";
import PublicRoute from "./components/routes/PublicRoute";
import AuthLogin from "./pages/Auth/AuthLogin";
import AuthRegister from "./pages/Auth/AuthRegister";
import { BadLoginPage } from "./pages/errors/BadLogin";
import RegisterConfirm from "./pages/screens/RegisterConfirm";
import PrivateRoute from "./components/routes/PrivateRoute";
import NotFoundPage from "./pages/screens/NotFoundPage";
import AccessDenied from "./pages/screens/AccessDenied";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import MoviePage from "./pages/MoviePage";
import SearchResult from "./pages/SearchResult";
import MovieDetails from "./components/MovieDetails";

export const AppRouter: React.FC<object> = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/Login" element={<AuthLogin />} />
        <Route path="/SignUp" element={<AuthRegister />} />
        <Route path="/BadLogin" element={<BadLoginPage />} />
        <Route path="/SuccessfulSignUp" element={<RegisterConfirm />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="MoviesPage" element={<MoviePage />} />
          <Route path="Search" element={<SearchResult />} />

          <Route path="/movie/:id" element={<MovieDetails />} />

        </Route>

      </Route>

      <Route path="/AccessDenied" element={<AccessDenied />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
