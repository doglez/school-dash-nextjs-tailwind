import Image from "next/image";

interface UserAvatarProps {
    userName: string;
    profile: string;
    urlImage: string;
}

const UserAvatar = ({ userName, profile, urlImage }: UserAvatarProps) => {
    return (
        <div className="flex items-center gap-6">
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">
                    {userName}
                </span>
                <span className="text-[10px] text-gray-500 text-right">
                    {profile}
                </span>
            </div>
            <Image
                src={urlImage}
                alt=""
                width={36}
                height={36}
                className="rounded-full"
            />
        </div>
    );
};

export default UserAvatar;
