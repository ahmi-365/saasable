import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TeamPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(90deg, #8e24aa 0%, #ba68c8 100%)', color: '#fff', borderRadius: 2, px: 3, py: 2, boxShadow: 2 }}>
        Team
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img
          src="/assets/images/LandingPageImages/Team.png"
          alt="Team Preview"
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        />
      </Box>
      <Typography variant="h5" gutterBottom>
        About Team
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Collaborate with your team, assign roles, and manage projects efficiently. The Team page helps you build synergy and achieve goals together.
      </Typography>
      <Typography variant="body1">
        Features include team management, project tracking, and communication tools. Empower your team for success!
      </Typography>
    </Box>
  );
}