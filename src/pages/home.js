import React from "react";
import "./style.css";
import Header from "../components/Header";
import Hero from "../components/hero";
import { Link } from 'react-router-dom';

// import SpotifyApi from "../utils/spotify-api";

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
        <Link to="Questions">
        <button>Start</button>
        </Link>
    </div>
    </div>
</div>
}

export default Home;