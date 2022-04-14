import { InboxOutlined, MailLockOutlined } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
	return (
		<Drawer anchor='left' open={true} onClose={() => {}}>
			<Box sx={{ width: '250px' }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant='h4'>Menu</Typography>
				</Box>

				<List>
					{menuItems.map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 ? <InboxOutlined /> : <MailLockOutlined />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>

				<Divider />

				<List>
					{menuItems.map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 ? <InboxOutlined /> : <MailLockOutlined />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};