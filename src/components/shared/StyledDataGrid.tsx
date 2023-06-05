import { styled } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

const StyledDataGrid = styled(DataGrid)({
	'& .MuiDataGrid-columnHeaderTitle': {
		fontWeight: 'bold',
	},
	'& .MuiDataGrid-columnHeader': {
		'&:focus, &:focus-within': {
			outline: 'none',
		},
	},
	'& .MuiDataGrid-cell': {
		'&:focus, &:focus-within': {
			outline: 'none',
		},
	}
});

export default StyledDataGrid;