import View from '../containers/View';
import Col from '../containers/Col';
import Dialog from '../containers/Dialog';
import Button from '../buttons/Button';
import { useState } from 'react';
import { Size } from '../common/types';

const Demo = () => {
	const [showDialog, setShowDialog] = useState(false);

	return (
		<View>
			{showDialog && <Dialog>Coucou</Dialog>}

			<Col>
				<Button size={Size.XS} onClick={() => setShowDialog(true)}>Click me</Button>
			</Col>
		</View>
	);
};

export default Demo;
