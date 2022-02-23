import { ComponentPropsWithRef, forwardRef } from 'react';
import { ToggleSwitchWrapperStyle, ToggleSwitchLabelStyle, ToggleSwitchStyle } from './style';
import { v4 as uuidv4 } from 'uuid';

interface ToggleSwitchProps extends ComponentPropsWithRef<'input'> {
    children?: null;
}

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>((props, ref) => {
	const { style, className, onClick, onChange, disabled, checked } = props;

	const id = uuidv4();

	return (
		<ToggleSwitchWrapperStyle>
			<ToggleSwitchStyle ref={ref} style={style} className={className} disabled={disabled} checked={checked} onChange={onChange} onClick={onClick} id={`toggleSwitch-${id}`} type='checkbox' />
			<ToggleSwitchLabelStyle htmlFor={`toggleSwitch-${id}`} />
		</ToggleSwitchWrapperStyle>
	);
});

export default ToggleSwitch;
