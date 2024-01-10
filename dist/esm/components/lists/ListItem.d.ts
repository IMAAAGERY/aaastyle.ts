import { ComponentPropsWithRef } from 'react';
import { Theme } from '../../common/types';
interface ListItemProps extends ComponentPropsWithRef<'li'> {
    theme?: Theme;
}
declare const ListItem: import("react").ForwardRefExoticComponent<Omit<ListItemProps, "ref"> & import("react").RefAttributes<HTMLLIElement>>;
export default ListItem;
