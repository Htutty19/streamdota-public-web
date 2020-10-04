import { ReactElement } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";


export default function Team(): ReactElement {
    return <Section id={'team'} bg={'blueGrey'}>
        <SectionHeader title={'The Team'} />

        <Container>
            <TwoColumnContainer widths={[30, 70]}>
                <div className={'avatar'}>
                    <img src={'/images/mk.png'} alt={'Founder Logo'} />
                </div>    

                <div className={'details'}>
                    <div className={'header'}>
                        <h3>Michael Ketzer</h3> <a href={'https://twitter.com/griefcode'} target={'_blank'} className={'twitter'}>@griefcode</a>
                    </div>
                    <div className={'subHeader'}>Founder & Developer of streamdota</div>

                    <div className={'description'}>
                        I have started playing dota like 15 years ago and started developing and hosting it 10 years ago. Although i stopped playing dota, i still like to work and develope for it. I love to watch castings, but I enjoy it a lot more with some stats, interactions and in-depth information. That's how i started developing a platform for twitch streamers.
                    </div>
                </div>
            </TwoColumnContainer>        

            <div className={'info'}>Yep, I'm working alone on this! <br /> However, special thanks to <a href={'https://twitter.com/shokztv'} target={'_blank'} className={'twitter noSpacing'}>@shokztv</a> for providing ideas and helping to advertise the website.</div>    
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
                color: rgb(29, 161, 242);
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