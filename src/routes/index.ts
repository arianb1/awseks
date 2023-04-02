import express from "express";
import createPublicRouter from "./publicRouter";
import PublicController from "../controllers/PublicController";
import PublicService from "../services/PublicService";
//import { Connection } from "typeorm";


export function createRoutes() {
    const router = express.Router();

    const pubService: PublicService = new PublicService();
    const pubController: PublicController = new PublicController(pubService);

    router.use('/', (req, res, next) => { res.status(200).json("Success: home route") });
    router.use('/public', createPublicRouter(pubController));
    router.get('/test', (req, res, next) => { res.status(200).json("success from test route") });
    return router;
};