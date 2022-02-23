import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { ListStyle } from './style';

interface ListProps extends ComponentPropsWithRef<'ul'> {
	theme?: Theme;
}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
	const { children, style, className, theme } = props;

	return (
		<ListStyle ref={ref} style={style} className={className} theme={theme}>
			{children}
		</ListStyle>
	);
});

export default List;
