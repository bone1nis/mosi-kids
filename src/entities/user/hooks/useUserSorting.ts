import { useState } from "react";
import type { User } from "../model/userTypes";

export const useUserSorting = (users: User[]) => {
    const [sortBy, setSortBy] = useState<"level" | "dishesCount" | "achievements">("level");

    const sortedUsers = [...users].sort((a, b) => {
        if (sortBy === "achievements") {
            return b.achievements.length - a.achievements.length;
        }
        return b[sortBy] - a[sortBy];
    });

    return { sortedUsers, sortBy, setSortBy };
};