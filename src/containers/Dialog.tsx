import { ReactNode } from 'react';
import { DialogStyle, DialogBackgroundStyle } from './style';

interface DialogProps {
	children?: ReactNode;
}

const Dialog = (props: DialogProps) => {
	const { children } = props;
	return (
		<DialogBackgroundStyle>
			<DialogStyle>{children}</DialogStyle>
		</DialogBackgroundStyle>
	);
};

export default Dialog;
