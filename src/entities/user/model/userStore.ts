import { makeAutoObservable, runInAction } from "mobx";
import { api } from "@/shared/api/axiosInstance";

class UserStore {
    user = {
        id: "cfd3136a-0cd4-4d75-8361-049ba5a543e4",
        email: "user@example.com",
        username: "DefaultUser",
        lvl: 1,
        experience: 0,
        quentitiEat: [],
        challenge: [],
        achivments: [],
    };
    loading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }
}

export const userStore = new UserStore();