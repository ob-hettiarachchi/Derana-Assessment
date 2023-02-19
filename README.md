# Derana-Assessment

## Deployed live preview

Frontend: [https://derana-assessment-ridiyzkul-ob-hettiarachchi.vercel.app/](https://derana-assessment-ridiyzkul-ob-hettiarachchi.vercel.app/)
\
Backend: I coudn't find any free hosting

## GitHub clone or download
```terminal
$ git clone https://github.com/ob-hettiarachchi/Derana-Assessment.git
```

rename **.env.example** file as **.env** and specify your API URL (http://localhost:4000/)
```terminal
REACT_APP_API_URL
```
### Installation and start - frontend
```terminal
$ cd frontend  // go to frontend folder
$ npm i      // npm install packages (If npm i throws an error, try using --legacy-peer-dep flag)
$ npm start  // run it locally

// frontend build
$ npm run build
```

## Server-side usage(PORT: 4000)

### Prepare your secret - server

rename **.env.example** file as **.env** and specify the following variables there,

```terminal
CORS_URL
MONGO_URI
JWT_SECRET
PORT

### Installation and start - backend

```terminal
$ cd backend   // go to backend folder
$ npm i       // npm install packages
$ npm start   // run it locally
```

## Admin user
**Email: admin@admin.com**
\
**Password: admin123**
