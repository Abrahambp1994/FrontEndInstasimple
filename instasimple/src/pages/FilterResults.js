import { PostList } from "../components/PostList"
import {SearchPostsForm} from "../components/SearchPostsForm"
import usePosts from "../hooks/usePosts"

export const FilterResults = ({initialValue, onSearch}) => {
    const {posts} = usePosts();
    return(
     <section>
         <SearchPostsForm initialValue = {initialValue} onSearch={onSearch}/>
         <PostList posts= {posts}/>
     </section> 
   )
}