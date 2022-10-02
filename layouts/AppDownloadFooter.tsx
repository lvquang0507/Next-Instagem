import React, { FC } from "react";
import Footer from "../components/Footer";
import Image from "next/image";

type Props = {
    children?: any;
};

const AppDownloadFooter: FC<Props> = (props) => {
    return (
        <div>
            {props.children}
            <div className="flex flex-col items-center">
                <div className="text-[14px] mx-5 my-[10px]">Get the app.</div>
                <div className="flex mb-[64px] my-[10px] gap-x-4">
                    <Image
                        src="/images/app-store.png"
                        width={136}
                        height={40}
                        alt="App Store"
                    />
                    <Image
                        src="/images/google-play.png"
                        width={136}
                        height={40}
                        alt="App Store"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppDownloadFooter;
