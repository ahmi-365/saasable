import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

const integrationsCards = [
  {
    title: 'Connect Apps',
    description: 'Integrate with your favorite productivity and communication tools.',
    action: 'Connect',
    icon: '🔗',
  },
  {
    title: 'API Access',
    description: 'Access and manage your API keys for custom integrations.',
    action: 'Manage API',
    icon: '🛠️',
  },
  {
    title: 'Automation',
    description: 'Automate workflows between your apps and services.',
    action: 'Automate',
    icon: '🤖',
  },
  {
    title: 'Webhooks',
    description: 'Set up webhooks for real-time data sync.',
    action: 'Setup Webhook',
    icon: '🌐',
  },
  {
    title: 'Marketplace',
    description: 'Browse and install integrations from our marketplace.',
    action: 'Browse',
    icon: '🛒',
  },
  {
    title: 'Support',
    description: 'Get help and documentation for integration setup.',
    action: 'Get Help',
    icon: '💡',
  },
];

export default function IntegrationsPage() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const coverImg = isDarkMode
    ? '/assets/images/LandingPageImages/Integrations-Dark.png'
    : '/assets/images/LandingPageImages/Integrations-Light.png';

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 6 }}>
      {/* Hero Section with Image and Overlay */}
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
            : 'linear-gradient(135deg, #0288d1 0%, #4fc3f7 100%)',
        }}
      >
        <img
          src={coverImg}
          alt="Integrations Cover"
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
              Integrations
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
              Connect your favorite tools, automate workflows, and unlock new productivity with integrations.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ mt: -8, position: 'relative', zIndex: 10 }}>
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
              About Integrations
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
              Connect your favorite tools, automate workflows, and unlock new productivity with integrations.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Features include app connections, API access, automation, webhooks, and marketplace. Expand your capabilities easily!
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Quick Access Cards */}
      <Container maxWidth="lg" sx={{ mt: 0, position: 'relative', zIndex: 10 }}>
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
        <Box sx={{ flexGrow: 1 }}>
          <Box component="div" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
            {integrationsCards.map((card) => (
              <Card
                key={card.title}
                sx={{
                  width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                  minWidth: 260,
                  flex: '1 1 260px',
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
                    },
                  },
                }}
              >
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
                    <Box
                      sx={{
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
                      {card.icon}
                    </Box>
                    {/* Arrow indicator */}
                    <Box
                      className="card-arrow"
                      sx={{
                        transition: 'all 0.3s ease',
                        opacity: 0.6,
                        color: 'primary.main',
                        fontSize: '1.25rem',
                      }}
                    >
                      →
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
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mt: 2.5,
                    pt: 2,
                    borderTop: 1,
                    borderColor: 'divider',
                  }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                      }}
                    >
                      {card.action}
                    </Typography>
                    <Box sx={{
                      fontSize: '0.875rem',
                      color: 'primary.main',
                      transition: 'transform 0.3s ease',
                    }}>
                      →
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        {/* Tips Section */}
        <Card sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 700, color: 'text.primary', mb: 3 }}
            >
              💡 Integrations Tips
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Connect only the tools you use regularly.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Use automation to save time on repetitive tasks.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Check the marketplace for new integrations.
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.6 }}>
                Contact support for help with setup or troubleshooting.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
