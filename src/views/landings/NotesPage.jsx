import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

const notesCards = [
  {
    title: 'Create Note',
    description: 'Quickly jot down ideas, meeting notes, or reminders.',
    action: 'New Note',
    icon: '📝',
  },
  {
    title: 'Organize Notes',
    description: 'Categorize and tag your notes for easy retrieval.',
    action: 'Organize',
    icon: '📂',
  },
  {
    title: 'Search Notes',
    description: 'Find notes instantly with powerful search.',
    action: 'Search',
    icon: '🔍',
  },
  {
    title: 'Share Notes',
    description: 'Share notes with your team or export as PDF.',
    action: 'Share',
    icon: '📤',
  },
  {
    title: 'Pin Important',
    description: 'Pin important notes to keep them at the top.',
    action: 'Pin Note',
    icon: '📌',
  },
  {
    title: 'Archive Notes',
    description: 'Archive old notes to keep your workspace tidy.',
    action: 'Archive',
    icon: '🗄️',
  },
];

export default function NotesPage() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const coverImg = isDarkMode
    ? '/assets/images/LandingPageImages/NotesDark.png'
    : '/assets/images/LandingPageImages/Notes-Light.png';

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
          background: 'transparent',
        }}
      >
        <img
          src={coverImg}
          alt="Notes Cover"
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
              Notes
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
              Capture, organize, and share your notes with ease. Never lose an idea again!
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
              About Notes
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
              Capture, organize, and share your notes with ease. Never lose an idea again!
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Features include note creation, organization, search, sharing, and archiving. Stay productive and keep your thoughts organized!
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
            {notesCards.map((card) => (
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
              💡 Notes Tips
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Pin important notes for quick access.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Use tags to organize your notes efficiently.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                Archive old notes to reduce clutter.
              </Typography>
              <Typography component="li" variant="body1" sx={{ lineHeight: 1.6 }}>
                Share notes with your team for better collaboration.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
