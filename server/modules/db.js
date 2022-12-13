const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://offism:sma01022002@cluster0.iwyiykd.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`MongoDB Connected`.black.bgYellow);
  })
  .catch((err) => {
    console.log(`For any resaons we couldn't connect to the DB`.red, err);
  });
