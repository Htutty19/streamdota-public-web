import React, { ReactElement, ReactNode } from "react";


interface Props {
    children: ReactNode;
}

export default function TwoColumnContainer({children}: Props): ReactElement {

    return <div className={'twoColumnContainer'}>
        {React.Children.map(children, (child, idx) => <div className={'col'} key={idx}>
            {child}
        </div>)}

        <style jsx>{`
            .twoColumnContainer {
                display: flex;
                align-items: center;
                margin: -1rem;
            }

            .col {
                padding: 1rem;
                width: 50%;
            }

            @media screen and (max-width: 1100px) {
                .twoColumnContainer {
                    flex-wrap: wrap-reverse;
                    justify-content: space-around;
                }
                .col {
                    width: 80%;
                }
            }

            @media screen and (max-width: 700px) {
                .twoColumnContainer {
                    flex-wrap: wrap-reverse;
                    justify-content: space-around;
                }
                .col {
                    width: 95%;
                }
            }
        `}</style>
    </div>
}