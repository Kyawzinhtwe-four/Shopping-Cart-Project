import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  getAllCart,
  increaseQty,
  removeCart,
} from "../../features/Carts/cartSlice";

export default function Cart() {
  const carts = useSelector(getAllCart);

  const dispatch = useDispatch();

  const handleQty = (id, type) => {
    if (type === "increase") {
      dispatch(increaseQty(id));
    } else if (type === "decrease") {
      dispatch(decreaseQty(id));
    } else if (type === "delete") {
      dispatch(removeCart(id));
    }
  };

  return (
    <>
      <TableContainer component={Container}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts ? (
              carts.map((cart) => (
                <TableRow
                  key={cart.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={cart.image}
                      style={{
                        width: 120,
                        height: 90,
                      }}
                    />
                  </TableCell>
                  <TableCell>{cart.title.slice(0, 50)}</TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 3,

                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "#279",
                          padding: 12,
                          borderRadius: 10,
                          color: "#fff",
                        }}
                        onClick={() => handleQty(cart.id, "increase")}
                      >
                        +
                      </button>
                      <p
                        style={{
                          padding: 10,
                        }}
                      >
                        {cart.qty}
                      </p>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "#279",
                          padding: 12,
                          borderRadius: 10,
                          color: "#fff",
                        }}
                        onClick={() => handleQty(cart.id, "decrease")}
                      >
                        -
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>
                    {parseInt(cart.price) * parseInt(cart.qty)}
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleQty(cart.id, "delete")}>
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <h1>No Data</h1>
            )}
          </TableBody>
        </Table>
        <Button
          variant="contained"
          style={{
            marginTop: 20,
          }}
        >
          Check Out
        </Button>
      </TableContainer>
    </>
  );
}
