import React, { FC } from "react";
import Image from "next/image";
import Heart from "../public/images/heart.svg";
import ChevronDown from "@public/images/chevron-down.svg";
import Following from "@public/images/following.svg";
import Favorite from "@public/images/favorite.svg";
import Option from "@public/images/option.svg";
import AddFriends from "@public/images/add-friends.svg";
import Close from "@public/images/close.svg";

type Props = {
    logo?: boolean;
    displayUserName?: boolean;
    notification?: boolean;
    addFriends?: boolean;
    options?: boolean;
    displayCloseBtn?: boolean;
    displayTitle?: boolean;
    title?: string;
};

const Header: FC<Props> = ({
    logo = false,
    displayUserName = false,
    notification = false,
    addFriends = false,
    options = false,
    displayCloseBtn = false,
    displayTitle = false,
    title,
}) => {
    return (
        <div className="fixed w-full !z-[5] px-4 h-[44px] bg-white">
            <div className="before:absolute before:left-0 before:right-0 before:bg-[#dbdbdb] before:h-[1px] before:bottom-[-1px] h-full">
                <div className="flex flex-row items-center justify-between h-full">
                    {logo && (
                        <div className="flex">
                            <Image
                                src="/images/instagram-logo.png"
                                width={103}
                                height={29}
                                alt="logo"
                            />
                            <div className="p-2">
                                <ChevronDown />
                            </div>
                        </div>
                    )}
                    {options && (
                        <div>
                            <Option />
                        </div>
                    )}
                    {displayUserName && (
                        <div className="flex items-center">
                            <div className="font-semibold">
                                she_healed_everything
                            </div>
                            <div className="p-2">
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </div>
                    )}
                    {notification && (
                        <div className="relative mr-2">
                            <Heart />
                            <div className="absolute top-[-1px] right-[-2px] w-[11px] h-[11px] rounded-full bg-redBadge border-solid border-[1.5px] border-white"></div>
                        </div>
                    )}
                    {addFriends && (
                        <button className="p-2">
                            <AddFriends />
                        </button>
                    )}
                    {displayCloseBtn && (
                        <div>
                            <Close />
                        </div>
                    )}
                    {displayTitle && (
                        <div className="font-semibold ">{title}</div>
                    )}
                    {displayTitle && <div className="w-[24px]"></div>}
                </div>
            </div>
            {logo && (
                <div className="z-10 bg-white absolute top-[40px] left-4 rounded-md drop-shadow-md hidden">
                    <div className="flex items-center px-4 py-2 h-[44px] justify-between">
                        <div className="font-normal text-normal">Following</div>
                        <div className="ml-3">
                            <Following />
                        </div>
                    </div>
                    <div className="flex border-t-[1px] border-inputBorder px-4 py-2 items-center h-[44px] justify-between">
                        <div>Favorite</div>
                        <div className="ml-3">
                            <Favorite />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
