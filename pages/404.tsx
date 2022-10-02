import React from "react";
import Link from "next/link";
import Head from "next/head";
import BottomNavbar from "@components/BottomNavbar";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page not found</title>
            </Head>
            <div className="w-full h-screen bg-250">
                <div className="flex flex-col items-center justify-center p-10">
                    <h1 className="text-[22px] font-semibold leading-[26px]">
                        Sorry, this page isn&#39;t available.
                    </h1>
                    <p className="mt-10 mb-5 leading-6 text-center text-38">
                        The link you followed may be broken, or the page may
                        have been removed.{" "}
                        <Link href="/" className="!text-blue-500">
                            Go back to Instagram.
                        </Link>
                    </p>
                </div>
            </div>
            <BottomNavbar />
        </>
    );
};

export default NotFound;
