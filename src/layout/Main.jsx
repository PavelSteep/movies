import React, {Component} from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component{
    state = {
        movies:[],
        loading:true
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=${API_KEY}f&s=Avengers')
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search, loading:false}))
    }

    searchMovies = (str, type='all') =>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}f&s=${str}${type!=='all'? `$type=${type}` :
    ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search, loading:false}))
    }

    render(){
        const {movies, loading} = this.state;

        return (
            <main className="content wrapper">
                <Search searchMovies={this.searchMovies} />
            {
                loading ? <h3><Preloader /></h3>
                :
                (<Movies movies={this.state.movies} />)
            }
            </main>
        );
    }
}

// function Main() {
    // return (
    //     <main className="content wrapper">
    //         <Movie />
    //     </main>
    // );
// }

export default Main;