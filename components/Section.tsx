import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    id?: string;
}

export default function Section({children, id}: Props): ReactElement {

    return <section className={'section'} id={id}>
        {children}

        <style jsx>{`
            .section {
                padding-top: 5rem;
            }
        `}</style>
    </section>
}
