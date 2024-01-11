const express = require("express");
const session = require("express-session");
const app = express();

const http = require("http");
const server = http.createServer(app);

const socketIo = require("socket.io");
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

const isLoggedIn = require("./middlewares/isLoggedIn");

// Navigation

app.get("/", (req, res) => {
  res.redirect("/login");
});

const registrationRoutes = require("./routes/registrationRoutes");
app.use("/", registrationRoutes);

const jobApplicationRoutes= require("./routes/jobApplicationRoutes");
app.use("/", jobApplicationRoutes);

const userRegistrationRoutes = require('./routes/userRegistrationRoutes')
app.use('/', userRegistrationRoutes);

const companyRegistrationRoutes = require('./routes/companyRegistrationRoutes');
app.use('/', companyRegistrationRoutes);

const studentLoginRoutes = require('./routes/loginStudentRoutes');
app.use('/', studentLoginRoutes); 

const companyLoginRoutes = require('./routes/loginCompanyRoutes');
app.use('/', companyLoginRoutes);

const loginRoutes = require('./routes/loginRoute');
app.use("/", loginRoutes);

const companyApplicationsRoutes = require('./routes/companyApplicationsRoutes');
app.use('/', companyApplicationsRoutes);

const uploadJobPostRoutes = require("./routes/uploadJobPostRoutes");
app.use("/", uploadJobPostRoutes);

const companyProfileRoutes = require("./routes/companyProfileRoutes");
app.use("/", companyProfileRoutes);

const uploadRoutes = require("./routes/uploadJobPostRoutes");
app.use("/", isLoggedIn, uploadRoutes);

const chatRoutes = require("./routes/chatRoutes");
app.use("/", isLoggedIn, chatRoutes);

const searchRoutes = require("./routes/searchRoutes");
app.use("/", isLoggedIn, searchRoutes);

const homepageRoutes = require("./routes/homepageRoutes");
app.use("/", isLoggedIn, homepageRoutes);

const messageListRoutes = require("./routes/messageListRoutes");
app.use("/", isLoggedIn, messageListRoutes);

const profileRoutes = require("./routes/profileRoutes");
app.use("/", isLoggedIn, profileRoutes);

const myPostRoutes = require('./routes/myPostRoutes');
app.use('/', isLoggedIn, myPostRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
