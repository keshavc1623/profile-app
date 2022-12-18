import './__work.scss'
import styled from 'styled-components';
import { useState } from 'react';

const StyledLine = styled.div`
position: absolute;
top: 0px;
left: 0px;
z-index: 10;
width: 2px;
height: var(--tab-height);
border-radius: var(--border-radius);
background: var(--clr-text-primary);
transform: translateY(calc(${props => props.index} * var(--tab-height)));
transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
`
// transform: translateY(calc(${props => props.ind} * var(--tab-height)));

let organizations = [
    {
        name: 'Cognizant',
        role: 'Associate',
        at: 'Cognizant',
        discription: ['Write modern, performant, maintainable code for a Chat Assist bot of client projects',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, GoogleDilogeFlow and Java',
            'Build multiple featurs for the application from scratch like Navigation Tour of the App, Notification Pannel, Dynamic menu with Rotating tips etc.',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ],
        timePeriod: 'sep 2020 - present'
    },
    {
        name: 'Verizon',
        role: 'Software engineer',
        at: 'Verizon',
        discription: ['Write modern, performant, maintainable code for a Chat Assist bot of client projects',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, GoogleDilogeFlow and Java',
            'Build multiple featurs for the application from scratch like Navigation Tour of the App, Notification Pannel, Dynamic menu with Rotating tips etc.',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ],
        timePeriod: 'sep 2022 - sep 2023'
    },
    {
        name: 'Moblty India',
        role: 'Software Developer',
        at: 'moblity india pvt ltd',
        discription: ['Write modern, performant, maintainable code for a Chat Assist bot of client projects',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, GoogleDilogeFlow and Java',
            'Build multiple featurs for the application from scratch like Navigation Tour of the App, Notification Pannel, Dynamic menu with Rotating tips etc.',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ],
        timePeriod: 'sep 2020 - present'
    },
    {
        name: 'Moblty India',
        role: 'Software Developer',
        at: 'moblity india pvt ltd',
        discription: ['Write modern, performant, maintainable code for a Chat Assist bot of client projects',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, GoogleDilogeFlow and Java',
            'Build multiple featurs for the application from scratch like Navigation Tour of the App, Notification Pannel, Dynamic menu with Rotating tips etc.',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ],
        timePeriod: 'sep 2020 - present'
    },
    {
        name: 'Moblty India',
        role: 'Software Developer',
        at: 'moblity india pvt ltd',
        discription: ['Write modern, performant, maintainable code for a Chat Assist bot of client projects',
            'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, GoogleDilogeFlow and Java',
            'Build multiple featurs for the application from scratch like Navigation Tour of the App, Notification Pannel, Dynamic menu with Rotating tips etc.',
            'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        ],
        timePeriod: 'sep 2020 - present'
    },
]

const Organizations = (props) => {
    return (
        organizations.map((org, ind) => {
            return (
                <button className={`job ${ind === props.currentIndex ? 'active' : ''}`} onClick={() => props.handleClick(ind)}>
                    {org.name}
                </button >
            )

        })
    )
}

const OrganizationsDiscription = (props) => {
    return (
        <>
            <ul className='discription'>
                <h3>
                    <span>{props.discription.role} </span>
                    <span className='company'>@ <a className='inline-link'>{props.discription.at}</a></span>
                </h3>
                <p className='time-period'>{props.discription.timePeriod}</p>
                {props.discription.discription.map((value, ind) => {
                    return (
                        <li>{value}</li>
                    )
                })}

            </ul>
        </>
    )
}

export const Work = () => {

    let [index, setIndex] = useState(0);


    const handleClick = (ind) => {
        console.log(ind)
        console.log("clicked")
        setIndex(ind)
    }

    return (
        <div id='experience' className="work section">
            <h2 class="numbered-heading">
                Where I've Worked/Working
            </h2>
            <div className='inner'>
                <div role='tablist' className='jobs'>
                    <Organizations currentIndex={index} handleClick={handleClick} />
                    <StyledLine className='left-line' index={index} />
                </div>
                <div className='job_discription'>
                    <OrganizationsDiscription discription={organizations[index]} />
                </div>
            </div>
        </div>
    )
}