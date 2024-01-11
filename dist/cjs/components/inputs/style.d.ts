/// <reference types="react" />
export declare const InputStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>>;
export declare const SelectWrapperStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const SelectStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    rotate?: boolean | undefined;
}>>;
export declare const OptionsWrapperStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    show: boolean;
}>>;
export declare const OptionsListStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>>;
export declare const OptionStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {
    disabled?: boolean | undefined;
}>>;
export declare const DisabledOptionStyle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<Omit<import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "disabled"> & {
    disabled?: boolean | undefined;
}, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | import("react").RefObject<HTMLLIElement> | null | undefined;
}, never>> & Omit<import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {
    disabled?: boolean | undefined;
}>>, keyof import("react").Component<any, {}, any>>;
