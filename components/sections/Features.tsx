import { ReactElement } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";
import CardRow from "./Features/CardRow";
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

        <style jsx>{`
            .featureContainer {
                padding: 0 1rem;
            }


            @media screen and (max-width: 1100px) { 
                h3 {
                    text-align: center;
                }
            }
        `}</style>
    </>;
}