import React from "react";
import BottomNavbar from "../BottomNavbar";
import PostItem from "../Post/PostItem";

type Props = {};

const SavedPost = (props: Props) => {
    return (
        <div>
            <div className="text-[12px] leading-4 font-normal text-142 m-4 text-center">
                Only you can see what you&#39;ve saved
            </div>
            <div className="grid grid-cols-3 gap-[3px] pb-[40px] relative">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
};

export default SavedPost;
