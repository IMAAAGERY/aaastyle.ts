import Button from '../components/buttons/Button';
import ToggleButton from '../components/buttons/ToggleButton';
import ToggleButtonGroup from '../components/buttons/ToggleButtonGroup';
import ToggleSwitch from '../components/buttons/ToggleSwitch';
import Box from '../components/containers/Box';
import Container from '../components/containers/Container';
import { ReactComponent as AlignCenterIcon } from './icons/align-center.svg';
import { ReactComponent as AlignLeftIcon } from './icons/align-left.svg';
import { ReactComponent as AlignRightIcon } from './icons/align-right.svg';
import { ReactComponent as BoldIcon } from './icons/bold.svg';
import { ReactComponent as ItalicIcon } from './icons/italic.svg';
import { ReactComponent as UnderlinedIcon } from './icons/underlined.svg';

const ButtonDemo = () => {
	return (
		<Container>
			<Box vertical>
				<h4>Button example</h4>
				<Button color='primary' variant='outlined'>
					Outlined
				</Button>
				<Button color='warning' variant='contained'>
					Contained
				</Button>
				<Button color='info' variant='text'>
					Text
				</Button>

				<Button color='secondary' variant='outlined' shape='pill'>
					Outlined pill
				</Button>
				<Button color='success' variant='contained' shape='rounded'>
					Contained rounded
				</Button>
				<Button color='info' variant='contained' shape='sharp'>
					Contained sharp
				</Button>
			</Box>
			<Box vertical>
				<h4>TogleSwitch example</h4>
				<ToggleSwitch />
				<ToggleSwitch />
				<ToggleSwitch disabled />
			</Box>
			<Box vertical>
				<h4>ToggleButton example</h4>
				<ToggleButton><BoldIcon/></ToggleButton>
				<ToggleButton><ItalicIcon/></ToggleButton>
				<h4>ToggleButton Group example</h4>
				<ToggleButtonGroup>
					<ToggleButton>
						<AlignLeftIcon />
					</ToggleButton>
					<ToggleButton>
						<AlignCenterIcon />
					</ToggleButton>
					<ToggleButton><AlignRightIcon/></ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</Container>
	);
};

export default ButtonDemo;
