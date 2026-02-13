import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function GoalsPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(90deg, #fbc02d 0%, #ffd54f 100%)', color: '#fff', borderRadius: 2, px: 3, py: 2, boxShadow: 2 }}>
        Goals
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img
          src="/assets/images/LandingPageImages/Goals.png"
          alt="Goals Preview"
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        />
      </Box>
      <Typography variant="h5" gutterBottom>
        About Goals
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Set, track, and achieve your goals with our intuitive Goals page. Visualize progress, break down objectives, and celebrate milestones.
      </Typography>
      <Typography variant="body1">
        Features include goal setting, progress tracking, and motivational reminders. Stay on top of your ambitions and reach new heights!
      </Typography>
    </Box>
  );
}