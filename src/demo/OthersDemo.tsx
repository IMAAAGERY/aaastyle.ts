import Container from '../components/containers/Container';
import Button from '../components/buttons/Button';
import { useRef, useState } from 'react';
import Toast from '../components/others/Toast';
import Box from '../components/containers/Box';
import Dialog from '../components/containers/Dialog';

const OthersDemoView = () => {
	const toastRefTopCenter = useRef<any>(null);
	const toastRefTopRight = useRef<any>(null);
	const toastRefTopLeft = useRef<any>(null);
	const toastRefBotLeft = useRef<any>(null);
	const toastRefBotCenter = useRef<any>(null);
	const toastRefBotRight = useRef<any>(null);

    const [showDialog, setShowDialog] = useState(false);

	const showToast = (ref: any) => {
		if (ref.current) {
			ref.current.toast('Hello world');
		}
	};

	return (
		<Container vertical>
			<Toast ref={toastRefTopCenter} position='top-center' duration={3000} closable />
			<Toast ref={toastRefTopLeft} position='top-left' duration={3000} closable />
			<Toast ref={toastRefTopRight} position='top-right' duration={3000} closable />
			<Toast ref={toastRefBotCenter} position='bottom-center' duration={3000} closable />
			<Toast ref={toastRefBotLeft} position='bottom-left' duration={3000} closable />
			<Toast ref={toastRefBotRight} position='bottom-right' duration={3000} closable />
			{showDialog && <Dialog>This is a dialog box</Dialog>}
			<Box>
				<Button onClick={() => showToast(toastRefTopCenter)}>Toast top-center</Button>
				<Button onClick={() => showToast(toastRefTopLeft)}>Toast top-left</Button>
				<Button onClick={() => showToast(toastRefTopRight)}>Toast top-right</Button>
				<Button onClick={() => showToast(toastRefBotCenter)}>Toast bottom-center</Button>
				<Button onClick={() => showToast(toastRefBotLeft)}>Toast bottom-left</Button>
				<Button onClick={() => showToast(toastRefBotRight)}>Toast bottom-right</Button>
			</Box>
			<Box>
				<Button onClick={() => setShowDialog(true)}>Show dialog</Button>
			</Box>
		</Container>
	);
};

const OthersDemo = () => {
	return <OthersDemoView />;
};

export default OthersDemo;
