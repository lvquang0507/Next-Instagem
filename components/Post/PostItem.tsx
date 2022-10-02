import Image from "next/image";
import React from "react";
import Stack from "@public/images/Post/stack.svg";

type Props = {};

const PostItem = (props: Props) => {
    return (
        <div className="w-full aspect-square">
            <div className="relative w-full h-full">
                <Image
                    src="https://source.unsplash.com/random"
                    layout="fill"
                    alt="image"
                />
                <div className="absolute top-0 right-0 m-2">
                    <Stack />
                </div>
            </div>
        </div>
    );
};

export default PostItem;
