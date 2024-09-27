import { Article } from "@/pages/Article";
import { CreateArticle } from "@/pages/CreateArticle";
import { Favorites } from "@/pages/Favorites";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import {
  ARTICLES_PAGE_ROUTE,
  CREATE_ARTICLE_PAGE_ROUTE,
  FAVORITES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  SIGNIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from "@/shared/utils/constants";

export const roteMap = [
  {
    path: ARTICLES_PAGE_ROUTE,
    element: <Article />,
  },
  {
    path: CREATE_ARTICLE_PAGE_ROUTE,
    element: <CreateArticle />,
  },
  {
    path: FAVORITES_PAGE_ROUTE,
    element: <Favorites />,
  },
  {
    path: HOME_PAGE_ROUTE,
    element: <Home />,
  },
  {
    path: PROFILE_PAGE_ROUTE,
    element: <Profile />,
  },
  {
    path: SIGNIN_PAGE_ROUTE,
    element: <SignIn />,
  },
  {
    path: SIGNUP_PAGE_ROUTE,
    element: <SignUp />,
  },
];
