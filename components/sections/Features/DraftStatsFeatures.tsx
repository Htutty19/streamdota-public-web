import React, { ReactElement } from "react";
import FeatureList from "../../FeatureList";

const features = [
    {
        icon: <svg width="50" height="22" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.125 15.8438L38.625 13.8437L34.875 16.6562L36.375 18.6563L40.125 15.8438ZM45 15C46.0391 15 47 14.6875 47.7969 14.1484C48.3281 13.7891 48.7891 13.3281 49.1484 12.7969C49.6875 12 50 11.0391 50 10C50 8.96094 49.6875 8 49.1484 7.20312C48.9687 6.9375 48.7656 6.6875 48.5391 6.46094C48.3125 6.23437 48.0625 6.03125 47.7969 5.85156C47 5.3125 46.0391 5 45 5C43.9609 5 43 5.3125 42.2031 5.85156C41.6719 6.21094 41.2109 6.67187 40.8516 7.20312C40.3125 8 40 8.96094 40 10C40 12.7578 42.2422 15 45 15ZM45 7.5C46.375 7.5 47.5 8.625 47.5 10C47.5 11.375 46.375 12.5 45 12.5C43.625 12.5 42.5 11.375 42.5 10C42.5 8.625 43.625 7.5 45 7.5ZM7.79688 19.6016C7 19.0625 6.03906 18.75 5 18.75C3.96094 18.75 3 19.0625 2.20313 19.6016C1.67188 19.9609 1.21094 20.4219 0.851562 20.9531C0.3125 21.75 0 22.7109 0 23.75C0 26.5078 2.24219 28.75 5 28.75C7.75781 28.75 10 26.5078 10 23.75C10 22.7109 9.6875 21.75 9.14844 20.9531C8.78906 20.4219 8.32813 19.9609 7.79688 19.6016V19.6016ZM5 26.25C3.625 26.25 2.5 25.125 2.5 23.75C2.5 22.375 3.625 21.25 5 21.25C6.375 21.25 7.5 22.375 7.5 23.75C7.5 25.125 6.375 26.25 5 26.25ZM11.875 25H15.625V22.5H11.875V25ZM48.5391 31.4609C48.3125 31.2344 48.0625 31.0312 47.7969 30.8516C47 30.3125 46.0391 30 45 30C43.9609 30 43 30.3125 42.2031 30.8516C41.9453 31.0234 41.7109 31.2187 41.4922 31.4375L34.3203 27.1328C34.7578 26.0937 35 24.9453 35 23.75C35 18.9141 31.0859 15 26.25 15C25.3672 15 24.5391 15.1719 23.7344 15.4062L20.6641 8.83594C21.7813 7.92187 22.5 6.55469 22.5 5C22.5 3.96094 22.1875 3 21.6484 2.20313C21.2891 1.67188 20.8281 1.21094 20.2969 0.851562C19.5 0.3125 18.5391 0 17.5 0C16.4609 0 15.5 0.3125 14.7031 0.851562C14.1719 1.21094 13.7109 1.67188 13.3516 2.20313C12.8125 3 12.5 3.96094 12.5 5C12.5 7.75781 14.7422 10 17.5 10C17.8125 10 18.1172 9.96094 18.4141 9.90625L21.4609 16.4375C19.0781 18 17.5 20.6875 17.5 23.75C17.5 28.5859 21.4141 32.5 26.25 32.5C28.9844 32.5 31.3906 31.2188 33 29.2578L40.2187 33.5859C40.0859 34.0391 40.0078 34.5078 40.0078 35C40.0078 37.7578 42.25 40 45.0078 40C46.0469 40 47.0078 39.6875 47.8047 39.1484C48.3359 38.7891 48.7969 38.3281 49.1563 37.7969C49.6875 37 50 36.0391 50 35C50 33.9609 49.6875 33 49.1484 32.2031C48.9687 31.9375 48.7578 31.6875 48.5391 31.4609V31.4609ZM17.5 7.5C16.125 7.5 15 6.375 15 5C15 3.625 16.125 2.5 17.5 2.5C18.875 2.5 20 3.625 20 5C20 6.375 18.875 7.5 17.5 7.5ZM26.25 30C22.8047 30 20 27.1953 20 23.75C20 20.3047 22.8047 17.5 26.25 17.5C29.6953 17.5 32.5 20.3047 32.5 23.75C32.5 27.1953 29.6953 30 26.25 30ZM45 37.5C43.625 37.5 42.5 36.375 42.5 35C42.5 33.625 43.625 32.5 45 32.5C46.375 32.5 47.5 33.625 47.5 35C47.5 36.375 46.375 37.5 45 37.5Z" />
        </svg>,
        text: 'Reference stats can be either a league or a whole patch (only pro games)',
    }, 
    {
        icon: <svg width="46" height="22" viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.4286 0H4.28571C1.91964 0 0 1.91964 0 4.28571V35.7143C0 38.0804 1.91964 40 4.28571 40H41.4286C43.7946 40 45.7143 38.0804 45.7143 35.7143V4.28571C45.7143 1.91964 43.7946 0 41.4286 0ZM2.85714 4.28571C2.85714 3.5 3.5 2.85714 4.28571 2.85714H8.57143V8.57143H2.85714V4.28571ZM42.8571 35.7143C42.8571 36.5 42.2143 37.1429 41.4286 37.1429H4.28571C3.5 37.1429 2.85714 36.5 2.85714 35.7143V11.4286H42.8571V35.7143ZM42.8571 8.57143H11.4286V2.85714H41.4286C42.2143 2.85714 42.8571 3.5 42.8571 4.28571V8.57143Z" />
        </svg>,
        text: 'There is a dashboard mirroring all draft events with an easier oversight',
    }, 
    {
        icon: <svg width="35" height="25" viewBox="0 0 35 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 32.5C20 33.8828 18.8828 35 17.5 35C16.1172 35 15 33.8828 15 32.5C15 30.8359 16.1172 30 17.5 30C18.8828 30 20 31.1172 20 32.5ZM35 3.75V36.25C35 38.3203 33.3203 40 31.25 40H3.75C1.67969 40 0 38.3203 0 36.25V3.75C0 1.67969 1.67969 0 3.75 0H31.25C33.3203 0 35 1.67969 35 3.75ZM32.5 3.75C32.5 3.0625 31.9375 2.5 31.25 2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V36.25C2.5 36.9375 3.0625 37.5 3.75 37.5H31.25C31.9375 37.5 32.5 36.9375 32.5 36.25V3.75Z" />
        </svg>,        
        text: 'Tablets are covered so there is no need on multiply monitors just to use these stats',
    },
    {
        icon: <svg width="39" height="25" viewBox="0 0 39 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8672 18.8047L1.62734 23.7039C0.40625 24.0508 0.263281 25.7242 1.40703 26.2734L5.725 28.3469L0.991406 33.0805C0.0148437 34.057 0.0148437 35.6398 0.991406 36.6156L2.75859 38.3828C3.24688 38.8711 3.88672 39.1148 4.52656 39.1148C5.16641 39.1148 5.80625 38.8711 6.29453 38.3828L11.0281 33.6492L13.1016 37.9672C13.3555 38.4953 13.8484 38.7492 14.3406 38.7492C14.9141 38.7492 15.4844 38.4047 15.6719 37.7469L20.5719 20.507C20.8664 19.468 19.9055 18.5094 18.8672 18.8047V18.8047ZM14.0742 34.2203L11.7539 29.3883L4.52656 36.6156L2.75937 34.8484L9.98672 27.6211L5.15547 25.3L17.6164 21.7586L14.0742 34.2203ZM25.625 20C25.625 16.5539 22.8211 13.75 19.375 13.75C16.7391 13.75 14.4898 15.3961 13.5734 17.7102C17.818 16.5031 18.4898 16.25 19.375 16.25C21.443 16.25 23.125 17.932 23.125 20C23.125 20.8797 22.8828 21.5188 21.6648 25.8016C23.9789 24.8852 25.625 22.6359 25.625 20ZM19.6812 32.782C26.618 32.6148 32.1875 26.9758 32.1875 20C32.1875 12.918 26.4562 7.1875 19.375 7.1875C12.3977 7.1875 6.76016 12.7578 6.59297 19.6938L9.16719 18.9625C9.69687 13.768 14.0438 9.6875 19.375 9.6875C25.0617 9.6875 29.6875 14.3133 29.6875 20C29.6875 25.3305 25.6063 29.6781 20.4133 30.2078L19.6812 32.782V32.782ZM19.375 0.625C8.67422 0.625 0 9.29922 0 20C0 20.5703 0.0367188 21.132 0.0851563 21.6898C0.355469 21.5359 0.632031 21.3875 0.94375 21.2992L2.54297 20.8445C2.52891 20.5633 2.5 20.2852 2.5 20C2.5 10.6953 10.0703 3.125 19.375 3.125C28.6797 3.125 36.25 10.6953 36.25 20C36.25 29.3047 28.6797 36.875 19.375 36.875C19.0898 36.875 18.8117 36.8461 18.5305 36.832L18.0758 38.4305C17.9867 38.7445 17.8297 39.0164 17.6742 39.2883C18.2359 39.3375 18.8008 39.3742 19.375 39.3742C30.0758 39.3742 38.75 30.7 38.75 19.9992C38.75 9.29844 30.0758 0.625 19.375 0.625Z" />
        </svg>,
        text: 'Show stats with a single click on your dashboard',
    }, 
    {
        icon: <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75001 20.625C7.71094 20.625 6.87501 21.4609 6.87501 22.5C6.87501 23.5391 7.71094 24.375 8.75001 24.375C9.78907 24.375 10.625 23.5391 10.625 22.5C10.625 21.4609 9.78907 20.625 8.75001 20.625ZM11.25 11.875C10.2109 11.875 9.37501 12.7109 9.37501 13.75C9.37501 14.7891 10.2109 15.625 11.25 15.625C12.2891 15.625 13.125 14.7891 13.125 13.75C13.125 12.7109 12.2891 11.875 11.25 11.875ZM20 0C18.6797 0 17.3281 0.125 15.9609 0.390625C8.19532 1.90625 1.93751 8.14844 0.406255 15.8906C-2.29687 29.5703 9.09376 40 18.7109 40C19.3594 40 20 39.9531 20.6328 39.8516C23.8516 39.3516 25.4297 35.5859 23.9531 32.6875C22.1484 29.1406 24.7266 25 28.7109 25H34.9375C37.7344 25 40 22.6875 40.0078 19.8984C39.9688 8.89844 31.0234 0 20 0ZM34.9297 22.5H28.7031C25.9453 22.5 23.4375 23.8984 22.0078 26.2344C20.5859 28.5547 20.4766 31.3906 21.7188 33.8281C22.1016 34.5781 22.0938 35.5156 21.7109 36.2734C21.5234 36.6328 21.0938 37.2578 20.25 37.3906C19.7578 37.4688 19.2422 37.5078 18.7109 37.5078C14.4453 37.5078 9.79688 35.0625 6.56251 31.1328C3.12501 26.9453 1.80469 21.7109 2.85938 16.3906C4.19532 9.625 9.65626 4.1875 16.4453 2.85937C17.6328 2.625 18.8281 2.50781 20 2.50781C29.6172 2.50781 37.4688 10.3125 37.5 19.8984C37.5 21.3281 36.3438 22.5 34.9297 22.5V22.5ZM28.75 10.625C27.7109 10.625 26.875 11.4609 26.875 12.5C26.875 13.5391 27.7109 14.375 28.75 14.375C29.7891 14.375 30.625 13.5391 30.625 12.5C30.625 11.4609 29.7891 10.625 28.75 10.625ZM18.75 6.875C17.7109 6.875 16.875 7.71094 16.875 8.75C16.875 9.78906 17.7109 10.625 18.75 10.625C19.7891 10.625 20.625 9.78906 20.625 8.75C20.625 7.71094 19.7891 6.875 18.75 6.875Z" />
        </svg>,
        text: 'Match the overlays your stream szene with ease',
    }, 
]

export default function DraftStatsFeatures(): ReactElement {
    return <FeatureList features={features} iconColor={'#CA054D'} />;
}