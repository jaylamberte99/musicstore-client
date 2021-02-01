import React, { Component, Fragment } from 'react'
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = {
    profileImage: {
      maxWidth: 200,
      height: 200,
      borderRadius: '50%',
      objectFit: 'cover'
    },
    dialogContent: {
      padding: 20
    },
    closeButton: {
      position: 'absolute',
      left: '90%'
    },
    expandButton: {
      position: 'absolute',
      left: '90%'
    },
    spinnerDiv: {
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 50
    },
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

class SongDialog extends Component {

    state = {
        open: false
      };

    componentDidMount() {
        if (this.props.openDialog) {
            this.handleOpen();
        }
    }

    handleOpen = () => {
        this.setState({ open: true});
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    playSong = value => () =>{
        let command = '/playSong/' + value;
        axios.get(command)
            .catch(err => console.log(err));
    }
    render() {
        const {classes} = this.props

        return (
        <Fragment>
          <Button onClick={this.handleOpen}>
            <UnfoldMore/>
          </Button>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            fullWidth>
                <DialogTitle>
                <Grid container 
                                spacing={5}
                                justify="center"
                                alignItems="center">
                    <Grid item xs={7}>
                    <img src={this.props.songImg}/>
                    </Grid>
                    <Grid item xs={3}>
                    <Typography variant="body1">{this.props.songName}</Typography>
                    <Typography variant="body2">{this.props.songArtist}</Typography>
                    <Typography variant="body2">{this.props.songAlbum}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <Button onClick={this.playSong(this.props.songId)}>
                        <PlayCircleFilled/>
                    </Button>
                    </Grid>
                </Grid>
                </DialogTitle>
                <DialogContent >
                <DialogContentText>
                    <Typography variant="body1"></Typography>
                </DialogContentText>
                </DialogContent>
            </Dialog>
        </Fragment>
        )
    }
}

export default SongDialog
