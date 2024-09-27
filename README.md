# archive-of-scientific-articles
### API
- ```POST /auth/login -- email, password```
- ```POST /auth/sing-up -- name, surname, email, password```

- ```GET    /articles?page=1&limit=10 (Opt.: q)```
- ```GET    /articles/{UUID} -> [title, annotation, blob, author, sci_area, keywords[]]```
- ```POST   /articles         : [title, annotation, blob, author, sci_area, keywords[]] -> UUID```
- ```PATCH  /articles/{UUID} -> [title, annotation, blob, author, disciplines, keywords[]]```
- ```DELETE /articles/{UUID}```

- ```GET  /favourites/{UUID}?page=1&limit=10 (Opt.: q -> article[]```
- ```POST /favourites/{UUID}/article/{UUID}```

- ```GET /users/{UUID}```

- ```GET  /comments/{ARTICLE_UUID} -> comments[]```
- ```POST /comments/{ARTICLE_UUID} : [author, text, creates_at]```
