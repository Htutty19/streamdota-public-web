import classNames from "classnames";
import React, { ReactElement, ReactNode } from "react";


interface Props {
    children: ReactNode;
    reverseWrap?: boolean;
    widths?: number[];
    reversed?: boolean;
}

export default function TwoColumnContainer({children, reverseWrap = false, reversed = false, widths = [50, 50]}: Props): ReactElement {

    return <div className={classNames('twoColumnContainer', {reversed, reverseWrap})}>
        {React.Children.map(children, (child, idx) => <div className={'col'} key={idx}>
            {child}
        </div>)}

        <style jsx>{`
            .twoColumnContainer {
                display: flex;
                align-items: center;
                margin: -1rem;
            }
            .reversed {
                flex-direction: row-reverse;
            }

            .col {
                padding: 1rem;
                width: ${widths[0]}%;
            }

            .col + .col {
                width: ${widths[1]}%;
            }

            @media screen and (max-width: 1100px) {
                .twoColumnContainer {
                    flex-wrap: wrap;
                    justify-content: space-around;
                }

                .reverseWrap {
                    flex-wrap: wrap-reverse;
                }

                .reversed.reverseWrap {
                    flex-wrap: wrap;
                }
                
                .col, .col + .col  {
                    width: 80%;
                }
            }

            @media screen and (max-width: 700px) {
                .twoColumnContainer {
                    justify-content: space-around;
                    margin: 0;
                }
                .col, .col + .col  {
                    width: 95%;
                }
            }
        `}</style>
    </div>
}