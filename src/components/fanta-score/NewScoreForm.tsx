// components/NewScoreForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent } from '@mui/material';

const NewRuleForm = ({ onCancel, onSave }: any) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [points, setPoints] = useState('');
	const [pointDescription, setPointDescription] = useState('');

	const handleSubmit = () => {
		onSave({ title, description, points: parseInt(points), pointDescription });
		setTitle('');
		setDescription('');
		setPoints('');
		setPointDescription('');
	};

	return (
		<Card variant="outlined">
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
					</Grid>
					<Grid item xs={12}>
						<TextField label="Description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Points"
							fullWidth
							value={points}
							onChange={(e) => setPoints(e.target.value)}
							type="number"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label="Point Description"
							fullWidth
							value={pointDescription}
							onChange={(e) => setPointDescription(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary" onClick={handleSubmit}>
							Salva
						</Button>
						<Button variant="outlined" color="secondary" onClick={onCancel} style={{ marginLeft: '10px' }}>
							Annulla
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default NewRuleForm;