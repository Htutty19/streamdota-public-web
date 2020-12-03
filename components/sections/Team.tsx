import { ReactElement } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";
import Image from 'next/image';


export default function Team(): ReactElement {
    return <Section id={'team'} bg={'blueGrey'}>
        <SectionHeader title={'The Team'} />

        <Container>
            <TwoColumnContainer widths={[30, 70]}>
                <div className={'avatar'}>
                    <Image src={'/images/mk.png'} alt={'Founder Logo'} width={200} height={220}/>
                </div>    

                <div className={'details'}>
                    <div className={'header'}>
                        <h3>Michael Ketzer</h3> <a href={'https://twitter.com/griefcode'} target={'_blank'} className={'twitter'}  rel={'noopener'}>@griefcode</a>
                    </div>
                    <div className={'subHeader'}>Founder & Developer of streamdota</div>

                    <div className={'description'}>
                    I have started playing around 15 years ago and started developing and hosting 10 years ago. Although I stopped playing dota, I still like to develope projects for it. I love to watch broadcasts, but I also enjoy it more with stats, interactions and in-depth information. That's how I started developing a platform to upgrade dota 2 streaming quality for streamers.
                    </div>
                </div>
            </TwoColumnContainer>        

            <div className={'info'}>Yep, I'm working alone on this! <br /> However, special thanks to <a href={'https://twitter.com/shokztv'} rel={'noopener'} target={'_blank'} className={'twitter noSpacing'}>@shokztv</a> for providing ideas and helping to advertise the website.</div>    
        </Container>

        <style jsx>{`
            .avatar {
                width: 10rem;
                height: 10rem;
                border-radius: 5rem;
                margin: 0 auto;
                overflow: hidden;
            }

            .avatar img {
                object-fit: cover;
                width: 100%;
            }

            h3 {
                margin: 0 0 .25rem 0;
            }

            .header {
                display: flex;
                align-items: center;
            }

            .twitter {
                margin-left: .5rem;
                font-size: .7rem;
                color: #0076BF;
                text-decoration: none;
            }
            .twitter.noSpacing {
                margin-left: 0;
            }
            .twitter:hover {
                text-decoration: underline;
            }

            .subHeader {
                font-size: .8rem;
                color: #444;
            }

            .description {
                font-size: .8rem;
                margin-top: .8rem;
            }

            .info {
                padding: 2rem;
                text-align: center;
                color: #444;
                font-size: .8rem;
            }
        `}</style>
    </Section>
}