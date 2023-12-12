// components/DataTableComponent.tsx
import React, { useEffect,useState } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Avatar,
  Button,
} from '@mui/material';
import { useEmployeeStore, initData, EmployeeData } from '../store/store';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';



const EmployeeTable: React.FC = () => {

  const { data, setSelectedEmployee, setActiveTab, setTabName} = useEmployeeStore();
  const router = useRouter();
  // const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(null);

  

  

  const handleEdit = (index: number) => {
    // Set the selected employee based on the index
    console.log("edittt")
    setSelectedEmployee(data[index]);
    // Navigate to the edit tab or section
    setTabName('Edit Employee')
    setActiveTab(1)
    // You can use routing or some other mechanism to switch to the edit view
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { t } = useTranslation();

  return (
    <Paper elevation={3} style={{ marginTop: '20px' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{row.first_name} {row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell><Avatar alt={row.first_name} src={row.avatar}/></TableCell>
                  <TableCell><Button type="button" variant="contained" className='bg-blue-500'   onClick={() => handleEdit(index)}>
                    Edit
                  </Button></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EmployeeTable;
