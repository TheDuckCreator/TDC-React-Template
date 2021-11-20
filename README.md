# TDC React Template

![FileSize](https://img.shields.io/github/repo-size/TheDuckCreator/TDC-React-Template)

React-Redux-Express-Liff Bootstraping Template (Frontend and Backend) for The Duck Creator in 2021. Including

TDC Main Color `#10ceab`

### Frontend

- **React** from [Create-React-App](https://create-react-app.dev) and **Redux** with [React-Redux](https://react-redux.js.org/) with Redux Thunk and [redux-logger](https://github.com/LogRocket/redux-logger)
- **Style Sheet and UI** [TailwindCSS](https://tailwindcss.com/) as CSS and [Ant Design](https://ant.design/) as UI Component Library
- **Framwork** [Line Front-end Framework (LIFF)](https://developers.line.biz/en/docs/liff/) v2 That you can create app with Line Login and another Line Integration here.
- **Icon** Fontawesone on [React Fontawesone](https://github.com/FortAwesome/react-fontawesome)
- **Meta Tag Manager** with [React Helmet](https://github.com/nfl/react-helmet)
- **Router** with [React-router](https://reactrouter.com/)
- **Timing** with [Dayjs](https://day.js.org/)

### Backend

- **Runtime** with [Express](http://expressjs.com/) and REST API (inside folder `src/Server`) that you can written in ES6 Styles because we have babel transfrom runtime
- **Database** with [Mongoose](https://github.com/Automattic/mongoose) to modify your database on MongoDB
- **Utility** with CORS, Body-parser

### Collaborator

- **Running Tools** with [Concurrently](https://github.com/kimmobrunfeldt/concurrently) and [Nodemon](https://github.com/remy/nodemon)
- **Utility** with [Lodash](https://github.com/lodash/lodash) and [Moment.js](https://github.com/moment/moment) on both frontend and backend
- **API Calling** with [SWR](https://swr.vercel.app/) (stale-white-revalidate)

## Running

To Using it clone this repository and install our dependencies with

        npm install

While you want to start project run this command

        npm run dev

Project will run on Port **3000** and backend will run on Port **7000**

it will run concurently backend and fontends. Edit our config file at `src\config.json` and continues editing `src/App.js` for frontend and `src/Server/index.js` for backend
