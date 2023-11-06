const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

const mongoose =  require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/real_estate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.listen(8000, function() {
    console.log('Server is running')
});

const userRouter = require('./routes/user.route');
app.use("/api/user", userRouter);

const authRouter = require('./routes/auth.route.js');
app.use('/api/auth', authRouter);