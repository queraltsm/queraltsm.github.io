import React from 'react';

function Skills() {
    return (
        <>
            <div className="row">
                <div className="column">
                    <h3><span className="highlight-1">Mobile development</span></h3>
                    <p className="description">
                        It all started in university when I realized my passion for mobile development. I taught myself
                        Swift and spent hours creating my first iOS apps. Over time, I wanted to go further, so I
                        explored React Native and Ionic, excited about the productivity that cross-platform frameworks
                        offer. In the professional world, I also worked with native Android development, which helped me
                        better understand both platforms.
                    </p>
                </div>
                <div className="column">
                    <img src="./src/assets/apps-development.png" alt="Mobile development image" />
                </div>
            </div>

            <br /><br />

            <div className="row">
                <div className="column">
                    <img src="./src/assets/web-development.png" alt="Web development image" />
                </div>
                <div className="column">
                    <h3><span className="highlight-1">Web development</span></h3>
                    <p className="description">
                        During my career, I learned the fundamentals of web programming and worked on projects with PHP,
                        HTML, and CSS in a professional setting. On my own, I explored technologies like Node.js, React,
                        and Angular, developing personal projects to continue learning. I'm passionate about web
                        development and eager to keep growing, exploring different frameworks and technologies.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Skills;
