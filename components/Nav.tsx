import { ReactElement } from "react";

export default function Nav(): ReactElement {
    return <nav>
        <img src={'/images/logo.PNG'} alt={'Streamdota logo'} />

        <div className={'linkList'}>
            <div className={'link'}>Home</div>
            <div className={'link'}>Features</div>
            <div className={'link'}>Showcase</div>
            <div className={'link'}>About</div>
            <div className={'link'}>Login</div>
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
            }

            .link:hover {
                color: #FFF;
            }
        `}</style>
    </nav>
}