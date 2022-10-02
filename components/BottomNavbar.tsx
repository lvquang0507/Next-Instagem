import React from "react";
import Home from "@public/images/Home/home-unfilled.svg";
import Search from "@public/images/Search/search-unfilled.svg";
import NewPost from "@public/images/NewPost/new-post-unfilled.svg";
import Send from "@public/images/Send/send-unfilled.svg";
import Image from "next/image";

type Props = {};

function BottomNavbar({}: Props) {
    return (
        <div className="h-[49px] fixed left-0 right-0 bottom-0 flex flex-row justify-evenly items-center border-t-[1px] border-inputBorder !z-[5] bg-white">
            <div className="p-3 w-[56px]">
                <Home />
            </div>
            <div className="p-3 w-[56px]">
                <Search />
            </div>
            <div className="p-3 w-[56px]">
                <NewPost />
            </div>
            <div className="p-3 w-[56px]">
                <Send />
            </div>
            <div className="p-3 w-[56px] flex items-center ">
                <span className="rounded-full ring-2 ring-38 w-[24px] h-[24px] ring-offset-[0.5px]">
                    <Image
                        src="https://source.unsplash.com/random"
                        className="rounded-full"
                        width={24}
                        height={24}
                        alt="profile"
                    />
                </span>
            </div>
        </div>
    );
}

export default BottomNavbar;
