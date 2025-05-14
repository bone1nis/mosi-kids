import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#C6EE66"
        },
        secondary: {
            main: "#FFCF69"
        }
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-root": {
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiInputLabel-root": {
                        color: "inherit",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "inherit",
                    },
                    "& .MuiInputLabel-root.MuiFormLabel-filled": {
                        color: "inherit",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFCF69",
                    "&:disabled": {
                        backgroundColor: "#f5f5f5",
                        color: "#9e9e9e"
                    },
                },
                outlined: {
                    backgroundColor: "transparent",
                    color: "#FFCF69",
                    borderColor: "#FFCF69",
                    "&:hover": {
                        backgroundColor: "rgba(255, 207, 105, 0.1)",
                    },
                },
                text: {
                    backgroundColor: "transparent",
                    color: "#FFCF69",
                    "&:hover": {
                        backgroundColor: "rgba(255, 207, 105, 0.1)",
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(243, 239, 239, 0.5)",
                    border: "none",
                    transition: "background-color 0.3s",
                    color: "rgba(58, 57, 57, 0.5)",
                    borderRadius: 5,
                    "&.Mui-selected": {
                        backgroundColor: "#fff",
                        color: "#000",
                        pointerEvents: "none",
                        cursor: "default"
                    },
                    "&:hover:not(.Mui-selected)": {
                        backgroundColor: "#fff",
                        color: "#000",
                    },
                },
            },
        },
    },
});