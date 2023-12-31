import express from "express";
import 'express-async-errors';
import { json } from "body-parser";
import cookieSession from 'cookie-session';

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler,NotFoundError } from "ark-commons";

const app = express();
app.set('trust proxy', true); // aware of proxy nginx and trust https
app.use(json());
app.use(
  cookieSession({
    signed: false, // no encryption, JWT is already
    secure: process.env.NODE_ENV !== 'test' // need https connection, test is not https
  })
)

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req,res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app};