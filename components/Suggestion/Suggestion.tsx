import React, { FC } from "react";
import Image from "next/image";
import PersonItem from "./PersonItem";

type Props = {};

const Suggestion: FC<Props> = ({}) => {
    return (
        <div className="absolute top-[44px] w-full bottom-[49px] overflow-y-scroll ">
            <h4 className="text-[16px] font-semibold px-4 mt-3">
                Suggestion For You
            </h4>
            <div className="border-[1px] mt-3 py-2 border-inputBorder flex flex-col">
                <PersonItem verified={false} />
                <PersonItem verified={false} />
                <PersonItem verified={false} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
                <PersonItem verified={true} />
            </div>
        </div>
    );
};

export default Suggestion;
