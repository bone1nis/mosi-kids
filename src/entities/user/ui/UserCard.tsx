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
            <Typography><strong>Уровень:</strong> {user.level}</Typography>
            <Typography><strong>Опыт:</strong> {user.experience} XP</Typography>
            <Typography><strong>Блюда:</strong> {user.dishesCount}</Typography>
            <Typography><strong>Челленджи:</strong> {user.challengesCount}</Typography>
            <Typography><strong>Достижения:</strong> {user.achievements.join(", ")}</Typography>
        </CardContent>
    </Card>
);

export default UserCard;