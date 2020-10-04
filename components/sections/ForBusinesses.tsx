import { ReactElement } from "react";
import Container from "../Container";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";


export default function ForBusiness(): ReactElement {
    return <Section id={'forBusiness'} bg={'gradiant'}>
        <SectionHeader title={'For Business and Tournament Organizers'} />
        <SectionDescription>Our overlays offer a lot of sponsorship opportunities and requires only minimal effort on our side</SectionDescription>

        <Container>
            <h4>ESLM Dota 2 - Season 2 - Custom branded vote system</h4>

            <div className={'videoContainer'}>
                <video width={'100%'} autoPlay loop playsInline muted>
                    <source src={'/videos/branded_vote_system.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </Container>

        <style jsx>{`
            h4 {
                text-align: center;
            }

            .videoContainer {
                max-width: 600px;
                margin: 0 auto;
                padding: 0 2rem;
            }
        `}</style>
    </Section>;
}