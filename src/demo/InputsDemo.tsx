import Box from '../components/containers/Box';
import Container from '../components/containers/Container';
import Input from '../components/inputs/Input';
import Select from '../components/inputs/Select';

const InputsDemo = () => {

	const options=[
		{value: '1', label: 'Option 1'},
		{value: '2', label: 'Option 2'},
		{value: '3', label: 'Option 3'},
	]

	return (
		<Container>
			<Box>
				<Input type='text' placeholder='Coucou' />
			</Box>
			<Box>
				<Select options={options} />
			</Box>
		</Container>
	);
};

export default InputsDemo;
