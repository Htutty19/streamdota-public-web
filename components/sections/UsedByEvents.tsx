import { ReactElement } from "react";
import Card from "../Card";
import Container from "../Container";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";
import Image from 'next/image';


export default function UsedByEvents(): ReactElement {
    return <Section bg={'blueGrey'} id={'events'}>
        <SectionHeader title={'Which events used streamdota?'} />
        <Container>
            <div className={'content'}>
                <div className={'row'}>
                    <Card>
                        <div className={'cardContent'}>
                            <TwoColumnContainer>
                                <div className={'logo'}>
                                    <Image src={'/images/events/eslm.png'} alt={'ESL Meisterschaft Logo'} height={200} width={193} />
                                </div>

                                <div className={'details'}>
                                    <h3>ESL Meisterschaft 2020 Dota 2 - Season 2</h3>
                                    <div className={'description'}>
                                        We have created a custom branded vote system.<br /> Additionally we provide a roshan timer, draft stats and hero stats.
                                    </div>
                                </div>
                            </TwoColumnContainer>
                        </div>
                    </Card>
                </div>

                <div className={'row'}>
                    <Card>
                        <div className={'cardContent'}>
                            <TwoColumnContainer reverseWrap>
                                <div className={'details'}>
                                    <h3>Fragster DotA 2 Showdown</h3>
                                    <div className={'description'}>
                                        We provided a roshan timer and our vote system.
                                    </div>
                                </div>

                                <div className={'logo fragster'}>
                                    <Image src={'/images/events/fragster.png'} alt={'Fragster Logo'} height={60} width={300} />
                                </div>
                            </TwoColumnContainer>
                            </div>
                    </Card>
                </div>

                <div className={'row'}>
                    <Card>
                        <div className={'cardContent'}>
                            <TwoColumnContainer>
                                <div className={'logo'}>
                                    <Image src={'/images/events/acl.png'} alt={'ACL'} height={210} width={200} />
                                </div>

                                <div className={'details'}>
                                    <h3>ACL Masters #1 / #2 / #3</h3>
                                    <div className={'description'}>
                                        We provided our vote system. FOR ACL Masters #3 we provided our roshan timer and hero stats.
                                    </div>
                                </div>
                            </TwoColumnContainer>
                        </div>
                    </Card>
                </div>
            </div>
        </Container>

        <style jsx>{`
            .content {
                padding: 0 5rem;
            }

            .cardContent {
                padding: 3rem;
            }

            .logo {
                max-width: 200px;
                margin: 0 auto;
            }

            .row {
                padding: 1rem 0;
            }

            .description {
                font-size: .9rem;
                color: #444;
            }

            h3 {
                margin-top: 0;
            }

            img {
                object-fit: cover;
                width: 100%;
            }

            .fragster {
                max-width: 300px;
            }

            @media screen and (max-width: 1100px) { 
                .content {
                    text-align: center;
                }
            }

            @media screen and (max-width: 700px) { 
                .content {
                    padding: 0 2rem;
                }
            }
        `}</style>
    </Section>;
}