import { useEffect, useState } from "react";
import { getUserDataService } from "../services";

export const useUser = (id) => {
    
    const [user, setUser] = useState([]);

    useEffect(() => {

        const loadUser = async () => {
            const data = await getUserDataService(id);
            setUser(data);
        };

        loadUser();
    }, [id]);

    return { user };
}