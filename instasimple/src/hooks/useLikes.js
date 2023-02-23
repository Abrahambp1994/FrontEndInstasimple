import { useEffect, useState } from "react";
import { postLikeOrDislike } from "../services/index";

export const useLikes = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadLikes = async () => {
            const response = await postLikeOrDislike();
            setData(response);
        };
        loadLikes();
    },[]);
    
    return data;
}