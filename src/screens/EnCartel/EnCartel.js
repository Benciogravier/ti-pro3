import React,{Component} from "react";

class EnCartel extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: []
        }
    }
    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2RlMGQwZjJjMmEyNDBkZjc0NmQxYmQ3MGMxYzg0NiIsIm5iZiI6MTc0MzUzMTIyNC4yMDk5OTk4LCJzdWIiOiI2N2VjMmNkODE5ZjFiMWNiNGVmYTBiNjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mzcXwSEblhmvnWTV6blXwTJFlggcgIwLklQqYTZPseA'
            }
          };
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(results => results.json())
            .then(data => this.setState({peliculas: data.results, backupPeliculas: data.results})) //CHEQUEAR LO DE BACKUP
            .catch(err => console.error(err));
    }
    render(){
        return(
            <div>
                <h1>Peliculas en los Cines</h1>
            </div>
        )
    }
   
}

export default EnCartel;