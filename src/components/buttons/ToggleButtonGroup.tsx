import { ComponentPropsWithRef, forwardRef, ReactNode, useEffect, useState } from 'react';
import { Orientation } from '../../common/types';
import { ToggleButtonGroupStyle } from './style';
import ToggleButton from './ToggleButton';

interface ToggleButtonGroupProps extends ComponentPropsWithRef<'div'> {
	children: ReactNode[];
	exclusive?: boolean;
	orientation?: Orientation;
}

const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>((props, ref) => {
	const { children, style, className, exclusive, orientation } = props;

	const [selectedButtons, setSelectedButtons] = useState<boolean[]>(Array(children.length).fill(false));

	const handleToggleButtonClick = (index: number) => {
		if (exclusive) {
			let newSelectedButtons = Array(children.length).fill(false);
			newSelectedButtons[index] = !selectedButtons[index];
			setSelectedButtons(newSelectedButtons);
		} else {
			let newSelectedButtons = [...selectedButtons];
			newSelectedButtons[index] = !newSelectedButtons[index];
			setSelectedButtons([...selectedButtons, selectedButtons[index]]);
		}
		console.log(selectedButtons);
		
	};

	return (
		<ToggleButtonGroupStyle orientation={orientation || 'horizontal'} ref={ref} style={style} className={className}>
			{children.map((child: ReactNode, index: number) => (
				<ToggleButton positionInGroup={index===0 ? 'first' : index === (children.length-1) ? 'last' : undefined} selected={selectedButtons[index]} onClick={() => handleToggleButtonClick(index)} key={index}>
					{child}
				</ToggleButton>
			))}
		</ToggleButtonGroupStyle>
	);
});

export default ToggleButtonGroup;
