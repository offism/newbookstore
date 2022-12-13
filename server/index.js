const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const db_connection = require("./modules/db");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.cyan.bold.bgGray);
});

// 1.back end papka, front papka addenli
// 2. backda npm init -> kerakli packagelani o'rnatish
// .env faylga qarimiz
// 3. server ko'taramiz expressda -> default middlewarelani o'rnatamiz (express,json,urlencoded:true,cors,helmet...)
// 4. DB connection qilamiz
// 5. Schema yaratamiz(User, tovar, reys, job uchun exetera...)
