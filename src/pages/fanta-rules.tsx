// pages/rules.js
import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listFantaRules, listFantaScoreEntries } from '../graphql/queries';
import { createFantaRule, deleteFantaRule } from '../graphql/mutations';
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Typography, useTheme } from '@mui/material';
import NewRuleForm from '../components/fanta-rules/NewRuleForm';
import RuleCard from '@/components/fanta-rules/RuleCard';
import { ListFantaRulesQuery } from '@/API';
import { Add } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const RuleBox = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	borderBottom: `1px solid ${theme.palette.divider}`,
	'&:last-child': {
		borderBottom: 'none',
	},
}));

const StyledUl = styled('ul')({
	marginLeft: '16px',
  '& li': {
    marginBottom: '7px',
  }
});

const StyledCardHeader = styled(CardHeader)({
	textAlign: 'center',
	paddingBottom: 0,
	'& .MuiCardHeader-title': {
		fontSize: '1.8rem',
	},
});

const FantaRules = () => {
	const [authChecked, setAuthChecked] = useState(false);
	const { isUserLogged, isUserAdmin, isUserRef } = useAuth();
	const router = useRouter();

	const theme = useTheme();

	useEffect(() => {
		if (isUserLogged) {
			fetchRules();
			setAuthChecked(true);
		} else if (isUserLogged === false) {
			router.push({ pathname: '/account', query: { redirect: router.pathname } });
		}
	}, [isUserLogged]);

	const [positiveGroupRules, setPositiveGroupRules] = useState([]);
	const [negativeGroupRules, setNegativeGroupRules] = useState([]);
	const [positiveRespRules, setPositiveRespRules] = useState([]);
	const [negativeRespRules, setNegativeRespRules] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
	const [ruleToDelete, setRuleToDelete] = useState<any | null>(null);

	const fetchRules = async () => {
		try {
			const ruleData = await API.graphql<ListFantaRulesQuery>({ query: listFantaRules }) as any;
			const ruleItems = ruleData.data.listFantaRules.items.sort((a: any, b: any) => b.points - a.points);
			splitRules(ruleItems);
			setIsLoading(false);
		} catch (error) {
			console.log('Error fetching rules:', error);
		}
	};

	const addRule = async (rule: any) => {
		try {
			if (!rule.title || !rule.description || (rule.pointDescription === '' && rule.points === 0)) {
				throw new Error('Missing mandatory fields');
			}

			rule.pointDescription = rule.pointDescription ? rule.pointDescription : rule.points.toString();

			await API.graphql({ query: createFantaRule, variables: { input: rule } }) as any;
			fetchRules();
			setShowForm(false);
		} catch (error) {
			console.log('Error adding rule:', error);
		}
	};

	const deleteRule = async (ruleId: string) => {
		try {
			if (await checkScoreEntry(ruleId)) {
				throw new Error('Regola presente in una score entry');
			};
			await API.graphql({ query: deleteFantaRule, variables: { input: { id: ruleId } } }) as any;
			fetchRules();
		} catch (error) {
			console.log('Error deleting rule:', error);
		}
	};

	const checkScoreEntry = async (ruleId: any) => {
		const existingEntries = await API.graphql({
			query: listFantaScoreEntries,
			variables: {
				filter: {
					fantaScoreEntryRuleId: { eq: ruleId },
				},
				limit: 1000
			}
		}) as any;
		return existingEntries.data.listFantaScoreEntries.items.length > 0;
	};

	const splitRules = (rules: any) => {
		let positiveGroups = rules.filter((el: any) => el.points >= 0 && !el.isResp);
		let negativeGroups = rules.filter((el: any) => el.points < 0 && !el.isResp);
		let positiveResps = rules.filter((el: any) => el.points >= 0 && el.isResp);
		let negativeResps = rules.filter((el: any) => el.points < 0 && el.isResp);

		setPositiveGroupRules(positiveGroups);
		setNegativeGroupRules(negativeGroups);
		setPositiveRespRules(positiveResps);
		setNegativeRespRules(negativeResps);
	};

	const toggleDeleteDialog = (rule?: any) => {
		if (!deleteDialogVisible) {
			setRuleToDelete(rule);
			setDeleteDialogVisible(true);
		} else {
			setDeleteDialogVisible(false);
			setRuleToDelete(null);
		}
	}

	const deleteAndClose = () => {
		deleteRule(ruleToDelete.id);
		toggleDeleteDialog();
	}

	if (!authChecked) {
		return (
			<Box height="calc(100vh - 64px)" display="flex" alignItems="center" justifyContent="center">
				<CircularProgress color="secondary" size={60} />
			</Box>
		)
	}

	return (
		<>
			<Container>
				<Box marginTop={2}>
					<Typography variant="h4" align="center" color="text.primary">Regolamento</Typography>
					<Typography component="div" variant="body1" color="text.primary" marginX={1} marginTop={1}>
						<StyledUl>
							<li>
								<strong>Ogni educatore o responsabile</strong> del Centro Estivo avrà la possibilità di <strong>creare il proprio Team</strong>, che sarà formato da <strong>3 Gruppi</strong> e <strong>1 Responsabile</strong>.
							</li>
              <li>
								Per creare la propria squadra bisognerà andare in <span style={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}><Link href="/fanta-teams">Classifica</Link></span> e cliccare su <strong>Crea la tua squadra</strong>.	
							</li>
							<li>
								<strong>Uno dei 3 Gruppi</strong> scelti dovrà essere <strong>il proprio</strong>. Se il giocatore è un responsabile, dovrà scegliere <strong>se stesso</strong>.
							</li>
							<li>
								Tra i 3 Gruppi scelti bisogna sceglierne 1 che sarà il <strong>Gruppo Leader</strong> e prenderà il <strong>doppio dei punti</strong>.
							</li>
							<li>
								Il Team dovrà essere creato <strong>entro il 25 maggio</strong>.
							</li>
							<li>
								Durante il Centro Estivo sarà possibile <strong>prendere o perdere punti</strong> in base ai bonus e ai malus <strong>elencati di seguito</strong>.
							</li>
							<li>
								I bonus e i malus <strong>non sono cumulabili</strong> alll&#39;interno dello stesso giorno.
							</li>
							<li>
								I punti e la classifica saranno <strong>aggiornati ogni giorno</strong> e saranno visibili nella sezione <span style={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}><Link href="/fanta-teams">Classifica</Link></span>.
							</li>
						</StyledUl>
					</Typography>
				</Box>
				{(isUserAdmin || isUserRef) && <Box marginTop={3} display="flex" justifyContent="center">
					{showForm ? (
						<NewRuleForm
							onCancel={() => setShowForm(false)}
							onSave={(rule: any) => addRule(rule)}
						/>
					) : (
						<Fab variant="extended" color="secondary"
							sx={{
								color: "white",
							}}
							aria-label="add" onClick={() => setShowForm(true)}>
							<Add sx={{ mr: 1 }} />
							Aggiungi regola
						</Fab>
					)}
				</Box>}
				<Box marginY={3}>
					<Card variant="elevation">
						<StyledCardHeader title="Bonus Gruppi" />
						<CardContent sx={{ paddingTop: 0 }}>
							{isLoading ?
								<Box display="flex" justifyContent="center">
									<CircularProgress color="secondary" />
								</Box>
								: positiveGroupRules.map((rule: any) => (
									<RuleBox key={rule.id}>
										<RuleCard rule={rule} isUserAdmin={isUserAdmin} onDelete={toggleDeleteDialog} />
									</RuleBox>
								))}
						</CardContent>
					</Card>
				</Box>
				<Box marginTop={3}>
					<Card variant="elevation">
						<StyledCardHeader title="Bonus Responsabili" />
						<CardContent sx={{ paddingTop: 0 }}>
							{isLoading ?
								<Box display="flex" justifyContent="center">
									<CircularProgress color="secondary" />
								</Box>
								: positiveRespRules.map((rule: any) => (
									<RuleBox key={rule.id}>
										<RuleCard rule={rule} isUserAdmin={isUserAdmin} onDelete={toggleDeleteDialog} />
									</RuleBox>
								))}
						</CardContent>
					</Card>
				</Box>
				<Box marginTop={3}>
					<Card variant="elevation">
						<StyledCardHeader title="Malus Gruppi" />
						<CardContent sx={{ paddingTop: 0 }}>
							{isLoading ?
								<Box display="flex" justifyContent="center">
									<CircularProgress color="secondary" />
								</Box>
								: negativeGroupRules.map((rule: any) => (
									<RuleBox key={rule.id}>
										<RuleCard rule={rule} isUserAdmin={isUserAdmin} onDelete={toggleDeleteDialog} />
									</RuleBox>
								))}
						</CardContent>
					</Card>
				</Box>
				<Box marginTop={3}>
					<Card variant="elevation">
						<StyledCardHeader title="Malus Responsabili" />
						<CardContent sx={{ paddingTop: 0 }}>
							{isLoading ?
								<Box display="flex" justifyContent="center">
									<CircularProgress color="secondary" />
								</Box>
								: negativeRespRules.map((rule: any) => (
									<RuleBox key={rule.id}>
										<RuleCard rule={rule} isUserAdmin={isUserAdmin} onDelete={toggleDeleteDialog} />
									</RuleBox>
								))}
						</CardContent>
					</Card>
				</Box>
			</Container>

			<Dialog open={deleteDialogVisible} onClose={() => setDeleteDialogVisible(false)}>
				<DialogTitle>Eliminare la regola?</DialogTitle>
				<DialogContent>
					{ruleToDelete ? (<DialogContentText>
						Sei sicuro di voler eliminare la regola <strong>{ruleToDelete && ruleToDelete.title}: {ruleToDelete && ruleToDelete.description}</strong>?
					</DialogContentText>) : (
						<Box display="flex" justifyContent="center">
							<CircularProgress color="secondary" />
						</Box>
					)}
				</DialogContent>
				<DialogActions sx={{ marginRight: 2 }}>
					<Button onClick={toggleDeleteDialog} variant="outlined" color="secondary">
						Annulla
					</Button>
					<Button onClick={deleteAndClose} color="error" variant="contained">
						Elimina
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default FantaRules;