import React from "react";
import "./style.css";
import Header from "../components/Header";
import Hero from "../components/hero";
import { Link } from 'react-router-dom';
<<<<<<< HEAD

// import SpotifyApi from "../utils/spotify-api";
=======
>>>>>>> b15a83e192d753ee7df6dadd0389b2be531c3ab2

const Home = () =>{
return <div>
    <Header/>
    <Hero/>

    <div className="intro">
        <h1>Weather Playlist</h1>
        <div>
        <p>
           Welcome!
        </p>
        <p>
           Let's create a music playlist that matches the weather.
        </p>
<<<<<<< HEAD
        <Link to="Questions">
        <button>Start</button>
        </Link>
=======
    
        <Link to="Questions">
        <button>Start</button>
        </Link>
    
>>>>>>> b15a83e192d753ee7df6dadd0389b2be531c3ab2
    </div>
    </div>
</div>
}

export default Home;
