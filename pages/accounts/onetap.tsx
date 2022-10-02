import React from "react";
import Image from "next/image";

type Props = {};

const SaveLoginInfo = (props: Props) => {
    return (
        <div className="relative flex flex-col h-screen">
            <header className="before:absolute before:left-0 before:right-0 before:bg-[#dbdbdb] fixed w-full before:h-[1px] before:bottom-[-1px] inset-x-0 top-0 z-[1]">
                <div className="flex justify-center px-4 py-[6px]">
                    <Image
                        src="/images/instagram-logo.png"
                        width={103}
                        height={29}
                        alt="logo"
                    />
                </div>
            </header>
            <div className="my-[44px] flex flex-col justify-center w-full items-stretch h-full">
                <div className="my-4">
                    <section className="py-4 px-[44px] leading-[18px]">
                        <div className="flex flex-col items-center">
                            <div>
                                <svg
                                    aria-label="Keyhole"
                                    color="#262626"
                                    fill="#262626"
                                    height="62"
                                    role="img"
                                    viewBox="0 0 96 96"
                                    width="62"
                                >
                                    <circle
                                        cx="48"
                                        cy="48"
                                        fill="none"
                                        r="47"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></circle>
                                    <path
                                        d="M62 39.688a14 14 0 10-21.542 11.783L36.617 69h22.766l-3.841-17.53A13.978 13.978 0 0062 39.689z"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    ></path>
                                </svg>
                            </div>
                            <div className="mt-[13px] text-textDarkGray text-[14px] font-semibold text-center">
                                Save Your Login Info?
                            </div>
                            <div className="text-[14px] font-normal text-textGray text-center mt-[11px] mb-[15px]">
                                We can save your login info on this browser so
                                you don&#39;t need to enter it again.
                            </div>
                            <button className="button-instagem !w-full border-[1px] !m-0 ">
                                Save Info
                            </button>
                        </div>
                    </section>
                    <div className="flex mb-2 text-buttonActive flex-col items-center text-[14px] font-semibold leading-[18px]">
                        <button>Not Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveLoginInfo;
