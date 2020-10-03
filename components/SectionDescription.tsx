import { ReactElement, ReactNode } from "react";


export default function SectionDescription({children}:{children: ReactNode}): ReactElement {
    return <div className={'description'}>
        {children}
        <style jsx>{`
            .description {
                font-size: .7rem;
                color: #444;
                max-width: 900px;
                margin: 1rem auto 2rem auto;
                text-align: center;
            }
        `}</style>
    </div>
}