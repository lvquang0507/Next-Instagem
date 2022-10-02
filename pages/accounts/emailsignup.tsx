import React from "react";
import AppDownloadFooter from "../../layouts/AppDownloadFooter";
import Image from "next/image";
import { FacebookFilled } from "@ant-design/icons";

type Props = {};

function EmailSignUp({}: Props) {
    return (
        <AppDownloadFooter>
            <div className="py-[10px] flex flex-col items-center px-5">
                <div className="color-bar h-[3px] left-0 fixed right-0 top-0 z-10"></div>
                <div className="mb-3 mt-9 max-h-[51px]">
                    <Image
                        className="object-contain"
                        src="/images/instagram-logo.png"
                        width={175}
                        height={51}
                        alt="logo"
                    />
                </div>
                <div>
                    <form className="max-w-[350px] flex flex-col items-center">
                        <h2 className="mx-10 mb-[10px] text-[17px] leading-5 font-semibold text-textGray text-center">
                            Sign up to see photos and videos from your friends.
                        </h2>
                        <div className="mx-10 my-2 ">
                            <button className="bg-buttonActive px-[9px] py-[5px] rounded flex flex-row items-center border-[1px] border-solid border-transparent w-[270px] justify-center">
                                <FacebookFilled className="mr-2 text-white" />
                                <span className="text-sm font-semibold text-white leading-[18px]">
                                    Log in with Facebook
                                </span>
                            </button>
                        </div>
                        <div className="text-[13px] font-semibold text-textGray flex flex-row mt-[10px] mb-[18px] mx-10 w-[270px]">
                            <div className="dash"></div>
                            <span className="mx-[18px]">OR</span>
                            <div className="dash"></div>
                        </div>
                        <div className="flex flex-col gap-y-[3px] w-[270px] mx-10">
                            <input
                                type="text"
                                placeholder="Mobile Number or Email"
                                className="input-instagem"
                            />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input-instagem"
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                className="input-instagem"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-instagem"
                            />
                        </div>
                        <p className="mx-10 my-[10px] text-[12px] text-textGray text-center">
                            By signing up, you agree to our Terms & Privacy
                            Policy.
                        </p>
                        <button className="button-instagem">Sign up</button>
                    </form>
                    <div className="mt-[65px] text-center text-[14px] mb-[25px]">
                        Have an account? Log in
                    </div>
                </div>
            </div>
        </AppDownloadFooter>
    );
}

export default EmailSignUp;
