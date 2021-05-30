import React, { useEffect, useState } from "react";
import abtUs from "../../img/carousel.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./plantDetails.css";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#00203FFF",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, condensors) {
  return { name, calories, fat, carbs, protein, condensors };
}

const rows = [
  createData(
    "R1",
    "7.00 KL",
    "17 mtr",
    "Sulzer Packagings Wiregauge & Sheet Metal MOC-SS316L",
    "Turbine",
    "50m2"
  ),
  createData(
    "R1",
    "7.00 KL",
    "17 mtr",
    "Sulzer Packagings Wiregauge & Sheet Metal MOC-SS316L",
    "Turbine",
    "50m2"
  ),
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

function PlantDetails() {
  const classes = useStyles();
  return (
    <div className="">
      <div
        className="container text-center"
        style={{ marginTop: "3%", marginBottom: "3%" }}
      >
        <h2 className="serviceHeadline">Plant Details</h2>
        <h6 className="mt-5">
          We carry out different types of Distillation Processes in our plant
          which enable us to separate various combinations of products.
        </h6>
      </div>

      <div className="container">
        <div className="row">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className="textColor">
                    Rec. No.
                  </StyledTableCell>
                  <StyledTableCell align="right" className="textColor">
                    Capacity
                  </StyledTableCell>
                  <StyledTableCell align="right" className="textColor">
                    Packed Columns <br /> Height/mtr.
                  </StyledTableCell>
                  <StyledTableCell align="right" className="textColor">
                    Packing Type
                  </StyledTableCell>
                  <StyledTableCell align="right" className="textColor">
                    Agitator
                  </StyledTableCell>
                  <StyledTableCell align="right" className="textColor">
                    Candensors
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.condensors}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
export default PlantDetails;
