
import express from 'express';
const {validateRegistrationBody,validateLoginBody,validateContactBody, validate} = require('./util/validation');
import authController from './controllers/auth.controller';

export default function setRoutes(app) {

const router = express.Router();


 //authRoute
 router.post("/register",validateRegistrationBody(), validate,authController.register);
 router.post("/login", validateLoginBody(), validate, authController.login);

app.use('/', router);
}