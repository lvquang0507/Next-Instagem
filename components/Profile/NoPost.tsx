import React from "react";

type Props = {};

const NoPost = (props: Props) => {
    return (
        <div className="my-[60px] mx-[44px] flex flex-col items-center leading-[18px]">
            <div>
                <div className="share-photo-phone" />
            </div>
            <div className="text-[28px] font-light my-[24px] leading-[32px]">
                Share Photos
            </div>
            <div className="mb-[24px] text-[14px] font-normal text-center">
                When you share photos, they will appear on your profile.
            </div>
            <button className="font-semibold text-[14px] text-buttonActive">
                Share your first photo
            </button>
        </div>
    );
};

export default NoPost;
