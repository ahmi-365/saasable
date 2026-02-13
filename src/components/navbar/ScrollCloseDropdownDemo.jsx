import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Card from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function ScrollCloseDropdownDemo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setAnchorEl(null);
    // Listen to window scroll
    window.addEventListener('scroll', handleScroll, true);
    // Listen to nearest scrollable parent
    let scrollParent = anchorRef.current;
    while (scrollParent && scrollParent !== document.body && scrollParent !== document.documentElement) {
      const overflowY = window.getComputedStyle(scrollParent).overflowY;
      if (overflowY === 'auto' || overflowY === 'scroll') break;
      scrollParent = scrollParent.parentElement;
    }
    if (scrollParent && scrollParent !== window && scrollParent !== document.body && scrollParent !== document.documentElement) {
      scrollParent.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      if (scrollParent && scrollParent !== window && scrollParent !== document.body && scrollParent !== document.documentElement) {
        scrollParent.removeEventListener('scroll', handleScroll, true);
      }
    };
  }, [open]);

  return (
    <Box sx={{ p: 4 }}>
      <Button ref={anchorRef} onClick={handleClick} variant="contained">
        Open Dropdown
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} in={open}>
            <Card sx={{ p: 2, minWidth: 200 }}>
              <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                <Box>
                  <div>This dropdown will close on scroll.</div>
                  <div>Try scrolling the page!</div>
                </Box>
              </ClickAwayListener>
            </Card>
          </Fade>
        )}
      </Popper>
      <Box sx={{ height: 1000 }} />
    </Box>
  );
}
