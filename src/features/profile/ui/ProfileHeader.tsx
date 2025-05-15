import { Stack } from "@mui/material";
import ProfileCard from "./ProfileCard";
import StatisticCard from "./StatisticCard";
import type { User } from "../../../entities/user";

interface ProfileHeaderProps {
    user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {

    return (
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
            <ProfileCard username={user.username} lvl={user.lvl} experience={user.experience} />
            <Stack spacing={1} direction={{ xs: "column", md: "row" }}>
                <StatisticCard title="8 часов" subtitle="Проведено в игре" />
                <StatisticCard title={`${user.dishes.length} блюд`} subtitle="Приготовлено блюд" />
                <StatisticCard title={`${user.challenges.length} побед`} subtitle="Победы в челленджах" />
            </Stack>
        </Stack>
    );
};

export default ProfileHeader;