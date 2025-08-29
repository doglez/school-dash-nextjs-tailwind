import SearchBar from "./SearchBar";
import BadgeBar from "./BadgeBar";
import UserAvatar from "./UserAvatar";

const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-4 ">
            <SearchBar />
            {/* ICONS AND USER */}
            <div className="flex items-center gap-6 justify-end w-full">
                <BadgeBar count={1} urlIcon="/message.png" />
                <BadgeBar count={1} urlIcon="/announcement.png" />
                <UserAvatar
                    userName="Jonh Done"
                    profile="Admin"
                    urlImage="/avatar.png"
                />
            </div>
        </div>
    );
};

export default NavBar;
