import './__aboutme.scss'


export const AboutMe = () => {
    return (
        <div id='about' className="about_me section">
            <h2 class="numbered-heading">
                About Me
            </h2>
            <div className='inner'>
                <div className='about_me-text_container'>
                    <div className='about_me-text'>
                        <p>
                            Hello! My name is Keshav Chauhan and I like building things for the internet.
                            I think my interest in web devlopment started when I was in my 10th class(2013) and one of my brother just added my name in google home page just by editing the HTML elements in Chrome Devtools For me that was very very cool. Seeing my name in google home page really made me to persue my carrear in web development.
                        </p>
                        <p>
                            I have completed my bachelor's degree in computer science from Lovely Professional University(2020). Currently devloping/enhancing the UI of a chatbot application for a client.
                        </p>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                    </div>
                    <ul className='about_me-skills'>
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Google Dialogflow</li>
                        <li>Java</li>
                    </ul>

                </div>

                <div className='about_me-pic_section'>
                    <div className='wrapper'>
                        <div className='img'>
                            <picture>
                                <source srcSet="profileImg3.png" />
                                {/* <source srcset="img_girl.jpg" /> */}
                                <img src="profileImg3.png" alt="Beatles" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}