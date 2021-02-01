import React, { Component } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Album from '../components/Album';
import Song from '../components/Song';
import Link from 'react-router-dom/Link';
import HomeIcon from '@material-ui/icons/Home';

class home extends Component {
    
    state = {
        albums: null,
        songs: null
    }
    
    componentDidMount(){
        axios.get('/getTop10Albums')
            .then(res => {
                console.log(res.data)
                this.setState({
                    albums: res.data
                });
            })
            .catch(err => console.log(err));

            axios.get('/getTop10Songs')
            .then(res => {
                console.log(res.data)
                this.setState({
                    songs: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        let topAlbumsMarkup = this.state.albums ? (
            this.state.albums.map((album) => <Album album={album}/>)
        ) : <p>Loading...</p>

        let topSongsMarkup = this.state.songs ? (
            this.state.songs.map((song) => <Song song={song}/>)
        ) : <p>Loading...</p>

        return (
            <div>
                <Typography className="hometitle-container"
                            variant="h1"
                            gutterBottom>
                    Music Store
                </Typography>
                <Typography className="homedescription-container" variant="h6" gutterBottom>
                    All your music needs in one place.
                </Typography>
                <Grid container spacing = {10}>
                    <Grid item sm={2} xs = {12}/>
                    <Grid item sm={4} xs = {12}>
                        <Typography className="homedescription-container" variant="h3" gutterBottom>
                            Top 10 Albums
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {topAlbumsMarkup}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs = {12}>
                        <Typography className="homedescription-container" variant="h3" gutterBottom>
                            Top 10 Songs
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {topSongsMarkup}
                        </Typography>
                    </Grid>
                    <Grid item sm={2} xs = {12}/>
                </Grid>
                <Grid container spacing = {10}
                        justify="center">
                    <Grid item sm={2} xs = {12}/>
                    <Grid item sm={4} xs = {12}>
                        <Typography variant="body1"
                                    component={Link} 
                                    to={'/albums'}
                                    color="primary">View all albums</Typography>
                    </Grid>
                    <Grid item sm={4} xs = {12}>
                        <Typography variant="body1"
                                    component={Link} 
                                    to={'/songs'}
                                    color="primary">View all songs</Typography>
                    </Grid>
                    <Grid item sm={2} xs = {12}/>
                </Grid>
            </div>
        )
    }
}

export default home
