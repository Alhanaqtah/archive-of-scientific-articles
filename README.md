# Archive of Scientific Articles
### API
#### Authentication
- ```POST   /auth/login {email, password} -> UUID```
- ```POST   /auth/sing-up {name, surname, email, password} -> UUID```

#### Articles
- ```GET    /articles?page=1&limit=10 (Opt.: q)```
- ```GET    /articles/{UUID} -> [title, annotation, blob, author, sci_area, keywords[]]```
- ```POST   /articles        -> [title, annotation, blob, author, sci_area, keywords[]] -> UUID```
- ```PATCH  /articles/{UUID} -> [title, annotation, blob, author, disciplines, keywords[]]```
- ```DELETE /articles/{UUID}```

#### Favorites
- ```GET    /favorites/{UUID}?page=1&limit=10 (Opt.: q -> article[]```
- ```POST   /favorites/{UUID}/article/{UUID}```

#### Users
- ```GET    /users/{UUID}```

#### Comments
- ```GET    /comments/{ARTICLE_UUID} -> comments[]```
- ```POST   /comments/{ARTICLE_UUID} -> [author, text, creates_at]```
