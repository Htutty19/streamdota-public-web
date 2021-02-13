import Link from "next/link";
import { ReactElement } from "react";


export default function Footer(): ReactElement {
    return <div className={'footer'}>
        <div className={'inner'}>
            <a href={'https://twitter.com/streamdotacom'} className={'twitter'} target={'_blank'}  rel={'noopener'}>@streamdota</a> 

            <div className={'row'}>
                <Link href={'/about'}><a>Imprint</a></Link>
                <Link href={'/dataPolicy'}><a>Data Policy</a></Link>
            </div>
        </div>

        <style jsx>{`
            .row, .footer, .inner {
                display: flex;
                align-items: center;
            }

            .inner {
                max-width: 1200px;
                margin: 0 auto;
                font-size: .8rem;
                width: 100%;
                justify-content: space-between;
            }

            .footer {
                height: 40px;
                background-color: #242424;
            }

            .twitter {
                color: rgb(29, 161, 242);
                text-decoration: none;
            }

            .twitter:hover {
                text-decoration: underline;
            }

            a {
                color: #AAA;
                padding: 0 1rem;
                text-decoration: none;
            }

            a:hover {
                color: #CCC;
            }

        `}</style>
    </div>
}