import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@material-ui/core/IconButton';
import {isMobile} from 'react-device-detect';

export default function HomePage() {
  return (
    <>
        <AppBar position='sticky' style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Typography fontWeight={'bold'} sx={{ flexGrow: 1 }} >{isMobile ? '' : 'Daffa Fakhrizaman'}</Typography>
                
                <IconButton color="inherit" >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </>
  )
}
