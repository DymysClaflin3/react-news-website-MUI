import {
  Card,
  CardActionArea,
  CardMedia,
  Tooltip,
  Link,
  Typography,
  Stack,
  CardContent,
} from "@mui/material";

const NewsCard = ({ news }) => {
  return (
    <Card sx={{ width: 400, minHeight: 430 }} elevation={5}>
      <CardActionArea>
        <CardMedia sx={{ height: 250 }} image={news.urlToImage} />
      </CardActionArea>
      <CardContent>
        <Tooltip title={news.title}>
          <Link href={news.urlToImage} target="_blank">
            <Typography variant="h6" mb={2} gutterBottom noWrap>
              {news.title}
            </Typography>
          </Link>
        </Tooltip>
        <Typography color="GrayText" sx={{ minHeight: 150 }}>
          {news.description}
        </Typography>
        <Stack direction="row" mt={2}>
          <Typography fontWeight={700} sx={{minWidth: '25%'}} gutterBottom color="GrayText">
            Author:
          </Typography>
          <Typography gutterBottom color="GrayText">
            {news.author}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography fontWeight={700} sx={{minWidth: '25%'}} color="gray">
            Published:
          </Typography>
          <Typography gutterBottom color="GrayText">
            <i>{news.publishedAt}</i>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
