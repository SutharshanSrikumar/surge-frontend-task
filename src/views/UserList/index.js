import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DetailPopup from '../../components/DetailPopup';
import SearchBar from '../../components/SearchBar';
import { Box, Button } from '@mui/material';
import CreateUser from '../../components/CreateUserPopup';

export default function UserList() {
  const [page, setPage] = useState(0);
  // need to change after api integration
  // const [rows, setRows] = useState([]);
  const [rows, setRows] = useState([{
    "id": 1,
    "firstName": "Test",
    "lastName": "abc",
    "email": "abc@gmail.com",
    "dateOfBirth": "2003-05-08",
    "mobile": "0771458476",
    "accountType": "1",
    "status": false,
    "firstTime": true
  }]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedId, setSelectedId] = useState("");
  const [newUserPopup, setNewUserPopup] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = async (searchKey) => {
    if (searchKey) {
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "16px" }}>
        <Box>
          <SearchBar handleSearch={handleSearch} />
        </Box>
        <Box>
          <Button variant="contained" onClick={() => setNewUserPopup(true)}>New User</Button>
        </Box>
      </Box>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                First Name
              </TableCell>
              <TableCell>
                Last Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Account Type
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover style={{cursor:"pointer"}} key={row.id} onClick={() => setSelectedId(row.id)}>
                    <TableCell>
                      {row.firstName}
                    </TableCell>
                    <TableCell>
                      {row.lastName}
                    </TableCell>
                    <TableCell>
                      {row.email}
                    </TableCell>
                    <TableCell>
                      {row.accountType}
                    </TableCell>
                    <TableCell>
                      {row.status ? <CheckIcon htmlColor="green" /> : <ClearIcon htmlColor="red" />}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {selectedId && <DetailPopup setSelectedId={setSelectedId} selectedId={selectedId} />}
      {newUserPopup && <CreateUser setNewUserPopup={setNewUserPopup} />}
    </Paper>
  );
}
