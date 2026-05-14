import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "core/entities";

const SESSION_KEY = `@USER_LOGGED`;

const AuthRepository = {
    save: async (user: User): Promise<void> => {
        AsyncStorage.setItem(SESSION_KEY, JSON.stringify(user));
    },
    get: async (): Promise<User | null> =>{
        const userData = await AsyncStorage.getItem(SESSION_KEY)
        return userData ? JSON.parse(userData): null;
    },
    detele: (): void => {
        AsyncStorage.removeItem(SESSION_KEY);
    }
};

export default AuthRepository