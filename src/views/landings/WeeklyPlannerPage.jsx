import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function WeeklyPlannerPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(90deg, #388e3c 0%, #81c784 100%)', color: '#fff', borderRadius: 2, px: 3, py: 2, boxShadow: 2 }}>
        Weekly Planner
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img
          src="/assets/images/LandingPageImages/Weekly-Planner.png"
          alt="Weekly Planner Preview"
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        />
      </Box>
      <Typography variant="h5" gutterBottom>
        About Weekly Planner
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Organize your week efficiently with our Weekly Planner. Schedule tasks, set priorities, and track progress to stay productive and focused.
      </Typography>
      <Typography variant="body1">
        Features include drag-and-drop task management, reminders, and integration with your calendar. Plan your week for maximum efficiency!
      </Typography>
    </Box>
  );
}