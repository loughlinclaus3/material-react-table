import type { NextPage } from 'next';
import {
  AppBar as MuiAppBar,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const AppBar = styled(MuiAppBar)({
  zIndex: 2,
});

const TopBar: NextPage = ({ navOpen, setNavOpen }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          onClick={() => setNavOpen(!navOpen)}
          style={{ color: '#fff' }}
        >
          {navOpen ? (
            <MenuOpenIcon color="inherit" />
          ) : (
            <MenuIcon color="inherit" />
          )}
        </IconButton>
        <Typography
          style={{ fontSize: '2rem', paddingLeft: '1.5rem' }}
          variant="h1"
        >
          Material React Table
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
