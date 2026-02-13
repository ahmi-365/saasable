import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TimeTrackingPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(90deg, #0288d1 0%, #4fc3f7 100%)', color: '#fff', borderRadius: 2, px: 3, py: 2, boxShadow: 2 }}>
        Time Tracking
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img
          src="/assets/images/LandingPageImages/Time-Tracking.png"
          alt="Time Tracking Preview"
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        />
      </Box>
      <Typography variant="h5" gutterBottom>
        About Time Tracking
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Track your work hours, manage timesheets, and analyze productivity with our Time Tracking page. Stay accountable and optimize your workflow.
      </Typography>
      <Typography variant="body1">
        Features include timer, manual entry, reports, and integration with payroll systems. Make every minute count!
      </Typography>
    </Box>
  );
}