import { ComponentPropsWithRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Theme } from '../../common/types';
import { useClickOutside } from '../../utils';
import { OptionsListStyle, OptionStyle, OptionsWrapperStyle, SelectStyle, SelectWrapperStyle } from './style';

export type OptionProps = {
	value: string | number;
	label: string;
};

interface SelectProps extends ComponentPropsWithRef<'div'> {
	theme?: Theme;
	placeholder?: string;
	defaultValue?: string | number;
	options: OptionProps[];
	onChange?: (value: any) => void;
}

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
	const { placeholder, defaultValue, options, onChange } = props;

	const [selectedOption, setSelectedOption] = useState<OptionProps | undefined>();

	const [showOptions, setShowOptions] = useState<boolean>(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	useClickOutside(wrapperRef, () => {setShowOptions(false)});

	const getOption = (value: string | number) => {
		return options.find((option) => option.value === value);
	};

	useEffect(() => {
		if (defaultValue) {
			let option = getOption(defaultValue);
			setSelectedOption(option);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultValue]);

	const handleOptionClick = (option: OptionProps) => {
		setSelectedOption(option);
		setShowOptions(false);
		if (onChange) {
			onChange(option);
		}
	};

	return (
		<SelectWrapperStyle onBlur={() => setShowOptions(false)} ref={wrapperRef} {...props}>
			<SelectStyle tabIndex={0} rotate={showOptions} ref={ref} onFocus={() => setShowOptions(true)}>
				<span>{(selectedOption && selectedOption.label) || placeholder}</span>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
					<path d='M0 0h24v24H0V0z' fill='none' />
					<path d='M7 10l5 5 5-5H7z' />
				</svg>
			</SelectStyle>
			<OptionsWrapperStyle show={showOptions}>
				<OptionsListStyle>
					{options.map((option, index) => (
						<OptionStyle onClick={() => handleOptionClick(option)} key={index} value={option.value}>
							{option.label}
						</OptionStyle>
					))}
				</OptionsListStyle>
			</OptionsWrapperStyle>
		</SelectWrapperStyle>
	);
});

export default Select;
