import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bolgImg from '../images/news.jpg';
import styles from './blog.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={{ xs: 2, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }} className={styles.newsContainer} >

      <Grid container spacing={2} className={styles.newsHeading} >
            <Grid item xs={12}>
              <Item sx={{ borderRadius: 0, boxShadow: "none" , textAlign:'center', padding:0}}>
                <h2>Latest Updates and News</h2>
              </Item>
              <Grid item xs={12}>
                <Item
                  sx={{ borderRadius: 0, boxShadow: "none", textAlign:'center' }}
                 
                >
                  <p >
                  The all India house price index (HPI) rose by 3.5 per cent year-on-year in the first quarter of 2022-23...  
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Grid>

        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} sx={{padding: 0}} >


            <Item  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,boxShadow:'none'}}>
            <Card sx={{ maxWidth: 345 ,boxShadow:'none'}} className={styles.cardImg}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image={bolgImg}
          alt="green iguana"
          
        />
        <CardContent className={styles.newsCont}>
          <Typography gutterBottom component="div" className={styles.newsContH}>
          Rent or buy? Here’s how to make that decision?
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


















