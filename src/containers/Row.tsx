import { ReactNode } from 'react';
import { RowStyle } from './style';

interface RowProps {
	children?: ReactNode;
}

const Row = (props: RowProps) => {
	const { children } = props;

	return <RowStyle>{children}</RowStyle>;
};

export default Row;
