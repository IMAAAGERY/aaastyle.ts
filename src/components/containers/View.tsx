import { ComponentPropsWithRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '../../common/constants';
import { Theme } from '../../common/types';
import { ViewStyle } from './style';

interface ViewProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
}

const View = forwardRef<HTMLDivElement, ViewProps>((props, ref) => {
	const { children, style, className, theme } = props;
	return (
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<ViewStyle style={style} className={className} ref={ref}>
				{children}
			</ViewStyle>
		</ThemeProvider>
	);
});

export default View;
