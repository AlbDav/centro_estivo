import { Delete } from '@mui/icons-material';
import StyledDataGrid from '../shared/StyledDataGrid';
import { IconButton, useTheme } from '@mui/material';

const ScoreCard = ({ rows }: any) => {
  const theme = useTheme();

  const columns = [
    {
      field: 'date',
      headerName: 'Data',
      sortable: true,
      flex: 1,
      sortComparator: (v1: any, v2: any) => new Date(v2).getTime() - new Date(v1).getTime(),
      valueGetter: (params: any) => params.row.date
    },
    {
      field: 'groupName',
      headerName: 'Gruppo',
      sortable: true,
      flex: 1.5,
      valueGetter: (params: any) => params.row.group.name
    },
    {
      field: 'ruleTitle',
      headerName: 'Regola',
      flex: 4,
      sortable: false,
      valueGetter: (params: any) => params.row.rule.title
    },
    {
      field: 'action',
      headerName: 'Elimina',
      flex: 0.5,
      sortable: false,
      renderCell: (params: any) => (
        <IconButton onClick={() => deleteScoreEntry(params.row.id)}>
          <Delete sx={{ color: theme.palette.error.main }} />
        </IconButton>
      ),
    }
  ];

  const deleteScoreEntry = (id: any) => {
    console.log(id);
  }

  return (
    <StyledDataGrid rows={rows} columns={columns} autoHeight />
  );
};

export default ScoreCard;