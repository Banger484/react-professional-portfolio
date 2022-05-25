import './Skills.css'

export default function Skills () {
    return (
        <section id="my-technical-skills">
          <h3>Technical Skills</h3>
          <div class="card-holder">
            <div class="card">
              <h3>HTML</h3>
              <img
                src={require("../assets/imgs/badges/html-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                HTML is a markup language used for structuring and presenting
                content on the World Wide Web.
              </p>
            </div>
            <div class="card">
              <h3>CSS</h3>
              <img
                src={require("../assets/imgs/badges/css-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                CSS is a style sheet language used for describing the
                presentation of a document written in a markup language such as
                HTML.
              </p>
            </div>
            <div class="card">
              <h3>JavaScript</h3>

              <img
                src={require("../assets/imgs/badges/javascript-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                JavaScript is a scripting language that enables you to create
                dynamically updating content, and pretty much everything else.
              </p>
            </div>
            <div class="card">
              <h3>React</h3>
              <img
                src={require("../assets/imgs/badges/react-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components.
              </p>
            </div>
            <div class="card">
              <h3>Node.js</h3>

              <img
                src={require("../assets/imgs/badges/node-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment and executes JS code outside a web browser.
              </p>
            </div>
            <div class="card">
              <h3>MongoDB</h3>

              <img
                src={require("../assets/imgs/badges/mongo-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                MongoDB is an open-source NoSQL database management system.
              </p>
            </div>
            <div class="card">
              <h3>MySQL</h3>

              <img
                src={require("../assets/imgs/badges/mysql-badge.png")}
                alt=""
                class="skill-badge"
              />
              <p>
                MySQL is an open-source relational database management system.
              </p>
            </div>
          </div>
        </section>
    )
}