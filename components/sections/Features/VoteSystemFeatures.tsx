import { ReactElement } from "react";


export default function VoteSystemFeatures(): ReactElement {
    return <div className={'featureList'}>
        <div className={'feature'}>
            <div className={'icon'}>
                <svg width="38" height="25" viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.625 20.625H33.75V14.9068C33.75 13.9242 32.952 13.125 31.9682 13.125H19.6875V9.375H22.5C23.5354 9.375 24.375 8.53535 24.375 7.5V1.875C24.375 0.839648 23.5354 0 22.5 0H15C13.9646 0 13.125 0.839648 13.125 1.875V7.5C13.125 8.53535 13.9646 9.375 15 9.375H17.8125V13.125H5.53184C4.54805 13.125 3.75 13.9242 3.75 14.9068V20.625H1.875C0.839648 20.625 0 21.4646 0 22.5V28.125C0 29.1604 0.839648 30 1.875 30H7.5C8.53535 30 9.375 29.1604 9.375 28.125V22.5C9.375 21.4646 8.53535 20.625 7.5 20.625H5.625V15H17.8125V20.625H15.9375C14.9021 20.625 14.0625 21.4646 14.0625 22.5V28.125C14.0625 29.1604 14.9021 30 15.9375 30H21.5625C22.5979 30 23.4375 29.1604 23.4375 28.125V22.5C23.4375 21.4646 22.5979 20.625 21.5625 20.625H19.6875V15H31.875V20.625H30C28.9646 20.625 28.125 21.4646 28.125 22.5V28.125C28.125 29.1604 28.9646 30 30 30H35.625C36.6604 30 37.5 29.1604 37.5 28.125V22.5C37.5 21.4646 36.6604 20.625 35.625 20.625ZM7.5 22.5V28.125H1.875V22.5H7.5ZM21.5625 22.5V28.125H15.9375V22.5H21.5625ZM15 7.5V1.875H22.5V7.5H15ZM35.625 28.125H30V22.5H35.625V28.125Z"/>
                </svg>
            </div>
            <div className={'featureDescription'}>
                Group votings by different seasons or categories, you will never need to reset anything
            </div>
        </div>

        <div className={'feature'}>
            <div className={'icon'}>
            <svg width="30" height="25" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 15C20.4922 15 17.8125 17.5 17.5234 20.6875C15.5547 20.5859 12.7109 20.0703 10.5859 18.2109C9 16.8203 8.02344 14.8516 7.65625 12.3437C10.4297 11.7031 12.5 9.21875 12.5 6.25781C12.5 2.80469 9.70313 0.0078125 6.25 0.0078125C2.79687 0.0078125 0 2.79687 0 6.25C0 9.27344 2.14844 11.7969 5 12.375V27.625C2.14844 28.2031 0 30.7266 0 33.75C0 37.2031 2.79687 40 6.25 40C9.70313 40 12.5 37.2031 12.5 33.75C12.5 30.7266 10.3516 28.2031 7.5 27.625V18.5469C7.92969 19.1094 8.41406 19.6328 8.95312 20.1016C11.7969 22.5781 15.4609 23.1328 17.8125 23.2031C18.6328 25.6953 20.9766 27.5 23.75 27.5C27.2031 27.5 30 24.7031 30 21.25C30 17.7969 27.2031 15 23.75 15ZM2.5 6.25C2.5 4.17969 4.17969 2.5 6.25 2.5C8.32031 2.5 10 4.17969 10 6.25C10 8.32031 8.32031 10 6.25 10C4.17969 10 2.5 8.32031 2.5 6.25ZM10 33.75C10 35.8203 8.32031 37.5 6.25 37.5C4.17969 37.5 2.5 35.8203 2.5 33.75C2.5 31.6797 4.17969 30 6.25 30C8.32031 30 10 31.6797 10 33.75ZM23.75 25C21.6797 25 20 23.3203 20 21.25C20 19.1797 21.6797 17.5 23.75 17.5C25.8203 17.5 27.5 19.1797 27.5 21.25C27.5 23.3203 25.8203 25 23.75 25Z" />
            </svg>

            </div>
            <div className={'featureDescription'}>
                Share a toplist with other streamers and collaborate for a goal 
            </div>
        </div>

        <div className={'feature'}>
            <div className={'icon'}>
            <svg width="35" height="25" viewBox="0 0 35 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.1563 16.7734L5.65625 0.515623C3.42188 -0.804689 0 0.476561 0 3.74219V36.25C0 39.1797 3.17969 40.9453 5.65625 39.4766L33.1563 23.2266C35.6094 21.7812 35.6172 18.2187 33.1563 16.7734V16.7734ZM31.8906 21.0781L4.39063 37.3281C3.5625 37.8047 2.5 37.2344 2.5 36.25V3.74219C2.5 2.46875 3.78125 2.30469 4.38281 2.66406L31.8828 18.9219C32.7031 19.4062 32.7031 20.5937 31.8906 21.0781V21.0781Z"/>
            </svg>
            </div>
            <div className={'featureDescription'}>
                Easily start your votings from our dashboard, by chat command, your streamdeck or automatically when the game starts
            </div>
        </div>

        <div className={'feature'}>
            <div className={'icon'}>
            <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.75001 20.625C7.71094 20.625 6.87501 21.4609 6.87501 22.5C6.87501 23.5391 7.71094 24.375 8.75001 24.375C9.78907 24.375 10.625 23.5391 10.625 22.5C10.625 21.4609 9.78907 20.625 8.75001 20.625ZM11.25 11.875C10.2109 11.875 9.37501 12.7109 9.37501 13.75C9.37501 14.7891 10.2109 15.625 11.25 15.625C12.2891 15.625 13.125 14.7891 13.125 13.75C13.125 12.7109 12.2891 11.875 11.25 11.875ZM20 0C18.6797 0 17.3281 0.125 15.9609 0.390625C8.19532 1.90625 1.93751 8.14844 0.406255 15.8906C-2.29687 29.5703 9.09376 40 18.7109 40C19.3594 40 20 39.9531 20.6328 39.8516C23.8516 39.3516 25.4297 35.5859 23.9531 32.6875C22.1484 29.1406 24.7266 25 28.7109 25H34.9375C37.7344 25 40 22.6875 40.0078 19.8984C39.9688 8.89844 31.0234 0 20 0ZM34.9297 22.5H28.7031C25.9453 22.5 23.4375 23.8984 22.0078 26.2344C20.5859 28.5547 20.4766 31.3906 21.7188 33.8281C22.1016 34.5781 22.0938 35.5156 21.7109 36.2734C21.5234 36.6328 21.0938 37.2578 20.25 37.3906C19.7578 37.4688 19.2422 37.5078 18.7109 37.5078C14.4453 37.5078 9.79688 35.0625 6.56251 31.1328C3.12501 26.9453 1.80469 21.7109 2.85938 16.3906C4.19532 9.625 9.65626 4.1875 16.4453 2.85937C17.6328 2.625 18.8281 2.50781 20 2.50781C29.6172 2.50781 37.4688 10.3125 37.5 19.8984C37.5 21.3281 36.3438 22.5 34.9297 22.5V22.5ZM28.75 10.625C27.7109 10.625 26.875 11.4609 26.875 12.5C26.875 13.5391 27.7109 14.375 28.75 14.375C29.7891 14.375 30.625 13.5391 30.625 12.5C30.625 11.4609 29.7891 10.625 28.75 10.625ZM18.75 6.875C17.7109 6.875 16.875 7.71094 16.875 8.75C16.875 9.78906 17.7109 10.625 18.75 10.625C19.7891 10.625 20.625 9.78906 20.625 8.75C20.625 7.71094 19.7891 6.875 18.75 6.875Z" />
            </svg>
            </div>
            <div className={'featureDescription'}>
                Match the overlays your stream szene with ease
            </div>
        </div>

        <div className={'feature'}>
            <div className={'icon'}>
            <svg width="70" height="25" viewBox="0 0 70 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 45H27.5V40H22.5V45ZM42.5 45H47.5V40H42.5V45ZM32.5 45H37.5V40H32.5V45ZM40 67.5C39.5055 67.5 39.0222 67.6466 38.6111 67.9213C38.2 68.196 37.8795 68.5865 37.6903 69.0433C37.5011 69.5001 37.4516 70.0028 37.548 70.4877C37.6445 70.9727 37.8826 71.4181 38.2322 71.7678C38.5819 72.1174 39.0273 72.3555 39.5123 72.452C39.9972 72.5484 40.4999 72.4989 40.9567 72.3097C41.4135 72.1205 41.804 71.8 42.0787 71.3889C42.3534 70.9778 42.5 70.4945 42.5 70C42.5 69.6717 42.4354 69.3466 42.3097 69.0433C42.1841 68.74 41.9999 68.4644 41.7678 68.2322C41.5356 68.0001 41.26 67.8159 40.9567 67.6903C40.6534 67.5646 40.3283 67.5 40 67.5V67.5ZM60 42.5H65C65.6566 42.5 66.3068 42.3707 66.9134 42.1194C67.5201 41.8682 68.0713 41.4999 68.5356 41.0356C68.9999 40.5713 69.3682 40.0201 69.6194 39.4134C69.8707 38.8068 70 38.1566 70 37.5V27.5C70 26.8434 69.8707 26.1932 69.6194 25.5866C69.3682 24.9799 68.9999 24.4287 68.5356 23.9644C68.0713 23.5001 67.5201 23.1318 66.9134 22.8806C66.3068 22.6293 65.6566 22.5 65 22.5H60V20C60 17.3478 58.9464 14.8043 57.071 12.929C55.1957 11.0536 52.6522 10 50 10H37.8124V2.8125C37.8124 2.06658 37.5161 1.35121 36.9886 0.823762C36.4612 0.296316 35.7458 0 34.9999 0C34.254 0 33.5386 0.296316 33.0111 0.823762C32.4837 1.35121 32.1874 2.06658 32.1874 2.8125V10H20C17.3478 10 14.8043 11.0536 12.929 12.929C11.0536 14.8043 10 17.3478 10 20V22.5H5C4.34339 22.5 3.6932 22.6293 3.08656 22.8806C2.47992 23.1318 1.92872 23.5001 1.46442 23.9644C1.00013 24.4287 0.631831 24.9799 0.380564 25.5866C0.129297 26.1932 -1.88764e-05 26.8434 2.06672e-09 27.5L2.06672e-09 37.5C-1.88764e-05 38.1566 0.129297 38.8068 0.380564 39.4134C0.631831 40.0201 1.00013 40.5713 1.46442 41.0356C1.92872 41.4999 2.47992 41.8682 3.08656 42.1194C3.6932 42.3707 4.34339 42.5 5 42.5H10V45C10.0017 46.9241 10.5623 48.8062 11.6135 50.4178C8.31499 51.179 5.3715 53.0347 3.2626 55.6827C1.15371 58.3307 0.00371437 61.6148 2.06672e-09 65L2.06672e-09 75C-1.88764e-05 75.6566 0.129297 76.3068 0.380564 76.9134C0.631831 77.5201 1.00013 78.0713 1.46442 78.5356C1.92872 78.9999 2.47992 79.3682 3.08656 79.6194C3.6932 79.8707 4.34339 80 5 80H65C65.6566 80 66.3068 79.8707 66.9134 79.6194C67.5201 79.3682 68.0713 78.9999 68.5356 78.5356C68.9999 78.0713 69.3682 77.5201 69.6194 76.9134C69.8707 76.3068 70 75.6566 70 75V65C69.9963 61.6148 68.8463 58.3307 66.7374 55.6827C64.6285 53.0347 61.685 51.179 58.3865 50.4178C59.4377 48.8062 59.9983 46.9241 60 45V42.5ZM60 27.5H65V37.5H60V27.5ZM10 37.5H5V27.5H10V37.5ZM15 20C15.0015 18.6744 15.5288 17.4035 16.4661 16.4661C17.4035 15.5288 18.6744 15.0015 20 15H50C51.3256 15.0015 52.5965 15.5288 53.5339 16.4661C54.4712 17.4035 54.9985 18.6744 55 20V45C54.9985 46.3256 54.4712 47.5965 53.5339 48.5339C52.5965 49.4712 51.3256 49.9985 50 50H20C18.6744 49.9985 17.4035 49.4712 16.4661 48.5339C15.5288 47.5965 15.0015 46.3256 15 45V20ZM50 75H32.5V70C32.5 69.337 32.2366 68.7011 31.7678 68.2322C31.2989 67.7634 30.663 67.5 30 67.5C29.337 67.5 28.7011 67.7634 28.2322 68.2322C27.7634 68.7011 27.5 69.337 27.5 70V75H20V67.5C20 66.837 20.2634 66.2011 20.7323 65.7323C21.2011 65.2634 21.837 65 22.5 65H47.5C48.163 65 48.7989 65.2634 49.2677 65.7323C49.7366 66.2011 50 66.837 50 67.5V75ZM65 65V75H55V67.5C54.9977 65.5116 54.2068 63.6052 52.8008 62.1992C51.3948 60.7932 49.4884 60.0023 47.5 60H22.5C20.5116 60.0023 18.6052 60.7932 17.1992 62.1992C15.7932 63.6052 15.0023 65.5116 15 67.5V75H5V65C5.00303 62.3488 6.05757 59.807 7.93228 57.9323C9.80699 56.0576 12.3488 55.003 15 55H55C57.6512 55.003 60.193 56.0576 62.0677 57.9323C63.9424 59.807 64.997 62.3488 65 65V65ZM45 35C46.4834 35 47.9334 34.5601 49.1668 33.736C50.4001 32.9119 51.3614 31.7406 51.9291 30.3701C52.4968 28.9997 52.6453 27.4917 52.3559 26.0368C52.0665 24.582 51.3522 23.2456 50.3033 22.1967C49.2544 21.1478 47.918 20.4335 46.4632 20.1441C45.0083 19.8547 43.5003 20.0032 42.1299 20.5709C40.7594 21.1386 39.5881 22.0999 38.764 23.3332C37.9399 24.5666 37.5 26.0166 37.5 27.5C37.4999 28.4849 37.6939 29.4602 38.0708 30.3702C38.4477 31.2802 39.0001 32.107 39.6966 32.8034C40.393 33.4999 41.2198 34.0523 42.1298 34.4292C43.0398 34.8061 44.0151 35.0001 45 35V35ZM45 25C45.4945 25 45.9778 25.1466 46.3889 25.4213C46.8 25.696 47.1205 26.0865 47.3097 26.5433C47.4989 27.0001 47.5484 27.5028 47.452 27.9877C47.3555 28.4727 47.1174 28.9181 46.7678 29.2678C46.4181 29.6174 45.9727 29.8555 45.4877 29.952C45.0028 30.0484 44.5001 29.9989 44.0433 29.8097C43.5865 29.6205 43.196 29.3 42.9213 28.8889C42.6466 28.4778 42.5 27.9945 42.5 27.5C42.5008 26.8372 42.7644 26.2017 43.2331 25.7331C43.7017 25.2644 44.3372 25.0008 45 25V25ZM25 35C26.4834 35 27.9334 34.5601 29.1668 33.736C30.4001 32.9119 31.3614 31.7406 31.9291 30.3701C32.4968 28.9997 32.6453 27.4917 32.3559 26.0368C32.0665 24.582 31.3522 23.2456 30.3033 22.1967C29.2544 21.1478 27.918 20.4335 26.4632 20.1441C25.0083 19.8547 23.5003 20.0032 22.1299 20.5709C20.7594 21.1386 19.5881 22.0999 18.764 23.3332C17.9399 24.5666 17.5 26.0166 17.5 27.5C17.4999 28.4849 17.6939 29.4602 18.0708 30.3702C18.4477 31.2802 19.0001 32.107 19.6966 32.8034C20.393 33.4999 21.2198 34.0523 22.1298 34.4292C23.0398 34.8061 24.0151 35.0001 25 35V35ZM25 25C25.4945 25 25.9778 25.1466 26.3889 25.4213C26.8 25.696 27.1205 26.0865 27.3097 26.5433C27.4989 27.0001 27.5484 27.5028 27.452 27.9877C27.3555 28.4727 27.1174 28.9181 26.7678 29.2678C26.4181 29.6174 25.9727 29.8555 25.4877 29.952C25.0028 30.0484 24.5001 29.9989 24.0433 29.8097C23.5865 29.6205 23.196 29.3 22.9213 28.8889C22.6466 28.4778 22.5 27.9945 22.5 27.5C22.5008 26.8372 22.7644 26.2017 23.2331 25.7331C23.7017 25.2644 24.3372 25.0008 25 25V25Z" />
            </svg>
            </div>
            <div className={'featureDescription'}>
                Votings are resolved automatically as soon as your dota game is finished
            </div>
        </div>

        <div className={'feature'}>
            <div className={'icon'}>
            <svg width="40" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5625 1.87502H2.34375C2.86148 1.87502 3.28125 2.29478 3.28125 2.81252V10.2051C6.65594 4.45682 12.9093 0.602753 20.062 0.625097C30.7172 0.658456 39.3916 9.37572 39.375 20.031C39.3583 30.7173 30.6902 39.375 20 39.375C15.0058 39.375 10.453 37.4854 7.01734 34.3822C6.61789 34.0214 6.59906 33.4009 6.97969 33.0203L7.53195 32.468C7.88375 32.1162 8.44984 32.0997 8.81961 32.4325C11.7798 35.0967 15.698 36.7188 20 36.7188C29.1988 36.7188 36.7188 29.271 36.7188 20C36.7188 10.8013 29.271 3.28127 20 3.28127C13.5264 3.28127 7.91117 6.95916 5.13367 12.3438H12.8125C13.3302 12.3438 13.75 12.7635 13.75 13.2813V14.0625C13.75 14.5803 13.3302 15 12.8125 15H1.5625C1.04477 15 0.625 14.5803 0.625 14.0625V2.81252C0.625 2.29478 1.04477 1.87502 1.5625 1.87502ZM26.6912 26.5028L27.0588 25.9973C27.3634 25.5785 27.2708 24.9922 26.852 24.6877L21.25 20.6135V9.06252C21.25 8.54478 20.8302 8.12502 20.3125 8.12502H19.6875C19.1698 8.12502 18.75 8.54478 18.75 9.06252V21.8865L25.3816 26.7095C25.8003 27.0141 26.3866 26.9215 26.6912 26.5028V26.5028Z" />
            </svg>
            </div>
            <div className={'featureDescription'}>
                Our vote system does also support your stream with delay
            </div>
        </div>

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
                fill: var(--primary-accent);
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