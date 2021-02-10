import React from "react";
import { func } from "prop-types";
import { arrayOf, number, string, shape } from "prop-types";
import Price from "../Price/index";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@material-ui/core";
import { isEmpty } from "ramda";

export default function Cart({ cart, reset }) {
  if (isEmpty(cart)) return <Typography>Pas de Voyage</Typography>;
  return (
    <TableContainer component={Paper}>
      <Table
        /* className={classes.table} */
        size="small"
        aria-label="Ma réservation"
      >
        <TableHead>
          <TableRow>
            <TableCell>Voyage</TableCell>
            <TableCell align="right">Prix</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(({ addedAt, title, price }) => (
            <TableRow key={addedAt}>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="right">
                <Price value={price} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Cart.propTypes = {
  cart: arrayOf(
    shape({ idTrip: number, title: string, price: number, addedAt: number })
  ),
  reset: func,
};
Cart.defaultProps = {
  cart: [],
  reset: Function.prototype,
};
