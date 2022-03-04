/// <reference types="react" />
import { Theme } from '../../common/types';
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: Theme;
}
declare const Dialog: import("react").ForwardRefExoticComponent<DialogProps & import("react").RefAttributes<HTMLDivElement>>;
export default Dialog;
