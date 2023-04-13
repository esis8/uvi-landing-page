import { NextPage } from "next";
import Home from "@/pages";
import About from "@/pages/about";

type Route = {
    path: string;
    component: NextPage;
}

const routes: Route[]=[
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
];

export default routes;