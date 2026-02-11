import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import Wave from '@/images/graphics/Wave';
import { withAlpha } from '@/utils/colorUtils';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion, useScroll, useTransform } from 'motion/react';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const options = { root: null, rootMargin: '0px', threshold: 0.6 };

export default function Hero17({ chip, headLine, captionLine, videoSrc, videoThumbnail, featureButtons }) {
  const theme = useTheme();
  // Determine if dark mode is active
  const isDark = theme.palette.mode === 'dark';
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  // Handle video play/pause based on intersection with the viewport
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current && !isPlaying) {
            videoRef.current
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <>
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          ...getBackgroundDots(isDark ? theme.vars.palette.grey[900] : theme.vars.palette.grey[300], 2, 35),
          bgcolor: isDark ? 'grey.900' : 'grey.100'
        }}
      />
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Box sx={{ pb: { xs: 3, sm: 4, md: 5 } }}>
            <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: [0.6, 1.15, 0.95, 1] }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${withAlpha(theme.vars.palette.primary.dark, 0)}`,
                    `0 0 20px ${withAlpha(theme.vars.palette.primary.main, 0.8)}`,
                    `0 0 0px ${withAlpha(theme.vars.palette.primary.dark, 0)}`
                  ],
                  borderRadius: '74px'
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'linear' }}
              >
                <Chip
                  variant="outlined"
                  label={chip.label}
                  slotProps={{
                    label: {
                      sx: { py: 0.5, px: 1.5, ...(typeof chip.label === 'string' && { typography: 'caption', color: 'text.secondary' }) }
                    }
                  }}
                  sx={{ bgcolor: isDark ? 'grey.900' : 'grey.100', borderColor: isDark ? theme.palette.divider : 'grey.200' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'linear' }}
              >
                <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                  {headLine}
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Box sx={{ pt: 0.5, pb: 0.75 }}>
                  <Wave />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                  {captionLine}
                </Typography>
              </motion.div>
            </Stack>
          </Box>
          {/* Feature Buttons Section */}
          {featureButtons && featureButtons.length > 0 && (
            <>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 1, sm: 2 },
                    px: { xs: 1, sm: 2 },
                    py: { xs: 0.5, sm: 1 },
                    borderRadius: 3,
                    background: isDark ? theme.palette.background.paper : theme.palette.background.paper,
                    color: isDark ? theme.palette.text.primary : theme.palette.text.primary,
                    boxShadow: isDark ? '0 2px 16px 0 rgba(0,0,0,0.18)' : '0 2px 16px 0 rgba(60,60,60,0.08)',
                    border: `1.5px solid ${theme.palette.divider}`,
                    alignItems: 'center',
                    minHeight: 56,
                  }}
                >
                  {featureButtons.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Button
                          onClick={() => setSelectedFeatureIndex(index)}
                          disableElevation
                          sx={{
                            minWidth: 120,
                            px: 2.5,
                            py: 1.2,
                            borderRadius: 2.5,
                            boxShadow: selectedFeatureIndex === index ? (isDark ? '0 2px 8px 0 rgba(0,0,0,0.18)' : '0 2px 8px 0 rgba(60,60,60,0.10)') : 'none',
                            background: 'transparent',
                            color: selectedFeatureIndex === index ? theme.palette.primary.main : theme.palette.text.secondary,
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            textTransform: 'none',
                            border: '2px solid transparent',
                            outline: 'none',
                            outlineOffset: 0,
                            transition: 'all 0.18s cubic-bezier(.4,2,.6,1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            position: 'relative',
                            zIndex: selectedFeatureIndex === index ? 2 : 1,
                            '&:hover': {
                              border: '2px solid transparent',
                              color: theme.palette.primary.dark,
                              background: isDark ? theme.palette.action.selected : theme.palette.action.hover,
                            },
                          }}
                        >
                          {/* Optional icon support for the future: {feature.icon && <Box sx={{mr:1}}>{feature.icon}</Box>} */}
                          {feature.name}
                        </Button>
                        {selectedFeatureIndex === index && (
                          <Box
                            component={motion.div}
                            layoutId="active-feature-tab-border"
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              borderRadius: 2.5,
                              border: `2px solid ${theme.palette.primary.main}`,
                              pointerEvents: 'none',
                              zIndex: 3,
                            }}
                            transition={{ type: 'spring', stiffness: 260, damping: 32 }}
                          />
                        )}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Box>
              {/* Display Selected Feature Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 0.9 }}
                key={selectedFeatureIndex}
                transition={{ duration: 0.5 }}
                style={{ scale }}
              >
                <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
                  <Box
                    component="img"
                    src={featureButtons[selectedFeatureIndex]?.image}
                    alt={featureButtons[selectedFeatureIndex]?.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      objectFit: 'cover',
                      borderRadius: 1,
                      backgroundColor: isDark ? theme.palette.grey[900] : theme.palette.grey[100]
                    }}
                  />
                </GraphicsCard>
              </motion.div>
            </>
          )}
          {/* Fallback to Video if no Feature Buttons */}
          {(!featureButtons || featureButtons.length === 0) && videoSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{ scale }}
            >
              <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300' }}>
                <video
                  playsInline
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  style={{ display: 'flex', objectFit: 'cover' }}
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  poster={videoThumbnail}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </GraphicsCard>
            </motion.div>
          )}
        </Box>
      </ContainerWrapper>
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.string,
  featureButtons: PropTypes.array
};
