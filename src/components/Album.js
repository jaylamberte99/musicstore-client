import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import AlbumDialog from './AlbumDialog';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
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

class Album extends Component {
    render() {
        const { album :{ albumName, albumArtist, albumImg, albumImgBig, albumPurchases, albumId }} = this.props
        const {classes} = this.props
        return (
            <Card class={classes.card}>
                <CardMedia 
                    image = {albumImg}
                    class={classes.image}/>
                <CardContent class={classes.content}>
                    <Grid container 
                            spacing={1}
                            justify="center"
                            alignItems="center">
                        <Grid item xs={9}>
                            <Typography variant="body1">{albumName}</Typography>
                            <Typography variant="body2">{albumArtist}</Typography>
                            <Typography variant="body2" >Albums sold: {albumPurchases}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <AlbumDialog albumName={albumName}
                                            albumArtist={albumArtist}
                                            albumPurchases={albumPurchases}
                                            albumImg={albumImg}
                                            albumImgBig={albumImgBig}
                                            albumId={albumId}/>       
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}


export default withStyles(styles)(Album)
