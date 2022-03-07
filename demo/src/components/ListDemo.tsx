import { Box, Container, Dropdown, DropdownItem, List, ListItem } from 'aaastyle';

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
			<Box>
				<Dropdown>
					<DropdownItem>Coucou</DropdownItem>
					<DropdownItem>Coucou</DropdownItem>
					<DropdownItem>Coucou</DropdownItem>
				</Dropdown>
			</Box>
		</Container>
	);
};

export default ListDemo();
