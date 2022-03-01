import { ComponentPropsWithRef, forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import { DEFAULT_THEME } from "../../common/constants";
import { Theme } from "../../common/types";
import { NavbarStyle } from "./style";

export interface NavbarProps extends ComponentPropsWithRef<'nav'>{
	theme?: Theme;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
	const { children, style, className, theme} = props;

	return(
		<ThemeProvider theme={theme || DEFAULT_THEME}>
			<NavbarStyle ref={ref} style={style} className={className}>
				{children}
			</NavbarStyle>
		</ThemeProvider>
	)
});

export default Navbar;