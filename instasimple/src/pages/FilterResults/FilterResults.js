import './FilterResults.css';

import { useState } from 'react';

import { PostList } from "../../components/PostList/PostList";
import { FilterPostsForm } from "../../components/FilterPostsForm/FilterPostsForm";

import usePosts from "../../hooks/usePosts";

export const FilterResults = () => {

    const [ searchResults , setSearchResults ] = useState([]);
    const { posts } = usePosts(searchResults);

    return(
     <section className='filter-results'>
      
        <div className='filter-results-header'>
          <h2>Search</h2>
          <FilterPostsForm setSearchResults={setSearchResults} />
        </div>

        <PostList /* searchResults={searchResults} */ posts={posts} />

     </section> 
   )
}