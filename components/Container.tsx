import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Container({children}: Props): ReactElement {
    return <div className={'container'}>
        {children}

        <style jsx>{`
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
        `}</style>
    </div>
}