import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    id?: string;
    bg?: 'none' | 'blueGrey' | 'gradiant';
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

            .gradiant {
                color: #FFF;
                background: linear-gradient(-47deg, #8731E8 0%, #4528DC 100%);
            }

            .gradiant :global(.description) {
                color: #FFF;
            }
        `}</style>
    </section>
}
