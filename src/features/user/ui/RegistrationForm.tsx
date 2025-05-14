import { Box, Button, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const RegistrationForm: React.FC = () => {
    const theme = useTheme();

    const navigate = useNavigate();

    const [currentPage] = useState("register");

    const handleChange = () => {
        navigate("/login");
    };

    return (
        <Box
            sx={{ background: theme.palette.primary.main, padding: 3, paddingBottom: 10, borderRadius: 8 }}>
            <Stack>
                <ToggleButtonGroup
                    color="primary"
                    value={currentPage}
                    exclusive
                    onChange={handleChange}
                    sx={{ marginBottom: 4 }}
                >
                    <ToggleButton value="login">Вход</ToggleButton>
                    <ToggleButton value="register">Регистрация</ToggleButton>
                </ToggleButtonGroup>

                <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 1 }}>
                    Добро пожаловать!
                </Typography>
                <Typography sx={{ marginBottom: 3 }}>
                    Зарегистрируйтесь, чтобы продолжить
                </Typography>

                <Stack spacing={2} direction={"column"} sx={{ marginBottom: 10 }}>
                    <TextField label="Имя" sx={{width: {sx: "100%", sm: 430}}} />
                    <TextField label="Эл. почта" sx={{width: {sx: "100%", sm: 430}}} />
                    <TextField label="Пароль" sx={{width: {sx: "100%", sm: 430}}} />
                </Stack>

                <Button variant="contained" sx={{ width: 240 }} >Зарегистрироваться</Button>
            </Stack>
        </Box>
    );
};

export default RegistrationForm;