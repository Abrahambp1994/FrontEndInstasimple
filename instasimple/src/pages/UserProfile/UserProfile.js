import './UserProfile.css';

import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

import { PostList } from "../../components/PostList/PostList";

export const UserProfile = () => {

    const { id } = useParams();
    const { user } = useUser(id);

    return (
        <section className="user-profile">
            <h2>{user.name}</h2>
            <PostList posts={user.posts} />
        </section>
    )
}