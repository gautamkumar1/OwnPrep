require('dotenv').config();
const express = require('express');
const authRoute = require('./routes/auth-router');
const contactRoute = require('./routes/contact-router')
const serviceRoute = require('./routes/service-router')
const adminRoute = require('./routes/admin-route')
const connectDb = require('./utils/Db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require('cors');
const app = express();

/* 
 * Middleware for parsing application/json
 
*/
// Lets takle cors policy settings
const corsOptions = {
  origin: "https://ownprep.onrender.com",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use('/api/auth',authRoute)
app.use("/api/from",contactRoute);
app.use("/api/data", serviceRoute);
// admin routes
app.use("/api/admin",adminRoute);

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000;
// it return promise 
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});