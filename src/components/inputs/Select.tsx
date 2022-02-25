import { ComponentPropsWithRef, forwardRef } from 'react';
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
}

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {

    const { theme, placeholder, defaultValue, options, className, style } = props;
	return (
		<SelectWrapperStyle>
			<SelectStyle ref={ref}>
				{}
			</SelectStyle>
			<OptionsWrapperStyle>
				<OptionsListStyle>
					{options.map((option) => (
						<OptionStyle key={option.value} value={option.value}>
							{option.label}
						</OptionStyle>
					))}
				</OptionsListStyle>
			</OptionsWrapperStyle>
		</SelectWrapperStyle>
	);
});

export default Select;
