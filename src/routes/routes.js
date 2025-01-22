import { Router } from "express";

import userRouter from "./user.routes.js"
import bootcampRouter from "./bootcamp.routes.js" 
import authRouter from "./auth.routes.js"
import viewRoutes from "./view.routes.js"

const router = Router();

router.use("/users", userRouter);
router.use("/bootcamp", bootcampRouter);
router.use("/user", authRouter );
router.use("", viewRoutes);


export default router
