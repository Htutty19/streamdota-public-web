import AntiSnipeFeatures from "./Features/AntiSnipeFeatures";
import CardRow from "./Features/CardRow";
import ChatAnalysesFeatures from "./Features/ChatAnalyses";
import ChatQuestionsFeatures from "./Features/ChatQuestionsFeatures";
import Container from "../Container";
import DotaWLFeatures from "./Features/DotaWLFeatures";
import DraftPanelFeatures from "./Features/DraftPanelFeatures";
import DraftStatsFeatures from "./Features/DraftStatsFeatures";
import HeroStatsFeatures from "./Features/HeroStatsFeatures";
import HowDoesStreamdotaWork from "./HowDoesStreamdotaWork";
import Image from "next/image";
import { ReactElement } from "react";
import RoshanFeatures from "./Features/RoshanFeatures";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import TwitchPredictions from "./Features/TwitchPredictions";
import TwoColumnContainer from "../TwoColumnContainer";
import VoteSystemFeatures from "./Features/VoteSystemFeatures";

export default function Features(): ReactElement {
  return (
    <>
      <Section id={"features"}>
        <SectionHeader title={"What features does streamdota offer?"} />
        <SectionDescription>
          A collection of overlays to enrich your stream with statistics and information
        </SectionDescription>
        <CardRow />
      </Section>

      <HowDoesStreamdotaWork />

      <Section id={"voteSystem"} bg={"blueGrey"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Vote System</h3>

              <TwoColumnContainer reverseWrap>
                <VoteSystemFeatures />
                <div className={"preview"}>
                  <video width={"100%"} autoPlay loop playsInline muted>
                    <source
                      src={"/videos/vote_system_preview.mp4"}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"twitchPredictions"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Twitch Predictions <span className={'newLabel'}>NEW</span></h3>

              <TwoColumnContainer>
                <div className={"preview imagePreview"}>
                  <Image
                    src={"/images/twitchPredictions.jpg"}
                    alt={"Win Loss Overlay"}
                    width={500}
                    height={257}
                  />
                </div>
                <TwitchPredictions />
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"chatAnalyses"} bg={"blueGrey"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Chat Analyses <span className={'newLabel'}>NEW</span></h3>

              <TwoColumnContainer reverseWrap>
                <ChatAnalysesFeatures />
                <div className={"preview imagePreview"}>
                  <Image
                    src={"/images/chatAnalyses.PNG"}
                    alt={"Win Loss Overlay"}
                    width={400}
                    height={325}
                  />
                </div>
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"chatQuestions"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Chat Questions <span className={'newLabel'}>NEW</span></h3>

              <TwoColumnContainer>
                <div className={"preview"}>
                  <video width={"100%"} autoPlay loop playsInline muted>
                    <source
                      src={"/videos/questions.mp4"}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <ChatQuestionsFeatures />
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"dotaWL"} bg={"blueGrey"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Gameplay Tool - Dota Win/Loss Overlay</h3>

              <TwoColumnContainer reverseWrap>
                <DotaWLFeatures />
                <div className={"preview imagePreview"}>
                  <Image
                    src={"/images/winLoss.jpg"}
                    alt={"Win Loss Overlay"}
                    width={424}
                    height={191}
                  />
                </div>
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"antiSnipeMap"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Gameplay Tool - Anti Snipe Minimap</h3>

              <TwoColumnContainer>
                <div className={"preview imagePreview minimap"}>
                  <Image
                    src={"/images/snipeMap.png"}
                    alt={"Win Loss Overlay"}
                    width={320}
                    height={180}
                  />
                </div>
                <AntiSnipeFeatures />
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"roshanTimer"} bg={"blueGrey"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Observer Tool - Roshan Timer</h3>

              <TwoColumnContainer reverseWrap>
                <RoshanFeatures />
                <div className={"preview imagePreview"}>
                  <Image
                    src={"/images/roshanTimer.jpg"}
                    alt={"Roshan timer"}
                    width={424}
                    height={191}
                  />
                </div>
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"draftStats"} >
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Observer Tool - Draft Stats </h3>

              <TwoColumnContainer>
                <video width={"100%"} autoPlay loop playsInline muted>
                  <source src={"/videos/draft_stats.mp4"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <DraftStatsFeatures />
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"heroStats"} bg={"blueGrey"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Observer Tool - Hero Stats </h3>

              <TwoColumnContainer reverseWrap>
                <HeroStatsFeatures />
                <video width={"100%"} autoPlay loop playsInline muted>
                  <source src={"/videos/hero_stats.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
              </TwoColumnContainer>
            </div>
          </div>
        </Container>
      </Section>

      <Section id={"draftPanel"}>
        <Container>
          <div className={"featureContainer"}>
            <div className={"description"}>
              <h3>Observer Tool - Draft Panel <span className={'newLabel'}>COMING SOON</span></h3>

              <TwoColumnContainer>
                <video width={"100%"} autoPlay loop playsInline muted>
                  <source src={"/videos/draft_panel.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                <DraftPanelFeatures />
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
          height: 260px;
        }

        .newLabel {
          background-color: var(--primary-accent);
          padding: 0.25rem 0.5rem;
          border-radius: 0.2rem;
          color: #000;
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: bold;
          margin-left: 1rem;
          vertical-align: 0.1rem;
        }

        @media screen and (max-width: 1100px) {
          h3 {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
