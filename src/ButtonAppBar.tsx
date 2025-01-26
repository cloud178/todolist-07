import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuButton} from "./MenuButton.tsx";
import {useTheme} from "@mui/material";
import Switch from '@mui/material/Switch';

type ButtonAppBarPropsType = {
    onChange: () => void
}

export const ButtonAppBar = ({onChange}: ButtonAppBarPropsType) => {
    const theme = useTheme()
    return (
        <Box sx={{ flexGrow: 1, paddingBottom: '80px' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Switch
                        color={'default'}
                        onChange={onChange}
                    />
                    <MenuButton color="inherit" background={theme.palette.primary.light}>Log in</MenuButton>
                    <MenuButton color="inherit">Log out</MenuButton>
                    <MenuButton color="inherit">FAQ</MenuButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};