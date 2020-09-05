import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 1050,
    },
    media: {
        height: 140,
    },
});

const UserDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(posts => setPost(posts))
    }, []);
    const { id, title, body } = post;
    const classes = useStyles();

    return (
        <div style={{ width: '60%', margin: 'auto' }}>
        <div style={{ width:'94%',backgroundColor:'#5cede4',padding:'10px 20px',marginTop:'20px',borderRadius:'5px'}}>
            <h3 style={{textAlign: 'center'}}>All Users Post Details </h3>
        </div>
        <div style={{ marginTop: '20px'}}>
            <Card className={classes.root}>
                <CardActionArea style={{backgroundColor: '#5cede4',padding:'20px 0px 100px 20px'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <h2> {title}</h2>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    </div>
    );
};

export default UserDetails;