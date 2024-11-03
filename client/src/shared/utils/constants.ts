export const PAGE_ROUTES = {
  ARTICLES: "/articles",
  CREATE_ARTICLE: "/articles/create",
  FAVORITES: "/favorites",
  HOME: "/",
  PROFILE: "/profile",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
} as const;

export const LOCAL_STORAGE_USER_KEY = "user";

export const UPDATE_ARTICLE = "updateArticle"