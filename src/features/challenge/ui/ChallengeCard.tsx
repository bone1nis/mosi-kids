import React, { useState } from "react";
import { Alert, Box, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import challengeIcon from "../assets/challenge-icon.svg";
import type { Challenge } from "../../../entities/challenge";

interface ChallengeCardProps {
    challenge: Challenge;
    minWidth?: string | number;
    disabled?: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
    challenge,
    minWidth = 280,
    disabled = false,
}) => {
    const navigate = useNavigate();
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        if (disabled) return;
        setIsPressed(true);
        setTimeout(() => {
            navigate(`/challenges/${challenge.id}`);
            setIsPressed(false);
        }, 150);
    };

    return (
        <Card
            sx={{
                minWidth: minWidth,
                maxWidth: 600,
                padding: 3,
                cursor: disabled ? "default" : "pointer",
                background: "#ffeecb",
                opacity: disabled ? 0.6 : 1,
                userSelect: disabled ? "none" : "auto",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                transform: isPressed ? "scale(0.97)" : "scale(1)",

                boxShadow: isPressed
                    ? "0 4px 8px rgba(0,0,0,0.2)"
                    : "0 1px 3px rgba(0,0,0,0.1)",
                "&:hover": disabled
                    ? {}
                    : {
                        transform: "scale(1.02)",
                        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                    },
                "&:active": disabled ? {} : { transform: "scale(0.97)" },
            }}
            onClick={handleClick}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Stack spacing={3}>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                        <Typography fontWeight={900} mb={4} variant="h5">
                            {challenge.title}
                        </Typography>
                        <Alert
                            icon={false}
                            variant="filled"
                            severity={disabled ? "warning" : "success"}
                            sx={{
                                px: 2,
                                py: 0.5,
                            }}
                        >
                            <Stack direction={"row"} alignItems={"center"}>
                                <Box
                                    sx={{
                                        width: "8px",
                                        height: "8px",
                                        backgroundColor: "#fff",
                                        borderRadius: "50%",
                                        mr: 1,
                                    }}
                                />
                                {disabled ? "Сложно" : "Доступен"}
                            </Stack>
                        </Alert>
                    </Stack>
                    <Stack>
                        <Typography>{challenge.description}</Typography>
                    </Stack>
                </Stack>
                <Box
                    component="img"
                    src={challengeIcon}
                    alt="Иконка рецепта"
                    sx={{
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </Stack>
        </Card>
    );
};

export default ChallengeCard;