import { Box, Container, List, ListItem } from 'aaastyle';

const ListDemo = () => {
	return (
		<Container>
			<Box>
				<List>
					<ListItem>ListItem 1</ListItem>
					<ListItem>Plus grand message dans une liste</ListItem>
					<ListItem>ListeItem 2</ListItem>
				</List>
			</Box>
		</Container>
	);
};

export default ListDemo();
