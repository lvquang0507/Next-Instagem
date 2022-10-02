import React, { FC } from "react";

type Props = {
    children: React.ReactNode;
};

const Overlay: FC<Props> = (props) => {
    return (
        <div className="absolute inset-0 z-10 bg-overlay ">
            {props.children}
        </div>
    );
};

export default Overlay;
