import { useRef, useState } from 'react';
import { Container, Button, Toast, Box, Dialog, Icon, Label } from 'aaastyle';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';

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
			ref.current.toast('warning', '3233');
		}
	};

	return (
		<Container vertical>
			<Toast ref={toastRefTopCenter} position='top-center' duration={3000} closable>
				Top-Center
			</Toast>
			<Toast ref={toastRefTopLeft} position='top-left' duration={3000} closable>
				Top-Left
			</Toast>
			<Toast ref={toastRefTopRight} position='top-right' duration={3000} closable>
				Top-Right
			</Toast>
			<Toast ref={toastRefBotCenter} position='bottom-center' duration={3000} closable>
				Bottom-Center
			</Toast>
			<Toast ref={toastRefBotLeft} position='bottom-left' duration={3000} closable>
				Bottom-Left
			</Toast>
			<Toast ref={toastRefBotRight} position='bottom-right' duration={3000} closable>
				Bottom-Right
			</Toast>
			{showDialog && (
				<Dialog position='top' onClose={() => setShowDialog(false)} closeOnClickOutside>
					This is a dialog box
				</Dialog>
			)}
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

			<Box>
				<Icon size='small'>
					<StarIcon />
				</Icon>
				<Icon>
					<StarIcon />
				</Icon>
				<Icon size='large'>
					<StarIcon />
				</Icon>
			</Box>
			<Box>
				<Label label='Label example'>
					<Icon size='small'>
						<StarIcon />
					</Icon>
				</Label>
			</Box>
		</Container>
	);
};

const OthersDemo = () => {
	return <OthersDemoView />;
};

export default OthersDemo;
