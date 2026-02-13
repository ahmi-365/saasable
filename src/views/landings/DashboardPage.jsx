import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const dashboardCards = [
  {
    title: 'User Analytics',
    description: 'Track user signups, active users, and engagement trends in real time.',
    action: 'View Analytics',
  },
  {
    title: 'Revenue Overview',
    description: 'Monitor your monthly recurring revenue, churn rate, and growth metrics.',
    action: 'View Revenue',
  },
  {
    title: 'Tasks & Productivity',
    description: 'Manage team tasks, deadlines, and productivity stats from one place.',
    action: 'Go to Tasks',
  },
  {
    title: 'Integrations',
    description: 'Connect with third-party tools and manage integrations easily.',
    action: 'Manage Integrations',
  },
  {
    title: 'Notifications',
    description: 'See system alerts, user feedback, and important updates.',
    action: 'View Notifications',
  },
  {
    title: 'Settings',
    description: 'Configure your dashboard, manage users, and set preferences.',
    action: 'Go to Settings',
  },
];

export default function DashboardPage() {
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom sx={{ background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)', color: '#fff', borderRadius: 2, px: 3, py: 2, boxShadow: 2 }}>
        Dashboard
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img
          src="/assets/images/LandingPageImages/Dashboard.png"
          alt="Dashboard Preview"
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        />
      </Box>
      <Typography variant="h5" gutterBottom>
        About This Dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This dashboard provides a comprehensive overview of your SaaS business metrics, user activity, and key performance indicators. It is designed to help you monitor growth, track engagement, and make data-driven decisions with ease.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Features include real-time analytics, customizable widgets, user management, and seamless integration with other tools. Explore the dashboard to gain valuable insights and optimize your workflow.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Quick Access
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {dashboardCards.map((card, idx) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{card.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{card.description}</Typography>
                <Button variant="contained" fullWidth>{card.action}</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" gutterBottom>
        Recent Activity
      </Typography>
      <Box sx={{ mb: 4 }}>
        <ul>
          <li>User John Doe signed up (2 minutes ago)</li>
          <li>Payment received: $99 (10 minutes ago)</li>
          <li>Integration with Slack enabled (1 hour ago)</li>
          <li>Team member Jane Smith completed a task (2 hours ago)</li>
          <li>New feedback received from user Alice (3 hours ago)</li>
        </ul>
      </Box>
      <Typography variant="h5" gutterBottom>
        Dashboard Tips
      </Typography>
      <Box sx={{ mb: 4 }}>
        <ul>
          <li>Use the analytics card to monitor your KPIs in real time.</li>
          <li>Customize your dashboard widgets for a personalized experience.</li>
          <li>Invite team members to collaborate and assign tasks.</li>
          <li>Check notifications regularly for important updates.</li>
        </ul>
      </Box>
    </Box>
  );
}
