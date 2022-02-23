import { ComponentPropsWithoutRef } from "react";
import { SpacerStyle } from "./style";

interface SpacerProps extends ComponentPropsWithoutRef<'div'> {
    children?: null;
}

const Spacer = (props: SpacerProps) => {
    return (
        <SpacerStyle/>
    );
}

export default Spacer;