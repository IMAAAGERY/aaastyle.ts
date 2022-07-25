import { ComponentPropsWithRef, forwardRef, useId } from 'react';
import { ToggleSwitchWrapperStyle, ToggleSwitchLabelStyle, ToggleSwitchStyle } from './style';

interface ToggleSwitchProps extends ComponentPropsWithRef<'input'> {
    children?: null;
}

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>((props, ref) => {
	const { style, className, onClick, onChange, disabled, checked } = props;

	const id = useId();

	return (
		<ToggleSwitchWrapperStyle>
			<ToggleSwitchStyle ref={ref} style={style} className={className} disabled={disabled} checked={checked} onChange={onChange} onClick={onClick} id={`toggleSwitch-${id}`} type='checkbox' />
			<ToggleSwitchLabelStyle htmlFor={`toggleSwitch-${id}`} />
		</ToggleSwitchWrapperStyle>
	);
});

export default ToggleSwitch;
