import posts from "../Data/Posts.json";

function ScrumMethodology() {
  return (
    <>
      <div className="container">
        <br />
        <br />
        <h3>
          <span className="highlight-1">
            Scrum methodology: The agile mindset
          </span>
        </h3>

        <br />

        <div className="description-post">
          Scrum is one of the most widely adopted Agile frameworks used by
          modern development teams. But it’s more than just a process, it's a
          way of thinking, collaborating, and continuously delivering value in a
          changing environment. In this guide, we’ll break down Scrum in a
          practical, real-world context: what it is, how it works in day-to-day
          team life, and why it empowers teams to build better software, faster.
          From roles and events to real sprint cases and toolsets, this post
          will give you a grounded understanding of how Scrum actually works
          when people, deadlines, and real challenges are involved.
        </div>

        <br />
        <br />

        <h4 className="post-header">What is Scrum?</h4>
        <p className="post-text">
          Scrum is a lightweight agile framework that helps teams tackle complex
          work through collaboration, flexibility, and continuous improvement.
          Its main goal is to help people deliver working products quickly and
          focus on what truly brings value to the customer.
        </p>
        <p className="post-text">
          It was created in the 1990s by <strong>Ken Schwaber</strong> and{" "}
          <strong>Jeff Sutherland</strong>, two software development experts who
          realized that traditional methods didn’t work well for complex,
          fast-changing projects. Inspired by agile manufacturing ideas, they
          proposed a new way of working based on short cycles, constant
          feedback, and continuous learning. The name "Scrum" comes from a rugby
          play where the team moves forward together in a tight formation. That
          image perfectly reflects the spirit of the framework: the team pushes
          forward as a unit, well-coordinated and goal-driven. Although Scrum
          started in software, it’s now used in education, marketing, design,
          construction, HR, and many other fields. Why? Because its core values
          are universal: adapt quickly, work as a team, and focus on what really
          matters.
        </p>
        <p className="post-text">
          One of Scrum’s foundations is its iterative approach. Instead of
          working for months without showing results, teams break the work into
          short, time-boxed cycles called <strong>sprints</strong>, usually
          lasting 1 to 4 weeks. Each sprint follows a clear rhythm: it starts
          with planning, includes daily check-in meetings (Daily Scrum), and
          ends with a review of the completed work and a <em>retrospective</em>{" "}
          to reflect and improve. This consistent cadence helps teams move
          forward predictably while staying open to change. With Scrum, you’re
          not just building products — you’re building a culture of learning,
          adaptability, and shared ownership.
        </p>
        <p className="post-text">
          Whether you're launching a startup, building a digital product, or
          leading a creative team, Scrum offers a clear yet flexible structure
          that helps teams stay aligned, move faster, and deliver value from day
          one. If you'd like to go deeper into Scrum, these books are great
          starting points:
          <ul className="ul-post">
            <li>
              <span className="post-li-title">
                <a
                  href="https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X"
                  target="_blank"
                  className="post-a"
                >
                  Scrum: The Art of Doing Twice the Work in Half the Time
                </a>
              </span>{" "}
              {""}
              by Jeff Sutherland. One of Scrum’s co-creators shares real stories
              and a practical, inspiring approach to work.
            </li>
            <li>
              <span className="post-li-title">
                <a
                  href="https://www.amazon.com/Essential-Scrum-Practical-Addison-Wesley-Signature/dp/0137043295"
                  target="_blank"
                  className="post-a"
                >
                  Essential Scrum
                </a>
              </span>{" "}
              {""}
              by Kenneth S. Rubin. A complete and well-structured guide that’s
              perfect for both beginners and experienced Scrum practitioners.
            </li>
            <li>
              <span className="post-li-title">
                <a
                  href="https://www.amazon.com/Scrum-Trenches-2nd-Henrik-Kniberg/dp/1329224272"
                  target="_blank"
                  className="post-a"
                >
                  Scrum and XP from the Trenches
                </a>
              </span>{" "}
              {""}
              by Henrik Kniberg. A practical, down-to-earth book full of real
              team experiences and actionable advice.
            </li>
          </ul>
        </p>

        <br />
        <br />

        <h4 className="post-header">Principles of Scrum</h4>
        <p className="post-text">
          Scrum is an agile framework that transforms how teams work in
          fast-changing environments. More than just a set of rules, it’s built
          on principles that promote collaboration, continuous improvement, and
          delivering real value. These fundamental principles are organized into
          three essential pillars:
        </p>
        <p className="post-text">
          <ul className="ul-post">
            <li>
              <strong>Transparency</strong>: Everyone on the team must have
              access to the same information so that everyone stays aligned. For
              example, using a visual board like Jira or Trello where tasks are
              tracked clearly—what’s in progress, what’s done. This avoids
              misunderstandings, builds trust, and allows better, informed
              decisions.
            </li>
            <li>
              <strong>Inspection</strong>: Scrum encourages constantly reviewing
              both the work and how the team works. In the Daily Scrum, for
              example, each person shares what they did, what they plan to do,
              and any blockers. At the end of the sprint, there’s a review and a
              retrospective to reflect and improve. This helps catch issues
              early and encourages continuous learning.
            </li>
            <li>
              <strong>Adaptation</strong>: When something isn’t working, the
              team changes it. They adjust processes, tools, or workflows based
              on what they’ve learned. For instance, if the team realizes during
              the retrospective that user stories are unclear, they might agree
              to clarify them more with the Product Owner in future sprints.
              This leads to better work and better results.
            </li>
          </ul>
        </p>
        <p className="post-text">
          These three pillars work together to reduce risks, boost
          communication, and keep the whole team aligned with customer goals.
          Instead of waiting until the end to deliver, Scrum focuses on
          delivering value early and often. Every sprint becomes an opportunity
          to improve, learn, and move closer to success.
        </p>
        <p className="post-text">
          Scrum also relies on several key concepts that reinforce these
          principles:
          <ul className="ul-post">
            <li>
              <strong>Empirical process control</strong>: Scrum is grounded in
              real experience, not assumptions. Teams observe, measure, and
              decide based on actual data. This reduces uncertainty and improves
              predictability over time.
            </li>
            <li>
              <strong>Iterative development</strong>: Instead of delivering
              everything at once, work is broken down into short cycles called
              sprints (usually 2–4 weeks), with functional product increments
              delivered regularly. This allows frequent feedback and fast course
              correction.
            </li>
            <li>
              <strong>Self-organizing teams</strong>: Teams decide how to do the
              work themselves. This promotes creativity, motivation, and
              accountability. They don’t need someone dictating every
              step—they're trusted to organize their own process.
            </li>
            <li>
              <strong>Collaboration and communication</strong>: Frequent short
              meetings (like the Daily Scrum) keep the team in sync and help
              solve problems quickly. Stakeholders stay informed and involved
              throughout the process.
            </li>
            <li>
              <strong>Focus on delivering value</strong>: Everything the team
              works on should add value for the customer. A prioritized Product
              Backlog ensures the team is always working on what matters most,
              maximizing the impact of their time and effort.
            </li>
          </ul>
        </p>
        <p className="post-text">
          In conclusion, Scrum doesn’t aim for perfection from day one—it’s
          about steady improvement. If your team is just starting, begin simple,
          learn with each sprint, and always keep the focus on delivering real
          value.
        </p>

        <br />
        <br />

        <h4 className="post-header">Components of Scrum</h4>
        <p className="post-text">
          Scrum is built around a set of essential components that provide
          structure to teamwork, define clear responsibilities, and help
          everyone stay focused on delivering value. These elements aren’t rigid
          rules—they’re flexible guidelines that foster collaboration,
          transparency, and continuous improvement. The three main components of
          Scrum are roles, artifacts and events.
        </p>
        <p className="post-text">
          <ul className="ul-post">
            <br />
            Scrum defines three core roles, each with specific responsibilities:{" "}
            <br /> <br />
            <ul>
              <li>
                <strong>Product Owner</strong>: The person responsible for
                deciding what features or improvements should be built first.
                They manage the product backlog, ensuring the team works on the
                tasks that bring the most value to users. They act as a bridge
                between the development team and customers or stakeholders.
                <br />
                <em>Example:</em> In a team building a web platform, the Product
                Owner prioritizes fixing critical bugs affecting user experience
                before adding less urgent new features.
              </li>
              <li>
                <strong>Scrum Master</strong>: The team’s facilitator and
                servant-leader. Their main job is to remove obstacles that slow
                progress, ensure Scrum practices are followed, and promote a
                healthy work environment.
                <br />
                <em>Example:</em> If developers can’t move forward because test
                server credentials are missing, the Scrum Master takes care of
                resolving the issue quickly.
              </li>
              <li>
                <strong>Development Team</strong>: A multidisciplinary group
                including developers, testers, UX designers, and others who work
                together to build the product. They self-organize and are
                responsible for delivering a functional, tested product
                increment at the end of each sprint.
                <br />
                <em>Example:</em> The team develops a new feature for the mobile
                app and integrates it with the backend, making sure it passes
                all automated tests before the sprint ends.
              </li>
            </ul>
            <br />
            These are the artifacts, the key items representing the work and its
            progress: <br /> <br />
            <ul>
              <li>
                <strong>Product Backlog</strong>: A prioritized list of all
                features, fixes, and improvements needed. It is constantly
                updated based on business needs and user feedback.
                <br />
                <em>Example:</em> The backlog includes tasks like “Add Google
                authentication,” “Fix shopping cart bug,” and “Improve homepage
                load time.”
              </li>
              <li>
                <strong>Sprint Backlog</strong>: A subset of the Product Backlog
                items that the team commits to completing during the current
                sprint, along with a plan to achieve the sprint goal.
                <br />
                <em>Example:</em> In a two-week sprint, the team decides to
                implement Google sign-in and fix several critical navigation
                bugs.
              </li>
              <li>
                <strong>Increment</strong>: The sum of all completed work during
                the sprint plus all previous sprints. It must be functional,
                tested, and meet the team’s Definition of Done, meaning it’s
                potentially shippable.
                <br />
                <em>Example:</em> At sprint’s end, the software has a fully
                integrated and usable Google login feature that meets quality
                standards.
              </li>
            </ul>
            <br />
            Scrum includes specific meetings to plan, coordinate, and improve
            work:
            <br /> <br />
            <ul>
              <li>
                <strong>Sprint Planning</strong>: Defines what tasks will be
                done in the sprint and how they will be tackled.
                <br />
                <em>Example:</em> The team reviews backlog tickets, estimates
                effort, and selects those they can complete in the upcoming two
                weeks.
              </li>
              <li>
                <strong>Daily Scrum</strong>: A brief meeting where each
                developer shares what they did yesterday, what they will do
                today, and if they have any blockers.
                <br />
                <em>Example:</em> A tester reports a critical bug that must be
                fixed, and the team agrees to prioritize it to avoid sprint
                delays.
              </li>
              <li>
                <strong>Sprint Review</strong>: The team demos the developed
                software to stakeholders to get immediate feedback.
                <br />
                <em>Example:</em> The Product Owner and stakeholders test the
                new authentication feature and suggest minor improvements for
                the next sprint.
              </li>
              <li>
                <strong>Sprint Retrospective</strong>: The team reflects on what
                went well, what could be improved, and how to work better in the
                next sprint.
                <br />
                <em>Example:</em> The team decides to automate some tests to
                reduce bugs and speed up future deliveries.
              </li>
            </ul>
          </ul>
        </p>
        <p className="post-text">
          Together, these components form the solid foundation of Scrum. They
          help software development teams stay focused, aligned, and ready to
          adapt quickly—always aiming to deliver real value in a sustainable and
          predictable way. Whether you’re building an app, a web platform, or
          any other digital product, these practices can transform how your team
          works.
        </p>

        <br />
        <br />

        <h4 className="post-header">The sprint cycle</h4>
        <p className="post-text">
          Scrum works through a structured, repeating cycle called the{" "}
          <strong>sprint</strong>. A sprint is a short, fixed period of
          time—usually between 2 and 4 weeks—during which the team works to
          deliver a usable version of the product. This cycle not only guides
          execution but also drives continuous improvement and adaptability.
        </p>
        <p className="post-text">
          Each sprint starts with an important meeting called{" "}
          <strong>Sprint Planning</strong>. During this session, the team and
          the Product Owner review the product backlog and select the
          highest-priority items to work on. They also set a clear sprint goal
          and create a plan to achieve it. This ensures everyone begins the
          sprint with shared expectations and a common purpose.
          <br />
          <em>Example:</em> Imagine a team developing a mobile app deciding in
          sprint planning to focus on building the login and registration
          screens. The sprint goal might be: “Users can securely create accounts
          and log in.” The team divides the tasks and agrees on who does what.
        </p>
        <p className="post-text">
          Throughout the sprint, the team meets daily in a short meeting called
          the <strong>Daily Scrum</strong> or <strong>Daily Standup</strong>.
          Each member answers three simple questions: What did I do yesterday?
          What will I do today? Is anything blocking my progress? These daily
          check-ins help keep the team aligned, spot issues early, and maintain
          momentum.
          <br />
          <em>Example:</em> A developer might say: “Yesterday, I finished the
          login screen UI. Today, I’ll start connecting it to the server. I’m
          waiting on API access, which is blocking me.” The Scrum Master helps
          remove this blocker so work can continue smoothly.
        </p>
        <p className="post-text">
          At the end of the sprint, it’s time for the{" "}
          <strong>Sprint Review</strong>. Here the team shows the completed
          work—ideally working functionality—to stakeholders. It’s a chance to
          get feedback, validate progress, and ensure the product is moving in
          the right direction. It’s not just a demo but a conversation about how
          to maximize value going forward.
          <br />
          <em>Example:</em> The team presents the login and registration
          features to the Product Owner and users. Feedback might include
          requests like adding a “forgot password” option in the next sprint or
          improving the design for clarity.
        </p>
        <p className="post-text">
          After the review, the team holds a{" "}
          <strong>Sprint Retrospective</strong>, a dedicated time to reflect on
          how they worked during the sprint. They discuss what went well, what
          could be improved, and agree on specific actions to enhance their
          process in the next sprint. This is a valuable moment for learning and
          team building.
          <br />
          <em>Example:</em> The team realizes communication can improve, so they
          decide to keep daily meetings shorter and more focused. They also plan
          to automate testing to reduce bugs.
        </p>
        <p className="post-text">
          This continuous cycle of <em>plan → execute → review → improve</em> is
          what keeps Scrum teams agile and resilient. It’s not just a
          process—it’s a rhythm that encourages constant growth, close
          collaboration, and customer-focused development. By repeating this
          cycle, teams stay focused, adapt quickly, and consistently deliver
          real value.
        </p>

        <br />
        <br />

        <h4 className="post-header">Benefits of Scrum</h4>
        <p className="post-text">
          Scrum is not just a project management framework; it’s a mindset, a
          way of working as a team, and adapting to change with agility. From my
          experience, applying Scrum has been much more than just following
          ceremonies—it’s about creating a culture of continuous improvement,
          transparency, and delivering value consistently.
        </p>
        <p className="post-text">
          Over the years, I’ve seen teams of all sizes and industries transform
          thanks to Scrum principles. Here are the most important benefits, not
          just in theory but what really happens when you live Scrum day to day:
          <ul className="ul-post">
            <li>
              <strong>Faster delivery:</strong> Thanks to sprints, the team
              focuses on short-term goals, allowing them to deliver working
              parts of the product continuously. This is crucial to show real
              progress early and avoid projects getting stuck for months without
              feedback.
            </li>
            <li>
              <strong>Greater adaptability:</strong> The world changes fast—and
              Scrum gets that. With every sprint, you can adjust priorities,
              respond to new customer needs, or better align the product with
              the business vision. You don’t have to wait until the “end of the
              project” to realize something’s off.
            </li>
            <li>
              <strong>Improved collaboration:</strong> Scrum encourages constant
              communication. Daily meetings, team planning, and retrospectives
              strengthen connections between team members. It creates safe
              spaces where everyone can share opinions, suggest improvements,
              and feel part of the success.
            </li>
            <li>
              <strong>Higher quality:</strong> Instead of leaving testing until
              the end, Scrum promotes continuous reviews and validations. This
              reduces errors, catches problems early before they escalate, and
              ensures every delivery meets agreed-upon standards from the start.
            </li>
            <li>
              <strong>Increased customer satisfaction:</strong> When customers
              see real progress every sprint and join reviews, they feel heard
              and see the product shaping up according to their expectations.
              This builds trust, commitment, and products better aligned with
              the end user.
            </li>
            <li>
              <strong>More motivated teams:</strong> Sometimes underestimated,
              this benefit is one of the most valuable. When the team
              self-organizes, sets realistic goals, and sees tangible results
              sprint by sprint, motivation soars. Scrum creates an environment
              where people feel their work truly matters.
            </li>
          </ul>
        </p>
        <p className="post-text">
          Scrum not only helps teams deliver better and faster but also improves
          how people work together. Whether your project is, if you need to
          adapt quickly, collaborate better, and focus on real results, Scrum
          can make a big difference. Plus, it fosters a culture of transparency
          and continuous learning. Teams learn to embrace feedback, experiment
          with new ways of working, and constantly evolve their processes. This
          mindset helps organizations stay competitive and agile in an
          ever-changing market.
        </p>

        <br />
        <br />

        <h4 className="post-header">Common tools for Scrum teams</h4>
        <p className="post-text">
          To successfully implement Scrum, teams often rely on a variety of
          digital tools that make it easier to manage tasks, visualize progress,
          and collaborate effectively. These tools support key agile principles
          like transparency, inspection, and adaptation by helping teams stay
          organized and aligned throughout each sprint.
        </p>
        <p className="post-text">
          Here are some of the most popular and useful tools for Scrum teams:
          <ul className="ul-post">
            <li>
              <strong>
                <a
                  href="https://www.atlassian.com/software/jira"
                  target="_blank"
                  className="post-a"
                >
                  Jira
                </a>
              </strong>
              : Developed by Atlassian, Jira is one of the most widely used
              tools in agile project management. It allows teams to organize and
              prioritize the product backlog using a structured system of epics,
              user stories, and tasks. Jira supports sprint planning with
              powerful boards and provides agile reports like burndown charts
              and velocity charts. Its seamless integration with tools like
              Confluence and Bitbucket makes it a robust choice for large or
              distributed teams.
            </li>
            <li>
              <strong>
                <a href="https://trello.com" target="_blank" className="post-a">
                  Trello
                </a>
              </strong>
              : A more visual and lightweight option based on Kanban boards.
              Trello is great for smaller teams or simpler workflows. You can
              easily organize work with lists and cards that represent user
              stories, tasks, or bugs. Trello is simple to set up, highly
              customizable, and supports Power-Ups that add Scrum features like
              story points or calendars.
            </li>
            <li>
              <strong>
                <a href="https://asana.com" target="_blank" className="post-a">
                  Asana
                </a>
              </strong>
              : This tool focuses on collaborative task and project management.
              It offers multiple views (lists, boards, and timelines) that make
              sprint planning and workload distribution easier. Asana helps
              teams assign tasks, track progress, and communicate—all in one
              place.
            </li>
            <li>
              <strong>
                <a href="https://slack.com" target="_blank" className="post-a">
                  Slack
                </a>
              </strong>
              : While not a project management tool per se, Slack is essential
              for daily communication. It allows real-time messaging, file
              sharing, video calls, and the creation of topic-based channels. It
              keeps communication agile and centralized, enabling fast decisions
              and constant collaboration—key for high-performing Scrum teams.
            </li>
            <li>
              <strong>
                <a
                  href="https://www.atlassian.com/software/confluence"
                  target="_blank"
                  className="post-a"
                >
                  Confluence
                </a>
              </strong>
              : Also from Atlassian, Confluence is often used alongside Jira to
              document everything the Scrum team needs—meeting notes,
              retrospective results, decisions, and shared knowledge. It acts
              like a team wiki and helps keep documentation organized and
              accessible to everyone.
            </li>
            <li>
              <strong>
                <a
                  href="https://clickup.com"
                  target="_blank"
                  className="post-a"
                >
                  ClickUp
                </a>
              </strong>
              : An all-in-one productivity platform that combines tasks, docs,
              goals, and chat. It’s very flexible and popular among teams that
              want to manage everything from one central hub.
            </li>
            <li>
              <strong>
                <a
                  href="https://azure.microsoft.com/services/devops/"
                  target="_blank"
                  className="post-a"
                >
                  Microsoft Azure DevOps
                </a>
              </strong>
              : This is a powerful suite for development teams that need
              integration with CI/CD pipelines. It supports Scrum boards,
              backlog tracking, and detailed analytics, making it ideal for
              technical and enterprise-level teams.
            </li>
            <li>
              <strong>
                <a href="https://monday.com" target="_blank" className="post-a">
                  Monday.com
                </a>
              </strong>
              : A visually rich tool for project tracking with flexibility to
              adapt to Scrum workflows. It’s great for teams that want an
              intuitive, drag-and-drop interface to manage their work.
            </li>
          </ul>
        </p>
        <p className="post-text">
          While each team’s needs may vary, these tools all help support the
          core values of Scrum—collaboration, transparency, and continuous
          delivery of value. Whether you're just starting with agile or scaling
          it across your organization, the right tools can make your Scrum
          process smoother, clearer, and much more efficient.
        </p>

        <br />
        <br />

        <h4 className="post-header">
          Practical Case of a sprint in a Scrum team
        </h4>

        <p className="post-text">
          Let’s explore what a real sprint looks like in a Scrum team working on
          a web platform for booking events. This team is cross-functional and
          includes the following roles:
          <ul className="ul-post">
            <li>
              <strong>Product Owner (PO)</strong>: Owns the product vision and
              prioritizes the product backlog.
            </li>
            <li>
              <strong>Scrum Master (SM)</strong>: Ensures Scrum is correctly
              applied, removes impediments, and supports the team’s efficiency.
            </li>
            <li>
              <strong>Development Team</strong>: 4 frontend/backend developers,
              1 UX/UI designer, and 1 QA tester.
            </li>
          </ul>
        </p>

        <p className="post-text">
          <strong>Phase 1: Sprint Planning</strong>
          <br />
          The team begins a 3-week sprint. The Product Owner presents the sprint
          goal: <em>“Enable users to securely create accounts and log in.”</em>
          <br />
          The team reviews the backlog, selects the most valuable user stories,
          and breaks them into actionable technical tasks:
          <ul className="ul-post">
            <li>Design the registration and login forms in Figma (UX)</li>
            <li>Implement responsive UI in React and Tailwind</li>
            <li>Create user authentication APIs using Node.js and MongoDB</li>
            <li>Integrate email verification and secure password encryption</li>
            <li>Write unit and integration tests (Jest + Cypress)</li>
            <li>Document the API endpoints using Swagger</li>
          </ul>
          Tasks are estimated using story points (Planning Poker), and
          responsibilities are distributed based on team capacity and expertise.
        </p>

        <p className="post-text">
          <strong>Phase 2: Sprint Execution</strong>
          <br />
          The team collaborates over 15 business days. Each morning begins with
          a 15-minute <strong>Daily Scrum</strong> where team members share:
          <em>
            “What I did yesterday, what I’ll do today, and if I’m blocked.”
          </em>
          <br />
          <br />
          Core tools that support their process include:
          <ul className="ul-post">
            <li>
              <strong>Jira</strong>: Task management, sprint board, and burndown
              chart tracking
            </li>
            <li>
              <strong>Slack</strong>: Real-time team communication via dedicated
              channels
            </li>
            <li>
              <strong>Figma</strong>: Collaborative wireframes and component
              design
            </li>
            <li>
              <strong>GitHub</strong>: Code repository with branching and pull
              request workflows
            </li>
            <li>
              <strong>Postman</strong>: API testing and contract validation
            </li>
            <li>
              <strong>Cypress</strong>: E2E automated testing to simulate user
              behavior
            </li>
          </ul>
          Challenges emerge during the sprint, as expected in any real
          environment:
          <ul className="ul-post">
            <li>
              Frontend development was delayed due to backend API instability
            </li>
            <li>
              Design revisions requested mid-sprint required rework in Figma and
              React
            </li>
            <li>
              The QA tester identified a critical bug with email verification
              that required patching before the demo
            </li>
          </ul>
          The Scrum Master steps in to resolve blockers, adjust workload
          balance, and keep the team aligned with the sprint goal. They
          facilitate ad-hoc refinement sessions and shield the team from
          external distractions.
        </p>

        <p className="post-text">
          <strong>Phase 3: Review & Retrospective</strong>
          <br />
          During the <strong>Sprint Review</strong>, the team presents a working
          demo that includes:
          <ul className="ul-post">
            <li>Fully responsive registration and login interfaces</li>
            <li>Backend API with secure authentication and validation</li>
            <li>Working confirmation emails with unique tokens</li>
            <li>Real user data stored securely in the database</li>
          </ul>
          Stakeholders (including Marketing and Support) test the flow live,
          express satisfaction, and suggest integrating a “Login with Google”
          feature in the next sprint for user convenience.
          <br />
          <br />
          In the <strong>Sprint Retrospective</strong>, the team reflects on
          their collaboration:
          <ul className="ul-post">
            <li>
              <strong>What went well:</strong> Cross-role collaboration, strong
              testing coverage, and proactive blocker resolution.
            </li>
            <li>
              <strong>What needs improvement:</strong> Clearer acceptance
              criteria and earlier testing environment setup.
            </li>
          </ul>
          As a result, they decide to:
          <ul className="ul-post">
            <li>Introduce a shared Definition of Done checklist</li>
            <li>
              Move critical design validations to the beginning of the sprint
            </li>
          </ul>
        </p>

        <p className="post-text">
          <strong>Phase 4: Delivering Value & Final Thoughts</strong>
          <br />
          By the end of the sprint, the team doesn’t just hand over lines of
          code—they deliver a user-ready authentication system that improves
          platform security, user experience, and business value. The feature is
          deployed in a staging environment and ready for production.
          <br />
          <br />
          The team closes the sprint knowing they:
          <ul className="ul-post">
            <li>Shipped a feature aligned with the product vision</li>
            <li>Reduced time-to-market for new users</li>
            <li>Increased the product’s perceived value for end-users</li>
          </ul>
        </p>

        <p className="post-text">
          This isn't just a framework, it's a mindset. This sprint shows how
          transparency, collaboration, and iteration empower teams to face real
          challenges and deliver real impact. Value isn’t found in ticking
          boxes, but in delivering meaningful outcomes that improve the product,
          the team, and the user experience. A good sprint doesn’t mean
          everything went perfectly, it means the team learned, adapted, and
          delivered something better than before.
        </p>

        <br />
        <br />

        <hr className="separator" />

        <p className="post-text">
          Ever since I started working on projects at university and later in
          professional environments, I discovered how much I enjoy the agile
          mindset and everything that comes with collaborative teamwork. I've
          always been driven by the idea of building things with others, sharing
          ideas, adapting on the go, and learning at every step. With Scrum,
          that way of working makes even more sense. I love how it shifts the
          focus from “everything perfect from the start” to a dynamic of
          continuous improvement. It's not about following rigid rules, but
          about having clarity, shared goals, and honest conversations that
          truly make a difference. If you’re just starting to work on projects,
          or even if you’ve been looking for a better way to stay organized, I
          encourage you to explore Scrum with an open mind. You don’t need to
          have everything figured out on day one, just start and improve as a
          team. <br />
          That’s the Scrum way.
        </p>

        <hr className="separator" />
        {posts
          .find((p) => p.id === 2)
          ?.tags?.split(",")
          .map((tag, idx) => (
            <span key={idx} className="tag">
              {tag.trim()}
            </span>
          ))}
      </div>
    </>
  );
}

export default ScrumMethodology;
