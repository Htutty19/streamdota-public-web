import { ReactElement } from "react";
import Nav from './Nav';


export default function HeroSection(): ReactElement {
    return <section className={'heroSection'} id={'home'}>
        <Nav />
        <div className={'details'}>
            <h1>Your toolbox for streaming Dota 2</h1>
            <div className={'description'}>
                streamdota.com offers different tools to enrich your twitch stream with overlays, chat command and statistics.
            </div>

            <div className={'learnMore'}>
                Learn more
            </div>
        </div>
        <div className="bottom">
            <svg viewBox="0 0 1920 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="svg replaced-svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(0.000000, -554.000000)" fill="#FFFFFF">
                        <path d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395"></path>
                    </g>
                </g>
            </svg>
        </div>
        
        <style jsx>{`
            .heroSection {
                position: relative;
                z-index: 1;
                height: 800px;
                background: rgba(0, 0, 0, 0) url('/images/herobanner.jpg') no-repeat scroll center center / cover;
            }

            .heroSection:after {
                position: absolute;
                content: '';
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                z-index: -2;
                opacity: .9;
                background: linear-gradient(-47deg, #772ce8 0%, rgba(119, 44, 232, .5) 100%);
            }

            .bottom {
                position: absolute;
                top: auto;
                bottom: -5px;
                left: 0;
                right: 0;
                z-index: -1;
            }

            .details {
                max-width: 800px;
                padding: 0 2rem;
                width: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                height: 550px;
                color: #FFF;
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }

            .description, h1 {
                text-shadow: 1px 1px 5px rgba(0,0,0,1);
            }

            .learnMore {
                margin-top: 2rem;
                padding: .75rem 1rem;
                border-radius: .2rem;
                background-color: var(--primary-accent);
                cursor: pointer;
                text-transform: uppercase;
                font-size: .9rem;
                font-weight: bold;
                box-shadow: 2px 2px 1rem 0 rgba(0,0,0,0.5);
                transition: box-shadow 120ms ease-in-out;
            }

            .learnMore:hover {
                box-shadow: 2px 2px 1.2rem 0 rgba(0,0,0,0.8);

            }

            .highlight {
                color: var(--secondary-accent);
            }
        `}</style>
    </section>;
}