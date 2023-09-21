import { ComponentPropsWithRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Theme } from '../../common/types';
import { OptionStyle, OptionsListStyle, OptionsWrapperStyle, SelectStyle, SelectWrapperStyle } from './style';
import { useClickOutside } from '../../utils';

export type OptionProps = {
	value: string | number;
	label: string;
	disabled?: boolean;
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
	const [optionsOpen, setOptionsOpen] = useState<boolean>(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
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
		if (option.disabled) return;
		setSelectedOption(option);
		setShowOptions(false);
		if (onChange) {
			onChange(option);
		}
	};

	const handleSelectFocus = () => {
		setShowOptions(true);
		timeoutRef.current = setTimeout(() => {
			setOptionsOpen(true);
		}, 300);
	}

	const handleSelectClick = () => {
		if(optionsOpen) {
			setShowOptions(false);
			return;
		}
		setShowOptions(true);
		timeoutRef.current = setTimeout(() => {
			setOptionsOpen(true);
		}, 300);
	};

	useEffect(() => {
		if(!showOptions) {
			timeoutRef.current && clearTimeout(timeoutRef.current);
			setOptionsOpen(false);
		}
	}, [showOptions]);

	return (
		<SelectWrapperStyle ref={wrapperRef} {...props}>
			<SelectStyle tabIndex={0} rotate={showOptions} ref={ref} onFocus={handleSelectFocus} onClick={handleSelectClick}>
				<span>{(selectedOption && selectedOption.label) || placeholder}</span>
				<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
					<path d='M0 0h24v24H0V0z' fill='none' />
					<path d='M7 10l5 5 5-5H7z' />
				</svg>
			</SelectStyle>
			<OptionsWrapperStyle show={showOptions}>
				<OptionsListStyle>
					{options.map((option, index) => (
						<OptionStyle onClick={() => handleOptionClick(option)} key={index} value={option.value} disabled={option.disabled}>
							{option.label}
						</OptionStyle>
					))}
				</OptionsListStyle>
			</OptionsWrapperStyle>
		</SelectWrapperStyle>
	);
});

export default Select;
