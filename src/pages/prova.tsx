import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material";

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiDataGrid-row.Mui-selected": {
      backgroundColor: alpha(theme.palette.secondary.light, 0.5),
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.dark, 0.5),
      },
    },
  },
}));

const Prova = () => {
  const classes = useStyles();

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
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={handleSelectionModelChange}
        rowSelectionModel={selectedRow ? [selectedRow] : []}
      />
    </div>
  );
};

export default Prova;