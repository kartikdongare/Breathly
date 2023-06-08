import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';


const MeditationImages = ({data}) => {
  console.log('data',data)
  return (
    <Box sx={{m:1}} >
      <Grid container>
       {data.map((curEle,index)=>{
        return(
        <Grid itam md={3} xs={6} sm={4} >
          <NavLink to={`/mediapage/${curEle.id}`} style={{textDecoration: 'none'}}>
          <Card className='main-image' key={index} >
        <img src={curEle.img} alt={curEle.title} className='medi-images1' />
        <CardContent>
          <Typography variant='h6' >{curEle.title}</Typography>
          <Typography >Willim Parker</Typography>
        </CardContent>
      </Card>
      </NavLink>
        </Grid>
        
      )}
       )}
       </Grid>
    </Box>
  )
}

export default MeditationImages
