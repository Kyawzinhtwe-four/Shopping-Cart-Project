import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Typography variant="h2" align="center">
        404 | Not Found
      </Typography>
      <Link to={"/"}>
        <Button variant="outlined" startIcon={<ArrowBack />}>
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
