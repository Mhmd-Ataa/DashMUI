import { IconButton, Toolbar, Typography, styled, InputBase, useTheme } from '@mui/material';
import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import { Box, Stack } from '@mui/system';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 240;

/***********/

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const TopBar = ({ open, handleDrawerOpen, mode ,setMode}) => {
  const theme = useTheme();
  return <>
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Box flexGrow={1} />

        <Stack direction={"row"}>

          {theme.palette.mode === "light" ? (
            <IconButton aria-label="delete" color="inherit" onClick={() => {
              localStorage.setItem("currentMode" , theme.palette.mode === "light" ? "dark" : "light")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
            }}>
              <WbSunnyIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="delete" color="inherit" onClick={() => {
              localStorage.setItem("currentMode" , theme.palette.mode === "light" ? "dark" : "light")
              setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
            }}>
              <DarkModeOutlinedIcon />
            </IconButton>
          )}





          <IconButton aria-label="delete" color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton aria-label="delete" color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton aria-label="delete" color="inherit">
            <PersonOutlineOutlinedIcon />
          </IconButton>


        </Stack>


      </Toolbar>
    </AppBar>
  </>
}



export default TopBar;