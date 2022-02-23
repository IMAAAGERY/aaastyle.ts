import Box from '../components/containers/Box';
import Container from '../components/containers/Container';
import List from '../components/lists/List';
import ListItem from '../components/lists/ListItem';

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
