import React from "react";

type Props = {};

function Footer({}: Props) {
    return (
        <div className="mb-[35px] text-[12px] font-normal text-textGray px-4 mt-10">
            <div className="flex flex-wrap items-stretch justify-center gap-x-4 gap-y-[6px]">
                <div>Meta</div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Help</div>
                <div>API</div>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Top Accounts</div>
                <div>Hashtags</div>
                <div>Locations</div>
                <div>Instagram Lite</div>
                <div>Contact Uploading & Non-Users</div>
            </div>
            <div className="flex flex-row gap-x-4 mt-[6px] justify-center">
                <div>Dance</div>
                <div>Food & Drink</div>
                <div>Home & Garden</div>
                <div>Music</div>
                <div>Visual Arts</div>
            </div>
            <div className="flex flex-row justify-center my-3 gap-x-4">
                <div>English</div>
                <div>2022 Instagem from Meta</div>
            </div>
        </div>
    );
}

export default Footer;
