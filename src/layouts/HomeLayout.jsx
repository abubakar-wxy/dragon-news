import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Header />
                <section className="w-11/12 mx-auto my-3">
                    <LatestNews />
                </section>
                <nav className="w-11/12 mx-auto my-3">
                    <NavBar />
                </nav>
            </header>
            <main className="w-11/12 mx-auto my-3  grid grid-cols-12 gap-5">
                <aside className="col-span-3 sticky top-0 h-fit">
                    <LeftAside />
                </aside>

                <section className="main col-span-6">
                    {state === "loading" ? <Loading/> : <Outlet></Outlet>}
                </section>
                <aside className="col-span-3 sticky top-0 h-fit">
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
