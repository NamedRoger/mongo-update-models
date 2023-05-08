import { Router } from "../../deps.ts";

const collectionRouter = new Router();

export default function collectionRoutes({ router }: { router: Router }) {
    router.use('/collections', collectionRouter.routes());
}