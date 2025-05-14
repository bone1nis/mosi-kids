import { Alert, Container, Stack } from "@mui/material";
import { LoginForm } from "../features/user";
import AppLogo from "../shared/assets/icons/AppLogo";

const LoginPage: React.FC = () => {
    return (
        <Container>
            <Stack justifyContent={"space-between"} direction={{ xs: "column", lg: "row" }} alignItems={"center"}>
                <LoginForm />
                <Stack spacing={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Alert icon={false} color="warning">
                        С возвращением, кулинарный гуру, мы тебя ждали!
                    </Alert>
                    <AppLogo />
                </Stack>
            </Stack>
        </Container>
    );
};

export default LoginPage;