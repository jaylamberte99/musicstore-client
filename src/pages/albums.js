import React, { Component } from 'react'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Album from '../components/Album';
import Link from 'react-router-dom/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HomeIcon from '@material-ui/icons/Home';


class albums extends Component {
    
    state = {
        albums: null
    }
    
    componentDidMount(){
        axios.get('/getAllAlbums')
            .then(res => {
                console.log(res.data)
                this.setState({
                    albums: res.data
                });
            })
            .catch(err => console.log(err));
    }
    render() {
        let allAlbumsMarkup = this.state.albums ? (
            this.state.albums.map((album) => <Album album={album}/>)
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
                <Grid container spacing = {10}>
                    <Grid item sm={4} xs = {12}/>
                    <Grid item sm={4} xs = {12}>
                        <Typography className="homedescription-container" variant="h3" gutterBottom>
                            All Albums
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            {allAlbumsMarkup}
                        </Typography>
                    </Grid>
                    <Grid item sm={4} xs = {12}/>
                </Grid>
            </div>
        )
    }
}

export default albums
