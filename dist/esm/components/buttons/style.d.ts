import { Orientation } from '../../common/types';
import { ButtonColor, ButtonShape, ButtonVariant } from './Button';
export declare const ButtonStyle: import("styled-components").StyledComponent<"button", any, {
    color: ButtonColor;
    variant: ButtonVariant;
    shape: ButtonShape;
}, never>;
export declare const ButtonContentStyle: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const ButtonRippleStyle: import("styled-components").StyledComponent<"span", any, {
    left: number;
    top: number;
}, never>;
export declare const ToggleSwitchWrapperStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ToggleSwitchLabelStyle: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const ToggleSwitchStyle: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const ToggleButtonStyle: import("styled-components").StyledComponent<"button", any, {
    selected: boolean;
    positionInGroup?: "first" | "last" | undefined;
}, never>;
export declare const ToggleButtonGroupStyle: import("styled-components").StyledComponent<"div", any, {
    orientation: Orientation;
}, never>;
export declare const FABStyle: import("styled-components").StyledComponent<"button", any, {
    extended: boolean;
}, never>;
