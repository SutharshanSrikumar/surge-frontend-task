import React ,{useEffect,useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import SearchBar from '../../components/SearchBar';
import { Box, Button } from '@mui/material';
import AddEditNotesPopup from '../../components/AddEditNotesPopup';

export default function NotesList() {
  const [page, setPage] = useState(0);
  // need to change after api integration
  // const [rows, setRows] = useState([]);
  const [rows, setRows] = useState([ { "id":2, "title": "Title1", "description": "Desc"}]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedId, setSelectedId] = useState("");
  const [notesPopup, setNotesPopup] = useState(false);

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

  const handleEdit = (id) => {
    console.log("hhhh ",id);
    if (id) {
      setSelectedId(id)
      setNotesPopup(true)
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",padding:"16px"}}>
        <Box>
          <SearchBar handleSearch={handleSearch} />
        </Box>
        <Box>
          <Button variant="contained" onClick={()=>setNotesPopup(true)}>New Note</Button>
        </Box>
      </Box>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                    No
                </TableCell>
                <TableCell>
                    Title
                </TableCell>
                <TableCell>
                    Description
                </TableCell>
                <TableCell>
                    Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow hover key={row.id} onClick={()=>handleEdit(row.id)}>
                    <TableCell>
                        {index + 1}
                    </TableCell>
                    <TableCell>
                        {row.title}
                    </TableCell>
                    <TableCell>
                        {row.description}
                    </TableCell>
                    <TableCell>
                        <EditIcon color="primary" sx={{cursor:"pointer"}} onClick={()=>handleEdit(row.id)} />
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
      {notesPopup && <AddEditNotesPopup setNotesPopup={setNotesPopup} setSelectedId={setSelectedId} selectedId={selectedId} />}
    </Paper>
  );
}
