import Image from "next/image";
import React from "react";

type Props = {};

const Modal = (props: Props) => {
    return (
        <div className="z-[11] h-full grid place-items-center">
            <div className="flex flex-col items-center justify-center bg-white w-[calc(100%-88px)] rounded-xl ">
                <div className="relative mb-3 mt-9">
                    <Image
                        src="/images/instagram-logo.png"
                        width={175}
                        height={51}
                        alt="logo"
                    />
                </div>
                <form className="w-full px-4">
                    <input
                        className="w-full mb-[6px] input-instagem"
                        type="text"
                        placeholder="Phone number, username, or email"
                    />
                    <input
                        className="w-full mb-[6px] input-instagem"
                        type="password"
                        placeholder="Password"
                    />
                    <div className="flex items-center justify-start my-3">
                        <input
                            className="absolute left-[-9999px]"
                            type="checkbox"
                        />
                        <div className="border-[1px] rounded-[3px] inline-block h-4 w-4 border-inputBorder  mr-2 ml-[3px]"></div>
                        <div className="text-[12px] text-38">
                            Save login info
                        </div>
                    </div>
                    <button className="!mt-3 !mb-2 !mx-0 button-instagem">
                        Log in
                    </button>
                </form>
                <div className="mt-[6px] mb-[22px] text-[14px] font-normal">
                    Forgot password?
                </div>
            </div>
        </div>
    );
};

export default Modal;
