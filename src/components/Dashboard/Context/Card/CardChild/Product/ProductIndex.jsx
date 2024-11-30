import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  companies = String,
  members = Number,
  budget = Number,
  completion = String,

){
  return { companies, members, budget, completion };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'active'),
  createData('Ice cream sandwich', 237, 9.0, 'active'),
  createData('Eclair', 262, 16.0, 'offline'),
  createData('Cupcake', 305, 3.7, 'offline'),
];

const ProductIndex = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>companies</TableCell>
              <TableCell align="right">members</TableCell>
              <TableCell align="right">budget</TableCell>
              <TableCell align="right">completion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.companies}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.companies}
                </TableCell>
                <TableCell  align="right" component="th" scope="row">
                  {row.members}
                </TableCell>
                <TableCell align="right">{row.budget}</TableCell>
                <TableCell align="right">{row.completion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductIndex
