const express = require("express");
const app = express();
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");
const connectDB = require("./config/db");

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan.underline.bold);
});
