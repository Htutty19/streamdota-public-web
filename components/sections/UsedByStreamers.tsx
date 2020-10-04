import { ReactElement } from "react";
import Card from "../Card";
import Container from "../Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const streamer = [
    {name: 'shokzTV', logo: '/images/streamer/shokztv.png', profile: 'https://www.twitch.tv/shokztv', verified: true},
    {name: 'VITALIC', logo: '/images/streamer/vitalic.jpg', profile: 'https://www.twitch.tv/vitalic', verified: true},
    {name: 'd_bread', logo: '/images/streamer/dbread.png', profile: 'https://www.twitch.tv/d_bread', verified: false},
    {name: 'jmvincento', logo: '/images/streamer/jmvincento.png', profile: 'https://www.twitch.tv/jmvincento', verified: false},
    {name: 'DaHorsty', logo: '/images/streamer/dahorsty.png', profile: 'https://www.twitch.tv/dahorsty', verified: false},
    {name: 'dogeasydota', logo: '/images/streamer/dogeasy.png', profile: 'https://www.twitch.tv/dogeasydota', verified: false},
];

export default function UsedByStreamers(): ReactElement {
    return <Section bg={'blueGrey'}>
        <SectionHeader title={'These streams already use streamdota'} />
        <Container>
            <div className={'streamerGrid'}>
                {streamer.map(({name, logo, profile, verified}) => <div className={'streamer'}>
                    <Card>
                        <a className={'cardContent'} href={profile} target={'_blank'}>
                            <div className={'logo'}>
                                <img src={logo} alt={name + ' Logo'} />
                            </div>

                            <div className={'name'}>
                                {verified && <span className={'verified'}>
                                    <svg height="10" viewBox="0 0 22 17" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.28765 15.784L0.314447 8.81082C-0.10449 8.39188 -0.10449 7.71263 0.314447 7.29365L1.83158 5.77647C2.25052 5.35749 2.92982 5.35749 3.34875 5.77647L8.04624 10.4739L18.1077 0.412469C18.5267 -0.00646765 19.206 -0.00646765 19.6249 0.412469L21.142 1.92964C21.561 2.34858 21.561 3.02784 21.142 3.44682L8.80483 15.7841C8.38585 16.203 7.70659 16.203 7.28765 15.784V15.784Z" fill="#FFF"/>
                                    </svg>
                                </span>}
                                {name}
                            </div>
                        </a>
                    </Card>
                </div>)}
            </div>

            <div className={'moreInfo'}>and many more...</div>
        </Container>

        <style jsx>{`
            .streamerGrid {
                display: grid;
                padding: 2rem 0;
                grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
                justify-content: center;
                grid-gap: 3rem;
            }
            
            .cardContent {
                padding: 3rem;
                text-align: center;
            }

            .logo {
                overflow: hidden;
                height: 5rem;
                width: 5rem;
                border-radius: 2.5rem;
                margin: 0 auto 1rem auto;
            }

            .logo img {
                object-fit: cover;
                width: 100%;
            }

            .name {
                text-decoration: none;
                color: var(--secondary-accent);
            }

            a {
                text-decoration: none;
            }

            .moreInfo {
                text-align: center;
                color: #444;
                padding: 2rem;
            }

            .verified {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 1rem;
                width: 1rem;
                border-radius: .5rem;
                background-color: #772ce8;
                vertical-align: 2px;
                margin-right: .5rem;
            }
        `}</style>
    </Section>;
}