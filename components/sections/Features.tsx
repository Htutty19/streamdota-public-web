import { ReactElement } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";
import AntiSnipeFeatures from "./Features/AntiSnipeFeatures";
import CardRow from "./Features/CardRow";
import DotaWLFeatures from "./Features/DotaWLFeatures";
import DraftStatsFeatures from "./Features/DraftStatsFeatures";
import HeroStatsFeatures from "./Features/HeroStatsFeatures";
import RoshanFeatures from "./Features/RoshanFeatures";
import VoteSystemFeatures from "./Features/VoteSystemFeatures";


export default function Features(): ReactElement {
    return <>
        <Section id={'features'}>
            <SectionHeader title={'What features does streamdota offer?'} />
            <SectionDescription>A collection of overlays to enrich your stream with statistics and information</SectionDescription>
            <CardRow />
        </Section>

        <Section id={'voteSystem'} bg={'blueGrey'}>
            <Container>
                <div className={'featureContainer'}>
                    <div className={'description'}>
                        <h3>Vote System</h3>
                        
                        <TwoColumnContainer reverseWrap>
                            <VoteSystemFeatures />
                            <div className={'preview'}>
                                <video width={'100%'} autoPlay loop playsInline muted>
                                    <source src={'/videos/vote_system_preview.mp4'} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </TwoColumnContainer>
                    </div>
                </div>
            </Container>
        </Section>

        <Section id={'dotaWL'}>
            <Container>
                <div className={'featureContainer'}>
                    <div className={'description'}>
                        <h3>Gameplay Tool - Dota Win/Loss Overlay</h3>
                        
                        <TwoColumnContainer>
                            <div className={'preview imagePreview'}>
                                <img src={'/images/winLoss.jpg'} alt={'Win Loss Overlay'} />
                            </div>

                            <DotaWLFeatures />
                        </TwoColumnContainer>
                    </div>
                </div>
            </Container>
        </Section>

        <Section id={'antiSnipeMap'} bg={'blueGrey'}>
            <Container>
                <div className={'featureContainer'}>
                    <div className={'description'}>
                        <h3>Gameplay Tool - Anti Snipe Minimap <span className={'newLabel'}>NEW</span></h3>
                        
                        <TwoColumnContainer reverseWrap>
                            <AntiSnipeFeatures />

                            <div className={'preview imagePreview minimap'}>
                                <img src={'/images/snipeMap.png'} alt={'Win Loss Overlay'} />
                            </div>
                        </TwoColumnContainer>
                    </div>
                </div>
            </Container>
        </Section>

        <Section id={'roshanTimer'}>
            <Container>
                <div className={'featureContainer'}>
                    <div className={'description'}>
                        <h3>Observer Tool - Roshan Timer</h3>
                        
                        <TwoColumnContainer>
                            <div className={'preview imagePreview'}>
                                <img src={'/images/roshanTimer.jpg'} alt={'Roshan timer'} />
                            </div>
                            <RoshanFeatures />
                        </TwoColumnContainer>
                    </div>
                </div>
            </Container>
        </Section>

        <Section id={'draftStats'} bg={'blueGrey'}>
            <Container>
                <div className={'featureContainer'}>
                    <div className={'description'}>
                        <h3>Observer Tool - Draft Stats <span className={'newLabel'}>NEW</span></h3>
                        
                        <TwoColumnContainer reverseWrap>
                            <DraftStatsFeatures />
                            <video width={'100%'} autoPlay loop playsInline muted>
                                <source src={'/videos/draft_stats.mp4'} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </TwoColumnContainer>
                    </div>
                </div>
            </Container>
        </Section>

        <Section id={'heroStats'}>
            <Container>
                <div className={'featureContainer'}>
                    <div className={'description'}>
                        <h3>Observer Tool - Hero Stats <span className={'newLabel'}>NEW</span></h3>
                        
                        <TwoColumnContainer>
                            <video width={'100%'} autoPlay loop playsInline muted>
                                <source src={'/videos/hero_stats.mp4'} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <HeroStatsFeatures />
                        </TwoColumnContainer>
                    </div>
                </div>
            </Container>
        </Section>

        <style jsx>{`
            .featureContainer {
                padding: 0 1rem;
            }

            .imagePreview {
                display: flex;
                justify-content: center;
            }

            .imagePreview img {
                transform: scale(1.3);
                max-width: 80%;
                object-fit: contain;
                margin: 2rem 0;
            }

            .minimap {
                max-width: 400px;
                margin: 0 auto;
                height:260px;
            }

            .newLabel {
                background-color: var(--primary-accent);
                padding: .25rem .5rem;
                border-radius: .2rem;
                color: #FFF;
                text-transform: uppercase;
                font-size: .8rem;
                font-weight: bold;
                margin-left: 1rem;
                vertical-align: .1rem;
            }


            @media screen and (max-width: 1100px) { 
                h3 {
                    text-align: center;
                }
            }
        `}</style>
    </>;
}