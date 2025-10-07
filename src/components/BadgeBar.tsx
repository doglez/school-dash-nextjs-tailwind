import Image from "next/image";

interface BadgeBarProps {
    count: number;
    urlIcon: string;
}

const BadgeBar = ({ urlIcon, count }: BadgeBarProps) => {
    return (
        <div
            className={`bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative`}
        >
            <Image src={urlIcon} alt="" width={20} height={20} />
            <div
                className={`absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs`}
            >
                {count}
            </div>
        </div>
    );
};

export default BadgeBar;
