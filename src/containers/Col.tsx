import { ReactNode } from "react";
import { ColStyle } from './style';

interface ColProps {
	children? : ReactNode;
}

const Col = (props: ColProps) => {
	const { children } = props;

	return (
		<ColStyle>
			{children}
		</ColStyle>
	)
}

export default Col;