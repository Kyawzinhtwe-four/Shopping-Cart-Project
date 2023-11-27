import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardContent, Typography, Button, CardActions } from "@mui/material";
import { useParams } from "react-router";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
  singleProduct,
} from "../../features/products/productSlice";
import { addToCart } from "../../features/Carts/cartSlice";

const Detail = () => {
  const product = useSelector(singleProduct);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [isloading, setIsLoading] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    const res = await api
      .get(`/products/${productId}`)
      .catch((e) => console.log(e.message));

    dispatch(selectedProduct(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(removeSelectedProduct);
    fetchProduct();
  }, []);

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
    <div>
      {isloading ? (
        <h1>Loading......</h1>
      ) : (
        <Container maxWidth="sm">
          <img
            src={product.image}
            style={{
              width: "100%",
              overflow: "hidden",
              minHeight: "auto",
              marginTop: "20px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
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
        </Container>
      )}
    </div>
  );
};

export default Detail;
