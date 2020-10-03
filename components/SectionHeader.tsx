import { ReactElement } from "react";

interface Props {
    title: string;
}

export default function SectionHeader({title}: Props): ReactElement {

    return <div className={'sectionHeader'}>
        <h2>{title}</h2>


        <style jsx>{`
            .sectionHeader {
                max-width: 900px;
                margin: 0 auto;
                text-align: center;
            }

            h2 {
                font-size: 2rem;
                position: relative;
            }

            h2:after {
                position: absolute;
                content: '';
                height: 2px;
                width: 70px;
                background-color: var(--primary-accent);
                bottom: -15px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        `}</style>
    </div>;
}