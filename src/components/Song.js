import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import SongDialog from './SongDialog';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 15,
        backgroundColor:  '#FFFFFF'
    },
    image: {
        width: 100,
        height: 100
    },
    content: {
        width: 300,
        padding: 10
    }
}

class Song extends Component {
    render() {
        const { song :{ songName, songArtist, songAlbum, songImg, songPlays, songId }} = this.props
        const {classes} = this.props
        return (
            <Card class={classes.card}>
                <CardMedia 
                    image = {songImg}
                    class={classes.image}/>
                <CardContent class={classes.content}>
                    <Grid container 
                            spacing={1}
                            justify="center"
                            alignItems="center">
                        <Grid item xs={9}>
                            <Typography variant="body2">{songName}</Typography>
                            <Typography variant="caption" display="block">{songArtist}</Typography>
                            <Typography variant="caption" display="block">{songAlbum}</Typography>
                            <Typography variant="caption" display="block">No. of plays: {songPlays}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <SongDialog songName={songName}
                                                songArtist={songArtist}
                                                songAlbum={songAlbum}
                                                songImg={songImg}
                                                songPlays={songPlays}
                                                songId={songId}/>   
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Song)
