import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Carts/cartSlice";

const Blog = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id, title, price, image) => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <Grid item md={6} xs={12} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          alt="green iguana"
          component="img"
          image={product.image}
          title="green iguana"
        />
        <CardContent>
          <Link
            to={`/products/${product.id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            onClick={() =>
              handleAddToCart(
                product.id,
                product.title,
                product.price,
                product.image
              )
            }
          >
            ADD TO CART
          </Button>
          <Typography variant="h6">{product.price} $</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Blog;
