import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

export const Navbar = ({}: NavbarProps) => {
	return (
		<AppBar position='sticky' elevation={0}>
			<Toolbar>
				<IconButton size='large' edge='start'>
					<MenuOutlined />
				</IconButton>

				<Typography variant='h6'>Open JIRA</Typography>
			</Toolbar>
		</AppBar>
	);
};

interface NavbarProps {}
