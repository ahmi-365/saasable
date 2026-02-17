import PropTypes from 'prop-types';
import { NextLink } from '@/components/routes';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { motion } from 'motion/react';
import PreviewCard from '@/components/cards/PreviewCard';

export default function MegaMenu4({ menuItems, footerData, popperWidth = 936, footerSX }) {

  return (
    <Box sx={{ maxWidth: { xs: 1, md: popperWidth } }}>
      <Box
        sx={{
          maxHeight: { xs: 340, md: 420 },
          overflowY: 'auto',
          p: 1,
          bgcolor: 'background.paper',
        }}
        onWheel={e => e.stopPropagation()} // Prevent Popper from closing on scroll
      >
        <Grid container spacing={1}>
          {menuItems.map((item, index) => (
            <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link
                  {...(item.link && {
                    component: NextLink,
                    underline: 'none',
                    ...item.link,
                    sx: { display: 'block', ...item.link?.sx },
                    onClick: () => onMenuItemClick && onMenuItemClick()
                  })}
                  aria-label={item.title}
                >
                  <PreviewCard {...item} />
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      {footerData && <Box sx={{ p: 2.5, bgcolor: 'grey.100', ...footerSX }}>{footerData}</Box>}
    </Box>
  );
}

MegaMenu4.propTypes = { menuItems: PropTypes.array, footerData: PropTypes.node, popperWidth: PropTypes.number, footerSX: PropTypes.any, onMenuItemClick: PropTypes.func };
