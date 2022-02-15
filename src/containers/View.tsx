import { ReactNode } from 'react';
import { ViewStyle } from './style';

interface ViewProps {
	children?: ReactNode;
}

const View = (props: ViewProps) => {
	const { children } = props;
	return <ViewStyle>{children}</ViewStyle>;
};

export default View;
