import React,{Component} from "react";

class VerTodas extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie")
        .then((response) => response.json())
        .then(( data ) => console.log(data))
        .catch((error) => console.log(error) )
        
    }
    render(){
        return(
            <div>
                <h1>Todas las películas</h1>
            </div>
        )
    }
   
}

export default VerTodas;