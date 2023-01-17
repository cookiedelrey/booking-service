import styled from '@emotion/styled';
import {
  AppBar,
  Button,
  createTheme,
  IconButton,
  InputBase,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha, Box } from '@mui/system';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';

const PageButton = styled(Button)({
  margin: '5px 30px',
  padding: '5px 10px',
  color: 'white',
  display: 'flex',
  border: '1px solid rgba(240, 240, 240, 0.3)',
  textTransform: 'none',
  borderRadius: '18px',
  backgroundColor: 'rgba(240, 240, 240, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(240, 240, 240, 0.15)',
    color: 'white',
    border: '1px solid white',
  },
});

const MainButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  margin: 7,
  padding: '6px 12px',
  border: '1px solid darkblue',
  lineHeight: 1.5,
  borderRadius: '0px',
  backgroundColor: 'white',
  borderColor: 'darkblue',
  color: 'darkblue',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: 'white',
    backgroundColor: 'darkblue',
    borderColor: 'white',
    boxShadow: 'none',
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: '1px solid white',
  },
  width: '80%',
  margin: '15px 0px',
  borderRadius: '0px',
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '30%',
  width: 400,
  height: 400,
  backgroundColor: 'background.paper',
  border: '1px solid darkblue',
  color: 'darkblue',
  boxShadow: 25,
  p: 4,
};

const styleContact = {
  position: 'absolute',
  top: '20%',
  left: '30%',
  width: 400,
  height: 400,
  backgroundColor: 'background.paper',
  border: '1px solid darkblue',
  color: 'darkblue',
  boxShadow: 25,
  p: 4,
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);

  const navigate = useNavigate();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'darkblue',
          boxShadow: 'none',
          display: 'flex',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '0px 100px',
            width: '73.5%',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'sans-serif',
              fontWeight: 600,
              margin: '10px 30px',
            }}
          >
            LOGO
          </Typography>
          <Box>
            <MainButton
              endIcon={<LanguageIcon />}
              onClick={() => setOpen(true)}
            >
              Language
            </MainButton>
            {open && (
              <Box sx={style}>
                <Typography>Text in a modal</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: '-35px',
                  }}
                >
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
            <MainButton onClick={() => navigate('/signup')}>
              Register
            </MainButton>
            <MainButton onClick={() => navigate('/login')}>Sign in</MainButton>
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '3%',
            mb: '5%',
            ml: '125px',
            justifyContent: 'flex-start',
          }}
        >
          <PageButton
            startIcon={<ApartmentIcon />}
            onClick={() => navigate('/hotels')}
          >
            Hotels
          </PageButton>
          <PageButton
            startIcon={<MapOutlinedIcon />}
            onClick={() => navigate('/map')}
          >
            Search on a map
          </PageButton>
          <PageButton
            startIcon={<PhoneInTalkOutlinedIcon />}
            onClick={() => setOpenContact(true)}
          >
            Contact us
          </PageButton>
          {openContact && (
            <Box sx={styleContact}>
              <Typography>Text in a modal</Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: '-35px',
                }}
              >
                <IconButton onClick={() => setOpenContact(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          )}
          <PageButton
            startIcon={<InfoOutlinedIcon />}
            onClick={() => navigate('/about')}
          >
            About us
          </PageButton>
          <PageButton
            startIcon={<StarOutlineOutlinedIcon />}
            onClick={() => navigate('/cart')}
          >
            Favorites
          </PageButton>
        </Box>
        <Box sx={{ ml: 19 }}>
          <Typography variant="h3" sx={{ fontWeight: '600' }}>
            Find your next stay
          </Typography>
          <Typography variant="h5">
            Search deals on hotels, homes, and much more...
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
}
