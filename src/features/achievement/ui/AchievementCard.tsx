import { Card, Typography, Stack, CardMedia } from "@mui/material";
import achievementIcon from "../assets/achievement-icon.svg";

interface AchievementCardProps {
  achievement: {
    id: number;
    title: string;
    description: string;
  };
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <Card sx={{ padding: 2, width: 200 }}>
      <CardMedia
        component="img"
        alt="Иконка достижения"
        height="50"
        image={achievementIcon}
        sx={{ objectFit: "contain", mb: 1 }}
      />
      <Stack>
        <Typography variant="h6" align="center" fontWeight="bold">
          {achievement.title}
        </Typography>
        <Typography align="center">{achievement.description}</Typography>
      </Stack>
    </Card>
  );
};

export default AchievementCard;