import { Card, CardContent, Divider, Typography } from "@mui/material";
import type { User } from "../model/userTypes";

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <Card sx={{ p: 2 }}>
        <CardContent>
            <Typography variant="h6">{user.username}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography>
                <Typography component="span" fontWeight={700}>Уровень:</Typography> {user.lvl}
            </Typography>
            <Typography>
                <Typography component="span" fontWeight={700}>Опыт:</Typography> {user.experience} XP
            </Typography>
            <Typography>
                <Typography component="span" fontWeight={700}>Блюда:</Typography> {user.dishes}
            </Typography>
            <Typography>
                <Typography component="span" fontWeight={700}>Челленджи:</Typography> {user.challenges.length}
            </Typography>
            <Typography>
                <Typography component="span" fontWeight={700}>Достижения:</Typography> {user.achievements.join(", ")}
            </Typography>
        </CardContent>
    </Card>
);

export default UserCard;