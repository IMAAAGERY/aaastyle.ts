import { ComponentPropsWithRef, forwardRef, useEffect, useState } from 'react';
import { Theme } from '../../common/types';
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
	const { theme, placeholder, defaultValue, options, className, style, onChange } = props;

	const [selectedOption, setSelectedOption] = useState<OptionProps | undefined>();

	const [showOptions, setShowOptions] = useState<boolean>(false);

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
		<SelectWrapperStyle className={className} style={style} theme={theme}>
			<SelectStyle ref={ref} onClick={() => setShowOptions(!showOptions)}>
				<span>{(selectedOption && selectedOption.label) || placeholder}</span>
			</SelectStyle>
			<OptionsWrapperStyle style={{ display: showOptions ? 'block' : 'none' }}>
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
