require('dotenv').config();
const express = require('express');
const authRoute = require('./routes/auth-router');
const contactRoute = require('./routes/contact-router')
const connectDb = require('./utils/Db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require('cors');
const app = express();

/* 
 * Middleware for parsing application/json
 
*/
// Lets takle cors policy settings
const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET,POST,PUT, DELETE, PATCH,HEAD",
  Credential: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth',authRoute)
app.use("/api/from",contactRoute);

app.use(errorMiddleware)

const PORT = 5000;
// it return promise 
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});