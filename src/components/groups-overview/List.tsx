
import React from "react";

// #3A7FE5

interface ListProps {
    title: string;
    subtitle: string;
    amount: number;
}

export const List = ({title, subtitle, amount}: ListProps) => {
    return(
        <div className="flex justify-between items-center rounded-sm border bg-white text-black w-80 h-15 p-2">
            <div className="flex flex-col justify-between rounded border-[#3A7FE5] ">
                {title}
                <br></br>
                {subtitle}
            </div>
            <div className="flex justify-end items-center align-text-">
               ${amount}
            </div>
        </div>
    
    )
}