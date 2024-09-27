import { Article } from "@/pages/Article";
import { CreateArticle } from "@/pages/CreateArticle";
import { Favorites } from "@/pages/Favorites";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { PAGE_ROUTES } from "@/shared/utils/constants";

const { ARTICLES, CREATE_ARTICLE, FAVORITES, HOME, PROFILE, SIGNIN, SIGNUP } =
  PAGE_ROUTES;

export const roteMap = [
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
  {
    path: SIGNIN,
    element: <SignIn />,
  },
  {
    path: SIGNUP,
    element: <SignUp />,
  },
];
