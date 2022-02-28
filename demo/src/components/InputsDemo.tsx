import { Box, Container, Input, Select } from 'aaastyle';

const InputsDemo = () => {
	const options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' },
	];

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
