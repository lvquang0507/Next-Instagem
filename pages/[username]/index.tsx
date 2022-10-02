import React from "react";
import BottomNavbar from "@components/BottomNavbar";
import Header from "@components/Header";
import Profile from "@components/Profile/Profile";
import Modal from "@layouts/Modal/Modal";
import Head from "next/head";
import Overlay from "@layouts/Modal/Overlay";
import LoadingBar from "@components/LoadingBar";

type Props = {};

const ProfilePage = (props: Props) => {
    return (
        <div className="relative h-screen">
            <Head>
                <title>? (@she_healed_everything)</title>
                {/* <link
                    rel="icon"
                    sizes="192x192"
                    href="/images/instagram-fav.png"
                /> */}
            </Head>
            {/* <Overlay>
                <Modal />
            </Overlay> */}
            {/* <LoadingBar /> */}
            <Header displayUserName={true} addFriends={true} options={true} />
            <Profile />
            <BottomNavbar />
        </div>
    );
};

export default ProfilePage;
