import { Article } from "@/pages/Article";
import { CreateArticle } from "@/pages/CreateArticle";
import { Favorites } from "@/pages/Favorites";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { createBrowserRouter } from "react-router-dom";

const { ARTICLES, CREATE_ARTICLE, FAVORITES, HOME, PROFILE, SIGNIN, SIGNUP } =
  PAGE_ROUTES;

export const router = (isAuthenticated: boolean) =>
  createBrowserRouter([
    {
      path: SIGNIN,
      element: <SignIn />,
    },
    {
      path: SIGNUP,
      element: <SignUp />,
    },
    {
      element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: ARTICLES,
          element: <Article />,
        },
        {
          path: CREATE_ARTICLE,
          element: <CreateArticle />,
        },
        {
          path: FAVORITES,
          element: <Favorites />,
        },
        {
          path: HOME,
          element: <Home />,
        },
        {
          path: PROFILE,
          element: <Profile />,
        },
      ],
    },
    {
      path: "*",
      element: <div>Not found</div>,
    },
  ]);
