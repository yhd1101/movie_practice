import React, {useState} from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid, Container} from "@mui/material";

const App = () => {
    const [news, setNews] = useState([])

    const getNews =async () =>{
        try{
            const result = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-04-21&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f")
            console.log(result.data.articles)
            setNews(result.data.articles)
        } catch (err){
            console.log(err)
        }
    }
    //자동실행 함수
    useState(() => {
        getNews()
    }, [])


    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
           {news && news.map(n => (
               <Card sx={{ maxWidth: 345 }}>
                   <CardMedia
                       sx={{ height: 120 }}
                       image={n.urlToImage}
                       title="green iguana"
                   />
                   <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                           {n.title.slice(0,13)}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                           {n.description.slice(0,150)}
                       </Typography>
                   </CardContent>
                   <CardActions>
                       <Button size="small">Share</Button>
                       <Button size="small">자세히 보기</Button>
                   </CardActions>
               </Card>
           ))}
        </Grid>
    );
};

export default App;