
import { getAll, create} from '../controllers/user.controller.mjs';
import express from 'express';

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(create);

export default userRouter;
