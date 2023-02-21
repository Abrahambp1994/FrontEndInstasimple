import './FilterPostsForm.css';

/* import PropTypes from 'prop-types' */

export const FilterPostsForm = ({ setSearchResults }) => {

    /* const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const query = e.target.elements.search.value;
            const res = await fetch(`${process.env.REACT_APP_BACKEND}/posts?description=${query.toString()}`,);
            const json = await res.json();
            setSearchResults(json.data);
        } catch (error) {
            console.error(error.message);
        }
    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.search.value;
        setSearchResults(query);
    }

    return(
            <form onSubmit={handleSubmit} className="filter-posts-form">
            <input name="search" type="search" id="search" className="form-control" placeholder="Search an image by description..." />
            <button type="submit">Search</button>
        </form>
    )
}

/* SearchPostsForm.propTypes = {
    initialValue: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
} */