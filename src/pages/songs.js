import React, { Component } from 'react'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Song from '../components/Song';
import Link from 'react-router-dom/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeIcon from '@material-ui/icons/Home';

class songs extends Component {
    state = {
        songs: null
    }
    
    componentDidMount(){
        axios.get('/getAllSongs')
        .then(res => {
            console.log(res.data)
            this.setState({
                songs: res.data
            });
        })
        .catch(err => console.log(err));
    }

    render() {
        let topSongsMarkup = this.state.songs ? (
            this.state.songs.map((song) => <Song song={song}/>)
        ) : <p>Loading...</p>

        return (
            <div>
                <Typography variant="h5" component={Link} to={'./'}>Home</Typography>
                <Typography className="hometitle-container"
                            variant="h1"
                            component="h2"
                            gutterBottom>
                    Music Store
                </Typography>
                <Typography className="homedescription-container" variant="h6" gutterBottom>
                    All your music needs in one place.
                </Typography>
                <Grid container spacing = {10}>
                    <Grid item sm={4} xs = {12}/>
                    <Grid item sm={4} xs = {12}>
                        <Typography className="homedescription-container" variant="h3" gutterBottom>
                            All Songs
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {topSongsMarkup}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs = {12}/>
                </Grid>
            </div>
        )
    }
}

export default songs
