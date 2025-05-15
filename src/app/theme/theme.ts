import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        text: {
            primary: "#000",
            secondary: "#fff"
        },
        primary: {
            main: "#C6EE66"
        },
        secondary: {
            main: "#FFCF69"
        },
        success: {
            main: "#34c759"
        },
        warning: {
            main: "#ff3b30"
        }
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        h1: {
            fontWeight: 900,
            fontSize: '3rem',
            '@media (min-width:600px)': {
                fontSize: '4.5rem',
            },
            '@media (min-width:900px)': {
                fontSize: '6rem',
            },
        },
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
                    backgroundColor: "#ff9500",
                    padding: "30px",
                    borderRadius: "16px",
                    color: "#fff",
                    "&:disabled": {
                        backgroundColor: "#f5f5f5",
                        color: "#9e9e9e"
                    },
                },
                outlined: {
                    backgroundColor: "transparent",
                    color: "#000",
                    borderColor: "#000",
                    "&:hover": {
                        backgroundColor: "rgba(255, 207, 105, 0.1)",
                    },
                },
                text: {
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    color: "#000",
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
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "32px",
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                standardError: {
                    backgroundColor: "#ff3b30",
                    color: "#fff",
                },
                filledError: {
                    backgroundColor: "#ff3b30",
                    color: "#fff",
                },
                outlinedError: {
                    borderColor: "#ff3b30",
                    color: "#ff3b30",
                },
                standardWarning: {
                    backgroundColor: "#ffcf69",
                    color: "#000",
                },
                filledWarning: {
                    backgroundColor: "#ff3b30",
                    color: "#000",
                },
                outlinedWarning: {
                    borderColor: "#ffcf69",
                    color: "#000",
                },
                standardInfo: {
                    backgroundColor: "#69bff8",
                    color: "#000",
                },
                filledInfo: {
                    backgroundColor: "#69bff8",
                    color: "#000",
                },
                outlinedInfo: {
                    borderColor: "#69bff8",
                    color: "#000",
                },
                message: {
                    color: "#fff",
                }
            }
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    background: "#3193FF",
                    borderCollapse: "separate",
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: "#fff",
                },
                head: {
                    color: "#fff",
                },
                body: {
                    color: "#fff",
                },
            },
        },
    },
});