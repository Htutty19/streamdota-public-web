import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import animateScrollTo from 'animated-scroll-to';
import classNames from "classnames";

export default function Nav(): ReactElement {
    const ref = useRef();
    const [sticky, setSticky] = useState(false);

    const observer = process.browser ? new IntersectionObserver(([{intersectionRatio}]) => setSticky(intersectionRatio !== 1)) : null;
    useEffect(() => {
        ref.current && observer && observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref])

    const scrollTo = useCallback((id: string) => {
        animateScrollTo(document.getElementById(id));
    }, []);

    return <div className={'menuContainer'} ref={ref}>
        <div className={classNames('innerContainer', {sticky})}>
            <nav>
                <img src={'/images/logo.PNG'} alt={'Streamdota logo'} />

                <div className={'linkList'}>
                    <div className={'link'} onClick={() => scrollTo('home')}>Home</div>
                    <div className={'link'} onClick={() => scrollTo('features')}>Features</div>
                    <div className={'link'} onClick={() => scrollTo('events')}>Used by</div>
                    <div className={'link'} onClick={() => scrollTo('about')}>About</div>
                    <a className={'link'} href={'https://app.streamdota.com'}>Login</a>
                </div>
            </nav>
        </div>


        <style jsx>{`
            .innerContainer {
                position: fixed;
                top: 0px;
                left: 0px;
                right: 0;               
                z-index: 5;
                background-color: transparent;
                transition: box-shadow 240ms ease-in-out, background-color 240ms ease-in-out, 
            }

            .sticky {
                background-color: #FFF;
                box-shadow: 2px 2px 3rem rgba(0,0,0,.8);
                color: #FFF;
            }

            nav {
                max-width: 1200px;
                margin: 0 auto;
                width: 100%;
                height: 3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .linkList {
                display: flex;
                align-items: center;
                font-weight: bold;
                font-size: .8rem;
            }

            .link {
                color: rgba(255, 255, 255, .7);
                margin: 0 1rem;
                cursor: pointer;
                transition: 120ms color ease-in-out;
                line-height: 3rem;
                text-decoration: none;
            }

            .link:hover {
                color: #FFF;
            }

            .sticky .link {
                color: #666;
            }

            .sticky .link:hover {
                color: #333;
            }

            @media screen and (max-width: 700px) { 
                .linkList {
                    display: none;
                }

                nav {
                    justify-content: space-around;
                }
            }
        `}</style>
    </div>;
}