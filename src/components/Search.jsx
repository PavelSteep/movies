import React, {Component} from "react";

class Search extends Component{
    state = {
        search:'',
        type:'all'
    }

    handleKey = (e) =>{
        if(e.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = e =>{
        this.setState({type:e.target.dataset.type}, ()=>{
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render(){
        return (
            <div className="row">
                <div className="input-field">
                    <input 
                        placeholder="search..." 
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e)=>this.setState({search:e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button 
                    className="btn search-btn"
                    onClick={()=>this.props.searchMovies(this.state.search, this.state.type)}
                    >Search</button>
                    <div className="search-conditions">
                        <label>
                            <input 
                            className="with-gap" 
                            name="group3" 
                            type="radio" 
                            checked={this.state.type === 'all'}
                            data-type="All"
                            onChange={this.handleFilter}  
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input 
                            className="with-gap" 
                            name="group3" 
                            type="radio" 
                            checked={this.state.type === 'movie'}
                            data-type="movie"
                            onChange={this.handleFilter} 
                            />
                            <span>Only Movies</span>
                        </label>
                        <label>
                            <input 
                            className="with-gap" 
                            name="group3" 
                            type="radio" 
                            checked={this.state.type === 'series'}
                            data-type="series"
                            onChange={this.handleFilter} 
                            />
                            <span>Only Series</span>
                        </label>
                    </div>
                </div>
            </div>
            );
        }
    }

export default Search;