import Image from "next/image";
import React from "react";
import Post from "@public/images/Post/post.svg";
import Feed from "@public/images/Feed/feed.svg";
import Saved from "@public/images/Saved/saved.svg";
import Tagged from "@public/images/Tagged/tagged.svg";
import NoPost from "./NoPost";
import SavedPost from "./SavedPost";

type Props = {};

const Profile = (props: Props) => {
    return (
        <div className="absolute top-[44px] pt-4 max-h-[calc(100vh-93px)] overflow-y-scroll">
            <header className="flex flex-row mx-4 mb-[24px]">
                <div className=" flex !w-[77px] h-[77px] items-center relative">
                    <Image
                        src="https://source.unsplash.com/random"
                        className="rounded-full"
                        alt="avatar"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
                <section className="flex flex-col gap-y-[13px] ml-[28px] ">
                    <div className="w-[250px] overflow-x-hidden">
                        <h2 className="text-[28px] font-light text-38 !text-ellipsis whitespace-nowrap leading-[32px] overflow-x-hidden overflow-y-hidden">
                            why this is not ellipsis abc xuz
                        </h2>
                    </div>
                    <div className="rounded border-inputBorder border-[1px] text-[14px] font-semibold flex items-center justify-center px-[9px] py-[5px] leading-[18px]">
                        <button>Edit profile</button>
                    </div>
                </section>
            </header>
            <div className="px-4 pb-[21px] text-[14px] font-normal leading-[18px]">
                <div className="font-semibold">what will become of me</div>
                <div>Infinite sky</div>
            </div>
            <ul className="flex flex-row justify-around py-3 border-t-[1px] border-inputBorder text-center">
                <li className="w-[33.33%]">
                    <div className="flex flex-col items-center text-[14px] leading-[18px]">
                        <span className="font-semibold">0</span>
                        <span className="text-142">posts</span>
                    </div>
                </li>
                <li className="w-[33.33%]">
                    <div className="flex flex-col items-center text-[14px] leading-[18px]">
                        <span className="font-semibold">0</span>
                        <span className="text-142">followers</span>
                    </div>
                </li>
                <li className="w-[33.33%]">
                    <div className="flex flex-col items-center text-[14px] leading-[18px]">
                        <span className="font-semibold">0</span>
                        <span className="text-142">following</span>
                    </div>
                </li>
            </ul>
            <div className="flex flex-row items-center justify-center border-[1px] border-t-inputBorder border-b-142">
                <div className="w-[25%] h-[44px] flex items-center justify-center">
                    <Post />
                </div>
                <div className="w-[25%] h-[44px] flex items-center justify-center">
                    <Feed />
                </div>
                <div className="w-[25%] h-[44px] flex items-center justify-center">
                    <Saved />
                </div>
                <div className="w-[25%] h-[44px] flex items-center justify-center">
                    <Tagged />
                </div>
            </div>
            {/* <NoPost /> */}
            <SavedPost />
        </div>
    );
};

export default Profile;
