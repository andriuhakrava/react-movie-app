import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import axios from 'axios';
import './App.css';

// class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     movies: []  
  //   };
  // }

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.airtable.com/v0/appiz1Q7nAvWozj2f/favorites?api_key=keyxv1G9PLUSWBuC0')
          .then(response => setMovies(response.data.records))
          .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card-deck">
            { movies.map(movie => <MovieCard key={ movie.id } { ...movie.fields } />) }
          </div>
        </div>
      </div>
    </div>
  );
}
  // componentDidMount(){
  //   fetch(`https://api.airtable.com/v0/appiz1Q7nAvWozj2f/favorites?api_key=keyxv1G9PLUSWBuC0`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({ movies: data.records })
  //     })
  //     .catch(error => console.log(error));
  // }

  // render(){
    // return (
    //   <div className="container mt-5">
    //     <div className="row">
    //       <div className="col">
    //         <div className="card-deck">
    //           { this.state.movies.map(movie => <MovieCard key={ movie.id } { ...movie.fields } />) }
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  // }
// }

export default App;
