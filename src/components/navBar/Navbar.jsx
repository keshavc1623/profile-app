import React, { useEffect, useState } from 'react';
import './_navbar.scss'
import { Logo } from '../../assets/svgs/logo';

export function Navbar() {

    const [offset, setOffset] = useState(0);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        console.log(offset)
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (offset > 55 && navbar === false) {
        console.log("offset value :", offset);
        document.querySelector(".hero_text_greet").style.margin = '10rem 0 0 0'
        setNavbar(true)
    } else if (offset < 55 && navbar === true) {
        document.querySelector(".hero_text_greet").style.margin = '0 0 3rem 0'
        setNavbar(false)
    }



    return (
        <div className={`${navbar ? 'navbar floating_navbar' : 'navbar'}`}>
            <Logo />
            <div className='nav_right'>
                <ol className="nav_items container">
                    <li className="nav_item"><a href='#about'>About</a></li>
                    <li className="nav_item"><a href='#experience'>Experience</a></li>
                    <li className="nav_item"><a href='#work'>Work</a></li>
                    <li className="nav_item"><a href='#contact'>Contact</a></li>
                </ol>
                {/* <div className='element'></div> */}
                <a className='resume-button'>Resume</a>
            </div>
        </div>
    );
}





