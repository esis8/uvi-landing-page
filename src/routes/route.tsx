import { NextPage } from "next";
import Home from "@/pages";
import About from "@/pages/about";
import Planes from "@/pages/planes";

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
    {
        path: '/planes',
        component: Planes,
    },
];

export default routes;