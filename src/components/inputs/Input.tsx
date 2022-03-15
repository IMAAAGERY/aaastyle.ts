import { ComponentPropsWithRef, forwardRef } from 'react';
import { Theme } from '../../common/types';
import { InputStyle } from './style';

interface InputProps extends ComponentPropsWithRef<'input'> {
	theme?: Theme;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { style, className, theme, value, defaultValue, defaultChecked, type, placeholder, onChange, onFocus } = props;

	return(
		<InputStyle onChange={onChange} onFocus={onFocus} ref={ref} value={value} defaultValue={defaultValue} defaultChecked={defaultChecked} placeholder={placeholder} type={type} theme={theme} className={className} style={style} />
	)
});

export default Input;
