import { Router } from "express";

import createUser from "../controllers/user/create-user";
import getUser from "../controllers/user/get-user";

const router = Router();

router.post("/login", getUser);
router.post("/sign-up", createUser);

export default router;
