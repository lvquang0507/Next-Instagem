import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import Profile from "../components/Profile/Profile";
import Suggestion from "../components/Suggestion/Suggestion";

type Props = {};

const Home = (props: Props) => {
    return (
        <div className="h-screen">
            <Header logo={true} displayUserName={false} />
            <BottomNavbar />
        </div>
    );
};

export default Home;
