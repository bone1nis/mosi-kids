import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from "@mui/material";
import type { User } from "../model/userTypes";

interface UserTableProps {
    users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Логин</TableCell>
                    <TableCell>Уровень</TableCell>
                    <TableCell>Опыт</TableCell>
                    <TableCell>Блюда</TableCell>
                    <TableCell>Челленджи</TableCell>
                    <TableCell>Достижения</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.lvl}</TableCell>
                        <TableCell>{user.experience} XP</TableCell>
                        <TableCell>{user.dishes}</TableCell>
                        <TableCell>{user.challenges}</TableCell>
                        <TableCell>{user.achievements.join(", ")}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default UserTable;