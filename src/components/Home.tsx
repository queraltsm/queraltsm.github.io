function Home() {
    return (
      <div className="container">
        <br /><br />
        <h3><span className="highlight-1">About me</span></h3>
        <p className="description">
          My name is Queralt Sosa Mompel. Welcome to my world. In few words I develop software.
          I’ve always been passionate about technology, especially programming.
          I get excited every time I code — it’s like I feel butterflies in my stomach.
          Programming is not just my profession; it’s something that makes me feel truly alive.
          Today, I’m a software engineer with a keen interest in learning new tools and improving my skills.
          I have a strong interest in Artificial Intelligence and its potential to make a positive impact.
          I’m always open to new projects and enjoy collaborating with multidisciplinary teams to solve problems and contribute to meaningful work.
        </p>

        <br /><br /><br /><br />

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
                    <img src="./assets/img/apps-development.png" alt="Mobile development image" className="skill-img" />
                </div>
            </div>

            <br /><br /><br /><br />

            <div className="row reverse-on-mobile">
                <div className="column">
                    <img src="./assets/img/web-development.png" alt="Web development image" className="skill-img" />
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
      </div>
    )
  }
  
  export default Home  