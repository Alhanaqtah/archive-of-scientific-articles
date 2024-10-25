# Archive of Scientific Articles

## HOW TO INSTALL
Open your terminal and type `git clone https://github.com/Alhanaqtah/archive-of-scientific-articles.git`

Go to `archive-of-scientific-articles/client` and run `npm install`. This will install all dependencies for client side.

After that go to `archive-of-scientific-articles/server` and run `npm install`.

**This is it. Now you are ready to start the app!**

## HOW TO START THE APP
Go to `archive-of-scientific-articles/client` and run `npm run dev`. This will start dev server for client.

After that go to `archive-of-scientific-articles/server` and run `npm run start:dev`. This will start dev server for server.

After that go to __http://localhost:5173__.

## API
### Authentication
- ```POST   /auth/login {email, password} -> UUID```
- ```POST   /auth/sing-up {name, surname, email, password} -> UUID```

### Articles
- ```GET    /articles?page=1&limit=10 (Opt.: q)```
- ```GET    /articles/{UUID} -> [title, annotation, blob, author, sci_area, keywords[]]```
- ```POST   /articles        -> [title, annotation, blob, author, sci_area, keywords[]] -> UUID```
- ```PATCH  /articles/{UUID} -> [title, annotation, blob, author, disciplines, keywords[]]```
- ```DELETE /articles/{UUID}```

### Favorites
- ```GET    /favorites/{UUID}?page=1&limit=10 (Opt.: q -> article[]```
- ```POST   /favorites/{UUID}/article/{UUID}```

### Users
- ```GET    /users/{UUID}```

### Comments
- ```GET    /comments/{ARTICLE_UUID} -> comments[]```
- ```POST   /comments/{ARTICLE_UUID} -> [author, text, creates_at]```
