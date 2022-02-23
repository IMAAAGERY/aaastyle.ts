import { forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { DialogStyle, DialogBackgroundStyle } from './style';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
	theme?: Theme;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
	const { children, style, theme, className } = props;
	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<DialogBackgroundStyle>
				<DialogStyle ref={ref} style={style} className={className}>{children}</DialogStyle>
			</DialogBackgroundStyle>
		</ThemeProvider>
	);
});

export default Dialog;
