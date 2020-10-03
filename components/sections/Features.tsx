import { ReactElement } from "react";
import Card from "../Card";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import SectionHeader from "../SectionHeader";
import CardRow from "./Features/CardRow";


export default function Features(): ReactElement {
    return <Section id={'features'}>
        <SectionHeader title={'What features does streamdota offer?'} />
        <SectionDescription>A collection of overlays to enrich your stream with statistics and information</SectionDescription>
        <CardRow />


    </Section>;
}