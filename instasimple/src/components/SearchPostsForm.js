
import PropTypes from 'prop-types'

export const SearchPostsForm = ({ initialValue, onSearch }) => {

    
    
    return <form onSubmit={e => {
        e.preventDefault()
        onSearch?.({ value: e.target.searcher[0].value })
        // e.target.searcher[0].value = ""
        // e.target.reset()
    }}>
        <div className="input-group mb-3">
            <input defaultValue={initialValue} name="searcher" type="text" className="form-control" placeholder="Busca aquí el producto que quieres" aria-label="Busca aquí el producto que quieres" aria-describedby="searcher"/>
            <button className="input-group-text" id="searcher">Buscar</button>
        </div>
    </form>
}

SearchPostsForm.propTypes = {
    initialValue: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}