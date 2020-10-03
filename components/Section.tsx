import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    id?: string;
    bg?: 'none' | 'blueGrey';
}

export default function Section({bg = 'none', children, id}: Props): ReactElement {

    return <section className={classNames('section', bg)} id={id}>
        {children}

        <style jsx>{`
            .section {
                padding: 3rem 0;
            }

            .blueGrey {
                background-color: #f6f9fe;
            }
        `}</style>
    </section>
}
