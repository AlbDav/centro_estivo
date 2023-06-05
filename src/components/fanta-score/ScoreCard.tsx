import { Delete } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

const ScoreCard = ({ rows }: any) => {

  const columns = [
    {
      field: 'date',
      headerName: 'Data',
      sortable: true,
      sortComparator: (v1: any, v2: any) => new Date(v2).getTime() - new Date(v1).getTime(),
      valueGetter: (params: any) => params.row.date
    },
    {
      field: 'groupName',
      headerName: 'Gruppo',
      sortable: true,
      valueGetter: (params: any) => params.row.name
    },
    {
      field: 'ruleTitle',
      headerName: 'Regola',
      valueGetter: (params: any) => params.row.title
    },
    {
      field: 'action',
      headerName: 'Azione',
      renderCell: (params: any) => (
        <Delete onClick={() => deleteScoreEntry(params.row.id)} />
      ),
    }
  ];

  const deleteScoreEntry = (id: any) => {
    console.log(id);
  }

  return (
    <DataGrid rows={rows} columns={columns} autoHeight />
  );
};

export default ScoreCard;