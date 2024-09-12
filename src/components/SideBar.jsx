import { Avatar, IconButton, styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import image from '../assets/WhatsApp Image 2024-03-09 at 12.14.32 PM-modified.png'
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, PeopleAltOutlined, PersonOutline, ReceiptOutlined ,BarChartOutlined,PieChartOutlineOutlined,TimelineOutlined,MapOutlined} from '@mui/icons-material';


import { useLocation, useNavigate } from 'react-router';
import { grey } from '@mui/material/colors';



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});





const Array1 = [
    { icon: <HomeOutlined />, text: "Dashboard", path: "/" },
    { icon: <PeopleAltOutlined />, text: "Manage Team", path: "/team" },
    { icon: <ContactsOutlined />, text: "Contacts Information", path: "/contact" },
    { icon: <ReceiptOutlined />, text: "Invoices Balanced", path: "/invoices" }
]

const Array2 = [
    { text: "Profile Form", icon: <PersonOutline />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
    {
        text: "FAQ Page",
        icon: <HelpOutlineOutlined />,
        path: "/faq",
    },
];


const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
  ];

const SideBar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();


    return <>

        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Avatar sx={{ mx: "auto", my: 1, height: open ? 100 : 40, width: open ? 100 : 40, border: "solid 2px gray", padding: .3, transition: ".3s" }} alt="Remy Sharp" src={image} />
            <Typography align="center" sx={{ fontSize: open ? 14 : 0, transition: ".3s" }}>Muhammad Ataa</Typography>
            <Typography align="center" sx={{ mb: 1, fontSize: open ? 14 : 0, transition: ".3s", color: theme.palette.info.main }}>Admin</Typography>



            <Divider />

            <List>
                {Array1.map((item) => (
                    <ListItem key={item.icon} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(item.path)
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[200] : null
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />


            <List>
                {Array2.map((item) => (
                    <ListItem key={item.icon} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(item.path)
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[200] : null

                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array3.map((item) => (
                    <ListItem key={item.icon} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => {
                                navigate(item.path)
                            }}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[800] : grey[200] : null

                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    </>
}



export default SideBar;