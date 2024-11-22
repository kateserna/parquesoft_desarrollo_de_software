import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({image, title, body, onClick}) {
  return (
    <Card sx={{ maxWidth: 250}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt=""
          onClick={onClick}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}