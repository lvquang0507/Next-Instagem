import React from "react";
import { FacebookFilled } from "@ant-design/icons";

import AppDownloadFooter from "../../layouts/AppDownloadFooter";

type Props = {};

const login = (props: Props) => {
    return (
        <AppDownloadFooter>
            <div className="flex flex-col items-center pt-[46px] px-[60px]">
                <div className="text-4xl font-bold">Instagem</div>
                <form className="flex flex-col mt-[37px] w-full ">
                    <div>
                        <label htmlFor="" className="relative h-9">
                            <span className="input-label">
                                Phone number, username, or email
                            </span>
                            <input
                                type="text"
                                className="mb-2 input-instagem active"
                                placeholder="Phone number, username, or email"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className="relative h-9">
                            <span className="input-label">Password</span>
                            <input
                                type="password"
                                className="input-instagem active"
                                placeholder="Password"
                            />
                        </label>
                    </div>
                    <button className="bg-button rounded px-[9px] py-[5px] text-white text-[14px] font-semibold mt-[15px]">
                        Log in
                    </button>
                </form>
                <div className="flex flex-row w-full mt-[18px]">
                    <div className="dash"></div>
                    <div className="mx-[18px] text-[13px] text-textGray font-semibold">
                        OR
                    </div>
                    <div className="dash"></div>
                </div>
                <div className="mt-[26px] font-semibold flex flex-row items-center">
                    <FacebookFilled className="mr-2 text-[20px]" />
                    <span className="text-[16px]">Log in with Facebook</span>
                </div>
                <div className="text-[14px] mt-4 mb-6">Forgot password?</div>
                <div className=" py-[15px] mb-[10px] text-[14px]">
                    <p className="m-[15px]">
                        Don&#39;t have an account? <span>Sign up</span>
                    </p>
                </div>
            </div>
        </AppDownloadFooter>
    );
};

export default login;
