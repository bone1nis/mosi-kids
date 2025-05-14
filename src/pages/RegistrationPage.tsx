import { Alert, Container, Stack } from "@mui/material";
import { RegisterForm } from "../features/user";
import AppLogo from "../shared/assets/icons/AppLogo";

const RegistrationPage: React.FC = () => {
    return (
        <Container>
            <Stack justifyContent={"space-between"} direction={{ xs: "column", lg: "row" }} alignItems={"center"}>
                <RegisterForm />
                <Stack spacing={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <Alert icon={false} color="warning">
                        Жду вас в нашем мире гастрономических шедевров!
                    </Alert>
                    <AppLogo />
                </Stack>
            </Stack>
        </Container>
    );
};

export default RegistrationPage;