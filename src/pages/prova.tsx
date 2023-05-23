import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { styled } from "@mui/system";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-row.Mui-selected': {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const Prova = () => {
  const [selectedRow, setSelectedRow] = React.useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", width: 100 },
  ];

  const rows = [
    { id: 1, name: "Alice", age: 35 },
    { id: 2, name: "Bob", age: 42 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "Alice", age: 35 },
    { id: 5, name: "Bob", age: 42 },
    { id: 6, name: "Charlie", age: 28 },
  ];

  const handleSelectionModelChange = (newSelectionModel: any) => {
    setSelectedRow(newSelectionModel[newSelectionModel.length - 1]);
  };

  return (
    <div style={{ height: 300, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={handleSelectionModelChange}
        rowSelectionModel={selectedRow ? [selectedRow] : []}
		slots={{ toolbar: GridToolbar }}
		slotProps={{
			toolbar: {
				showQuickFilter: true
			}
		}}
      />
    </div>
  );
};

export default Prova;