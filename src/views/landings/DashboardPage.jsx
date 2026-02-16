import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';

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
  const coverImg = '/mnt/user-data/uploads/1771235218212_DashboardLight.png';

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 6 }}>
      {/* Hero Cover Image */}
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <img
          src={coverImg}
          alt="Dashboard Cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            opacity: 0.9,
          }}
        />
        
        {/* Overlay Text */}
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
              ProductivityHub Dashboard
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
              Your complete solution for tracking tasks, goals, and productivity metrics
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
              About This Dashboard
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
              This dashboard provides a comprehensive overview of your SaaS business metrics, user activity, and key performance indicators. It is designed to help you monitor growth, track engagement, and make data-driven decisions with ease.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Features include real-time analytics, customizable widgets, user management, and seamless integration with other tools. Explore the dashboard to gain valuable insights and optimize your workflow.
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
          {dashboardCards.map((card, idx) => (
            <Grid item xs={12} sm={6} md={4} key={card.title}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                  borderColor: 'primary.main',
                }
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      color: 'text.primary',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      py: 1.25,
                    }}
                  >
                    {card.action}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Activity */}
        <Card sx={{ 
          mb: 6,
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
              Recent Activity
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                User John Doe signed up <Chip label="2 minutes ago" size="small" sx={{ ml: 1 }} />
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Payment received: $99 <Chip label="10 minutes ago" size="small" sx={{ ml: 1 }} />
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Integration with Slack enabled <Chip label="1 hour ago" size="small" sx={{ ml: 1 }} />
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Team member Jane Smith completed a task <Chip label="2 hours ago" size="small" sx={{ ml: 1 }} />
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.6 }}>
                New feedback received from user Alice <Chip label="3 hours ago" size="small" sx={{ ml: 1 }} />
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Dashboard Tips */}
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
              💡 Dashboard Tips
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Use the analytics card to monitor your KPIs in real time.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Customize your dashboard widgets for a personalized experience.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Invite team members to collaborate and assign tasks.
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.6 }}>
                Check notifications regularly for important updates.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}