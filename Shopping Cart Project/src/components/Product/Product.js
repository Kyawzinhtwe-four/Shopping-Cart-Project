import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getAllProducts,
} from "../../features/products/productSlice";
import Blog from "./Blog";
import { Grid } from "@mui/material";

const Product = () => {
  const products = useSelector(getAllProducts);

  const dispatch = useDispatch();

  const [isloading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await api.get("/products");

    dispatch(fetchProducts(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {isloading ? (
        <h1>Loading</h1>
      ) : (
        <Grid
          container
          spacing={4}
          style={{
            marginTop: "20px",
            padding: "0 20px",
          }}
        >
          {products.map((product) => (
            <Blog product={product} key={product.id} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Product;
