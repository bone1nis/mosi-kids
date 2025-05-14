import { Stack, Typography } from "@mui/material";
import { useTimer } from "../hooks/useTimer";

interface ChallengeTimerProps {
    initialTime: number;
}

const ChallengeTimer: React.FC<ChallengeTimerProps> = ({ initialTime }) => {
    const { timeLeft, formatTime } = useTimer(initialTime);

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" mb={3}>
            <Typography variant="h5" sx={{ mr: 2 }}>
                Время до окончания:
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {formatTime(timeLeft)}
            </Typography>
        </Stack>
    );
};


export default ChallengeTimer;