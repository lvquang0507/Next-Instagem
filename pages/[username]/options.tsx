import BottomNavbar from "@components/BottomNavbar";
import Header from "@components/Header";
import React from "react";

const Options = () => {
    return (
        <>
            <Header
                displayTitle={true}
                title="Options"
                displayCloseBtn={true}
            />
            <div className="absolute top-[44px] w-full bg-250">
                <div className="w-full">
                    <h3 className="mx-4 mt-5 mb-2 text-[14px] font-semibold leading-[18px] text-142">
                        ACCOUNT
                    </h3>
                    <div className="px-4 text-38 h-[44px] border-t-[1px] border-inputBorder w-full bg-white flex justify-between items-center">
                        <div>Edit profile</div>
                        <div className="arrow-right-phone"></div>
                    </div>
                    <div className="px-4 text-38 h-[44px] border-t-[1px] border-b-[1px] border-inputBorder w-full bg-white flex justify-between items-center">
                        <div className="text-errorOrDestructive">Log Out</div>
                        <div className="arrow-right-phone"></div>
                    </div>
                </div>
            </div>
            <BottomNavbar />
        </>
    );
};

export default Options;
