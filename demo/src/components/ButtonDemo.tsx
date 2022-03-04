import { ReactComponent as AlignCenterIcon } from '../assets/icons/align-center.svg';
import { ReactComponent as AlignLeftIcon } from '../assets/icons/align-left.svg';
import { ReactComponent as AlignRightIcon } from '../assets/icons/align-right.svg';
import { ReactComponent as BoldIcon } from '../assets/icons/bold.svg';
import { ReactComponent as ItalicIcon } from '../assets/icons/italic.svg';
import { ReactComponent as UnderlinedIcon } from '../assets/icons/underlined.svg';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';
import { Button, ToggleButton, ToggleButtonGroup, ToggleSwitch, Box, Container, FAB, Label, Icon} from 'aaastyle';

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
				<ToggleButton>
					<BoldIcon />
				</ToggleButton>
				<ToggleButton>
					<ItalicIcon />
				</ToggleButton>
				<h4>ToggleButton Group example</h4>
				<ToggleButtonGroup>
					<ToggleButton>
						<AlignLeftIcon />
					</ToggleButton>
					<ToggleButton>
						<AlignCenterIcon />
					</ToggleButton>
					<ToggleButton>
						<AlignRightIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Box>
			<Box vertical>
				<FAB>
					<Label>
						<Icon>
							<StarIcon />
						</Icon>
					</Label>
				</FAB>
				<FAB extended>
					<Label label='FAB with text'>
						<Icon>
							<StarIcon />
						</Icon>
					</Label>
				</FAB>
			</Box>
		</Container>
	);
};

export default ButtonDemo;
