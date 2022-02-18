import View from '../containers/View';
import Col from '../containers/Col';
import Dialog from '../containers/Dialog';
import Button from '../buttons/Button';
import { useState } from 'react';

const Demo = () => {
	const [showDialog, setShowDialog] = useState(false);

	return (
		<View>
			{showDialog && <Dialog>Coucou</Dialog>}

			<Col>
				<Button color='primary' variant='outlined'>
					Outlined
				</Button>
				<Button color='warning' variant='contained'>
					Contained
				</Button>
				<Button color='info' variant='text'>
					Text
				</Button>

				<Button color='primary' variant='contained' shape='pill'>
					Contained pill
				</Button>
				<Button color='warning' variant='contained' shape='rounded'>
					Contained rounded
				</Button>
				<Button color='info' variant='contained' shape='sharp'>
					Contained sharp
				</Button>
			</Col>
		</View>
	);
};

export default Demo;
