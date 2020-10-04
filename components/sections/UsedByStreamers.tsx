import { ReactElement } from "react";
import Card from "../Card";
import Container from "../Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const streamer = [
    {name: 'shokzTV', logo: '/images/streamer/shokztv.png', profile: 'https://www.twitch.tv/shokztv'},
    {name: 'VITALIC', logo: '/images/streamer/vitalic.jpg', profile: 'https://www.twitch.tv/vitalic'},
    {name: 'd_bread', logo: '/images/streamer/dbread.png', profile: 'https://www.twitch.tv/d_bread'},
    {name: 'jmvincento', logo: '/images/streamer/jmvincento.png', profile: 'https://www.twitch.tv/jmvincento'},
    {name: 'DaHorsty', logo: '/images/streamer/dahorsty.png', profile: 'https://www.twitch.tv/dahorsty'},
    {name: 'dogeasydota', logo: '/images/streamer/dogeasy.png', profile: 'https://www.twitch.tv/dogeasydota'},
];

export default function UsedByStreamers(): ReactElement {
    return <Section>
        <SectionHeader title={'Which streamers using streamdota?'} />
        <Container>
            <div className={'streamerGrid'}>
                {streamer.map(({name, logo, profile}) => <div className={'streamer'}>
                    <Card>
                        <a className={'cardContent'} href={profile} target={'_blank'}>
                            <div className={'logo'}>
                                <img src={logo} alt={name + ' Logo'} /> 
                            </div>

                            <div className={'name'}>{name}</div>
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
        `}</style>
    </Section>;
}