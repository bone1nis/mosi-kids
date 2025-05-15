import { useState } from "react";
import type { User } from "../model/userTypes";

export const useUserSorting = (users: User[]) => {
    const [sortBy, setSortBy] = useState<"lvl" | "dishes" | "achievements">("lvl");

    const sortedUsers = [...users].sort((a, b) => {
        if (sortBy === "achievements") {
            return b.achievements.length - a.achievements.length;
        }
        if (sortBy === "dishes") {
            return b.dishes.length - a.dishes.length;
        }
        if (sortBy === "lvl") {
            return b.lvl - a.lvl;
        }
        return 0;
    });

    return { sortedUsers, sortBy, setSortBy };
};