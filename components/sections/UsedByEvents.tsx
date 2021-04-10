import Card from "../Card";
import Container from "../Container";
import Image from "next/image";
import { ReactElement } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import TwoColumnContainer from "../TwoColumnContainer";
import classNames from "classnames";

const events = [
  {
    logo: '/images/events/eslm.png',
    logoAlt: 'ESL Meisterschaft Logo',
    logoProps: {
      height: 200,
      width: 193,
    },
    name: 'ESL Meisterschaft 2020 Dota 2',
    logoPadded: false,
    description: <>
      We have created a custom branded vote system.<br /> Additionally we provide a roshan timer, draft stats and hero stats.
    </>,
  },  {
    logo: '/images/events/fragster.png',
    logoAlt: 'Fragster Logo',
    logoProps: {
      height: 60,
      width: 300,
    },
    name: 'Fragster DotA 2 Showdown',
    logoPadded: false,
    description: <>
      We provided a roshan timer and our vote system.
    </>,
  },  {
    logo: '/images/events/acl.png',
    logoAlt: 'ACL Logo',
    logoProps: {
      height: 210,
      width: 200,
    },
    name: 'ACL Masters',
    logoPadded: false,
    description: <>
      We provided our vote system, roshan timer and further
                      stats for ACL Masters.
    </>,
  },  {
    logo: '/images/events/schlag_ivy.png',
    logoAlt: 'Schlag Ivy Logo',
    logoProps: {
      width: 300,
      height: 169,
    },
    logoPadded: true,
    name: '"Schlag IVY"',
    description: <>
      We provided our vote system, roshan timer, hero stats & twitter question feed.
    </>,
  }
]
export default function UsedByEvents(): ReactElement {
  return (
    <Section bg={"blueGrey"} id={"events"}>
      <SectionHeader title={"Which events used streamdota?"} />
      <Container>
        <div className={"content"}>
          {events.map(({name, description, logo, logoAlt, logoProps, logoPadded}, idx) => <div className={"row"}>
            <Card>
              <div className={"cardContent"}>
                <TwoColumnContainer reversed={idx % 2 === 0}>
                  <div className={classNames("logo", {padded: logoPadded})}>
                    <Image src={logo} alt={logoAlt} {...logoProps}/>
                  </div>

                  <div className={"details"}>
                    <h3>{name}</h3>
                    <div className={"description"}>
                      {description}
                    </div>
                  </div>
                </TwoColumnContainer>
              </div>
            </Card>
          </div>)}
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

        .logo.padded {
          max-width: 300px;
        }

        .row {
          padding: 1rem 0;
        }

        .description {
          font-size: 0.9rem;
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

          .cardContent {
            padding: 1rem;
          }
        }
      `}</style>
    </Section>
  );
}
