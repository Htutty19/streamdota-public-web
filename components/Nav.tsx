import { ReactElement, useCallback } from "react";
import animateScrollTo from 'animated-scroll-to';

export default function Nav(): ReactElement {
    const scrollTo = useCallback((id: string) => {
        animateScrollTo(document.getElementById(id));
    }, []);

    return <nav>
        <img src={'/images/logo.PNG'} alt={'Streamdota logo'} />

        <div className={'linkList'}>
            <div className={'link'} onClick={() => scrollTo('home')}>Home</div>
            <div className={'link'} onClick={() => scrollTo('features')}>Features</div>
            <div className={'link'} onClick={() => scrollTo('events')}>Used by</div>
            <div className={'link'} onClick={() => scrollTo('about')}>About</div>
            <a className={'link'} href={'https://app.streamdota.com'}>Login</a>
        </div>


        <style jsx>{`
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

            @media screen and (max-width: 700px) { 
                .linkList {
                    display: none;
                }

                nav {
                    justify-content: space-around;
                }
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
        `}</style>
    </nav>
}