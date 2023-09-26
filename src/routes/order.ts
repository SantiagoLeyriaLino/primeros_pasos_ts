import { Router } from "express";
import { getOrders } from "../controllers/order";

const router = Router()

router.get('/',getOrders)
export {router}