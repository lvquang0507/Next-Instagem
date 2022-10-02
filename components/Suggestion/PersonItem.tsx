import Image from "next/image";
import React, { FC } from "react";

type Props = {
    verified: boolean;
};

const PersonItem: FC<Props> = ({ verified }) => {
    return (
        <div className="flex flex-row items-center justify-between px-4 py-2">
            <div className="flex flex-row items-center">
                <div className="flex items-center">
                    <Image
                        src="https://source.unsplash.com/random"
                        className="rounded-full"
                        width={44}
                        height={44}
                        alt="profile-picture"
                    />
                </div>
                <div className="text-[14px] ml-[12px] leading-[18px] ">
                    <div className="flex items-end font-semibold">
                        webchethow
                        {verified && (
                            <span className="ml-1 translate-y-[2px]">
                                <Image
                                    src="/images/verified.png"
                                    width={12}
                                    height={12}
                                    alt="Verified"
                                />
                            </span>
                        )}
                    </div>
                    <div className="text-142">web cho the</div>
                    <div className="text-[12px] text-142">popular</div>
                </div>
            </div>
            <button className="small-button">Follow</button>
        </div>
    );
};

export default PersonItem;
