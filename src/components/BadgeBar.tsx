import { ReactNode } from "react";

interface BadgeBarProps {
    children: ReactNode;
    count: number;
    iconColor: string;
    badgeColor: string;
    textBadgerColor: string;
}

const BadgeBar = ({
    children,
    count,
    iconColor,
    badgeColor,
    textBadgerColor,
}: BadgeBarProps) => {
    return (
        <div
            className={`${iconColor} rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative`}
        >
            {children}
            <div
                className={`absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center ${badgeColor} ${textBadgerColor} rounded-full text-xs`}
            >
                {count}
            </div>
        </div>
    );
};

export default BadgeBar;
