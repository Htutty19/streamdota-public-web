import { ReactElement, ReactNode } from "react";

interface Props {
    features: Array<{
        icon: ReactNode;
        text: string;
    }>;
    iconColor: string;
}

export default function FeatureList({features, iconColor}: Props): ReactElement {
    return <div className={'featureList'}>

        {features.map(({icon, text}, idx) => <div className={'feature'} key={idx}>
            <div className={'icon'}>
                {icon}
            </div>
            <div className={'featureDescription'}>
                {text}
            </div>
        </div>)}

        <style jsx>{`
            .feature {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
            }

            .icon {
                height: 2.75rem;
                width: 2.75rem;
                margin-right: 1rem;
                fill: ${iconColor};
                background-color: #FFF;
                border: 1px solid rgba(0,0,0,0.1);
                box-shadow: 0 0 2px rgba(0,0,0,0.1);
                border-radius: .1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .featureDescription {
                font-size: .9rem;
                line-height: 1.1em;
            }
        `}</style>
    </div>;
}