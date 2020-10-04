import classNames from "classnames";
import React, { ReactElement, ReactNode } from "react";


interface Props {
    children: ReactNode;
    reverseWrap?: boolean;
}

export default function TwoColumnContainer({children, reverseWrap = false}: Props): ReactElement {

    return <div className={classNames('twoColumnContainer', {reverseWrap})}>
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
                    flex-wrap: wrap;
                    justify-content: space-around;
                }

                .reverseWrap {
                    flex-wrap: wrap-reverse;
                }
                
                .col {
                    width: 80%;
                }
            }

            @media screen and (max-width: 700px) {
                .twoColumnContainer {
                    justify-content: space-around;
                }
                .col {
                    width: 95%;
                }
            }
        `}</style>
    </div>
}