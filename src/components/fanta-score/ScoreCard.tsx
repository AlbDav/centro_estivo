import { Delete } from '@mui/icons-material';
import StyledDataGrid from '../shared/StyledDataGrid';
import { IconButton, useTheme } from '@mui/material';
import { GridToolbar } from '@mui/x-data-grid';
import { format } from 'date-fns';

const ScoreCard = ({ rows, isResp, onDelete }: any) => {
  const theme = useTheme();

  const columns = [
	{
		field: 'createdAt',
		headerName: 'Data di creazione',
		flex: 1,
		sortable: true,
		valueGetter: (params: any) => format(new Date(params.row.createdAt), 'yyyy-MM-dd'),
		hide: true,
	},
    {
      field: 'date',
      headerName: 'Data',
      sortable: true,
      flex: 1,
      sortComparator: (v1: any, v2: any) => new Date(v2).getTime() - new Date(v1).getTime(),
      valueGetter: (params: any) => params.row.date
    },
    {
      field: isResp ? 'respName' : 'groupName',
      headerName: isResp ? 'Responsabile' : 'Gruppo',
      sortable: true,
      flex: 1.5,
      valueGetter: (params: any) => isResp ? `${params.row.resp.firstName} ${params.row.resp.lastName}` : params.row.group.name
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
        <IconButton onClick={() => onDelete(params.row)}>
          <Delete sx={{ color: theme.palette.error.main }} />
        </IconButton>
      ),
    }
  ];

  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      autoHeight
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true
        }
      }}
    />
  );
};

export default ScoreCard;