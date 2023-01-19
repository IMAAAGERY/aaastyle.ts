import { ComponentPropsWithRef, forwardRef } from 'react';
import { ListItemStyle } from './style';
import { Theme } from '../../common/types';


interface ListItemProps extends ComponentPropsWithRef<'li'> {
    theme?: Theme;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
	const { children, style, className, theme, onClick } = props;

	return (
		<ListItemStyle onClick={onClick} ref={ref} {...props}>
			{children}
		</ListItemStyle>
	);
});


export default ListItem;