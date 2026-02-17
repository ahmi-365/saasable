import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { FolderKanban, AlarmClock, CalendarDays, TrendingUp, Star, Users } from 'lucide-react';
const plannerCards = [
       {
	       title: 'Drag-and-Drop Tasks',
	       description: 'Easily organize your week by dragging and dropping tasks into each day.',
	       // action removed
	       icon: FolderKanban,
       },
       {
	       title: 'Reminders',
	       description: 'Set reminders for important tasks and never miss a deadline.',
	       // action removed
	       icon: AlarmClock,
       },
       {
	       title: 'Calendar Integration',
	       description: 'Sync your planner with your favorite calendar apps for seamless scheduling.',
	       // action removed
	       icon: CalendarDays,
       },
       {
	       title: 'Progress Tracking',
	       description: 'Track your weekly progress and stay motivated to achieve your goals.',
	       // action removed
	       icon: TrendingUp,
       },
       {
	       title: 'Priority Setting',
	       description: 'Set priorities for your tasks to focus on what matters most.',
	       // action removed
	       icon: Star,
       },
       {
	       title: 'Collaboration',
	       description: 'Share your planner and collaborate with your team or family.',
	       // action removed
	       icon: Users,
       },
];

export default function WeeklyPlannerPage() {
	const theme = useTheme();
	const isDarkMode = theme.palette.mode === 'dark';
	const coverImg = isDarkMode
		? '/assets/images/LandingPageImages/Weekly-Planner-Dark.png'
		: '/assets/images/LandingPageImages/Weekly-Planner-Light.png';

	return (
		<Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 6 }}>
			{/* Hero Section with Blurred Image and Text */}
			<Box
				sx={{
					width: '100%',
					height: { xs: '40vh', sm: '50vh', md: '60vh' },
					minHeight: 350,
					maxHeight: 600,
					mb: 0,
					overflow: 'hidden',
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					background: isDarkMode
						? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
						: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				}}
			>
				<img
					src={coverImg}
					alt="Weekly Planner Cover"
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						display: 'block',
						opacity: 0.9,
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 1,
					}}
				/>
				{/* Overlay for text visibility */}
				<Box sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 2,
					background: 'rgba(0, 0, 0, 0.4)',
				}}>
					<Box sx={{ textAlign: 'center', px: 2 }}>
						<Typography
							variant="h2"
							sx={{
								color: '#fff',
								fontWeight: 800,
								mb: 2,
								fontSize: { xs: '2rem', md: '3.5rem' },
								textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
							}}
						>
							Weekly Planner
						</Typography>
						<Typography
							variant="h6"
							sx={{
								color: 'rgba(255, 255, 255, 0.95)',
								maxWidth: 700,
								mx: 'auto',
								textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
							}}
						>
							Organize your week efficiently with drag-and-drop tasks, reminders, and calendar integration.
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Main Content */}
			<Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 10 }}>
				{/* About Section */}
				<Card sx={{
					mb: 6,
					bgcolor: 'background.paper',
					boxShadow: 5,
					borderRadius: 3,
					border: 1,
					borderColor: 'divider',
				}}>
					<CardContent sx={{ p: 5 }}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: 700,
								color: 'text.primary',
								mb: 3,
							}}
						>
							About Weekly Planner
						</Typography>
						<Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
							Organize your week efficiently with our Weekly Planner. Schedule tasks, set priorities, and track progress to stay productive and focused.
						</Typography>
						<Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
							Features include drag-and-drop task management, reminders, and integration with your calendar. Plan your week for maximum efficiency!
						</Typography>
					</CardContent>
				</Card>

				{/* Quick Access Cards */}
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						fontWeight: 700,
						color: 'text.primary',
						mb: 3,
					}}
				>
					Quick Access
				</Typography>
				<Grid container spacing={3} sx={{ mb: 6 }}>
					{plannerCards.map((card, idx) => (
						<Grid item xs={12} sm={6} md={4} key={card.title}>
							<Card sx={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								bgcolor: 'background.paper',
								border: 1,
								borderColor: 'divider',
								borderRadius: 3,
								transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
								cursor: 'pointer',
								position: 'relative',
								overflow: 'hidden',
								'&:hover': {
									transform: 'translateY(-8px)',
									boxShadow: isDarkMode
										? '0 12px 28px rgba(56, 142, 60, 0.18)'
										: '0 12px 28px rgba(56, 142, 60, 0.10)',
									borderColor: 'primary.main',
									'& .card-icon': {
										transform: 'scale(1.2) rotate(10deg)',
									},
									'& .card-arrow': {
										transform: 'translateX(8px)',
										opacity: 1,
									}
								}
							}}>
								{/* Decorative gradient overlay */}
								<Box sx={{
									position: 'absolute',
									top: 0,
									right: 0,
									width: '120px',
									height: '120px',
									background: `linear-gradient(135deg, ${isDarkMode ? 'rgba(56, 142, 60, 0.10)' : 'rgba(129, 199, 132, 0.08)'} 0%, transparent 100%)`,
									borderRadius: '0 0 0 100%',
									pointerEvents: 'none',
								}} />

								<CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
									{/* Icon and Title Row */}
									<Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
										       <Box sx={{
											       width: 56,
											       height: 56,
											       borderRadius: 2.5,
											       bgcolor: isDarkMode ? 'rgba(56, 142, 60, 0.15)' : 'rgba(129, 199, 132, 0.13)',
											       display: 'flex',
											       alignItems: 'center',
											       justifyContent: 'center',
											       fontSize: '1.75rem',
											       transition: 'transform 0.3s ease',
										       }}
										       className="card-icon"
										       >
											       {card.icon && <card.icon size={32} color={isDarkMode ? '#81c784' : '#388e3c'} />}
										       </Box>
									</Box>
									{/* Title */}
									<Typography
										variant="h6"
										sx={{
											fontWeight: 700,
											color: 'text.primary',
											mb: 1.5,
											fontSize: '1.1rem',
										}}
									>
										{card.title}
									</Typography>
									{/* Description */}
									<Typography
										variant="body2"
										sx={{
											color: 'text.secondary',
											lineHeight: 1.7,
											flex: 1,
											fontSize: '0.9rem',
										}}
									>
										{card.description}
									</Typography>
									{/* Action Link */}
									   {/* Action Link and arrow removed */}
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>

				{/* Tips Section */}
				<Card sx={{
					bgcolor: 'background.paper',
					border: 1,
					borderColor: 'divider',
				}}>
					<CardContent sx={{ p: 4 }}>
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								fontWeight: 700,
								color: 'text.primary',
								mb: 3,
							}}
						>
							💡 Planner Tips
						</Typography>
						<Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
							<Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
								Use drag-and-drop to quickly rearrange your weekly tasks.
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
								Set reminders for high-priority items to stay on track.
							</Typography>
							<Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
								Integrate with your calendar for a unified schedule view.
							</Typography>
							<Typography component="li" variant="body1" sx={{ lineHeight: 1.6 }}>
								Review your progress at the end of each week to improve productivity.
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
}

