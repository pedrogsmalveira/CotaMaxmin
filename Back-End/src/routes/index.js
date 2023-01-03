import express from "express";

import cotas from "./cotasRoutes.js";

const routes = (app) => {
    app.use(
        express.json(),
        cotas
    );
};

export default routes;