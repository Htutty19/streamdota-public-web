import { ReactElement } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";
import AntiSnipeFeatures from "./Features/AntiSnipeFeatures";
import CardRow from "./Features/CardRow";
import DotaWLFeatures from "./Features/DotaWLFeatures";
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
                        
                        <TwoColumnContainer>
                            <VoteSystemFeatures />
                            <div className={'preview'}>
                                <video width={'100%'} autoPlay loop controls playsInline>
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
                        <h3>Gameplay Tool - Anti Snipe Minimap</h3>
                        
                        <TwoColumnContainer>
                            <AntiSnipeFeatures />

                            <div className={'preview imagePreview minimap'}>
                                <img src={'/images/snipeMap.png'} alt={'Win Loss Overlay'} />
                            </div>
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
            }

            .minimap {
                max-width: 400px;
                margin: 0 auto;
                height:200px;
            }


            @media screen and (max-width: 1100px) { 
                h3 {
                    text-align: center;
                }
            }
        `}</style>
    </>;
}