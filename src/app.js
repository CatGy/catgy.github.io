import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import favicon from "serve-favicon";
import logger from "morgan";
import compression from "compression";
import homeRouter from "./server/api/routes/home.js";
import portfolioRouter from "./server/api/routes/portfolio.js";
import contactRouter from "./server/api/routes/contact.js";
import aboutRouter from "./server/api/routes/about.js";

import { URL } from "url";

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
console.log(
  path
    .join(__dirname, "views")
    .substring(1, path.join(__dirname, "views").length)
);
var app = express();

app.use(compression());
// view engine setup
app.set(
  "views",
  path
    .join(__dirname, "views")
    .substring(1, path.join(__dirname, "views").length)
);
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  express.static(
    path
      .join(__dirname, "public")
      .substring(1, path.join(__dirname, "public").length)
  )
);
app.use(
  favicon(
    path
      .join(__dirname, "public", "images", "favicon", "favicon.ico")
      .substring(
        1,
        path.join(__dirname, "public", "images", "favicon", "favicon.ico")
          .length
      )
  )
);

app.use("/", homeRouter);
app.use("/portfolio", portfolioRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("./error");
});

const port = process.env.PORT || 3000;
app.listen(port);

export default app;
