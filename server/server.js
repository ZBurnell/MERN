const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

// //Dependencies for Express
// const express = require('express');
// const path = require('path');
// const db = require('./config/connection');

// //Dependencies for starting the apollo server
// const { ApolloServer } = require("apollo-server-express");
// const { authMiddleware } = require("./utils/auth");
// const { typeDefs, resolvers } = require('./schemas');

// //Telling express which port to run on
// const app = express();
// const PORT = process.env.PORT || 3001;

// //Apollo server middleware and starting server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers, 
//   context: authMiddleware,
//   persistedQueries: false, 
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// const startServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });
// };

// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`Server now running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
//   });
// });

// startServer(typeDefs, resolvers);
