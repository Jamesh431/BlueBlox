/* 
- About Page
		- Describe your project
		- What are your industry goals
		- What did you learn in your time here at DevPipeline so far
		- What projects have you built
		- What is your favorite language, and why
*/

/*
Project description:
This project is my capstone for the Front End Course DevPipeline

Industry Goals:
Currently my industry goal is to work with devpipeline to grow as a fullstack developer, then I would like to work with the church on their apps and websites as a full-stack developer and continue to grow my career from there.

What I have learned from working with DevPipeline so far:
Currently at this date we have been taught Foundations (python) and Front-End (HTML,JS, React). With my time here I have learned its important to be as vocal (while appropriate) as you can. If you sound dumb, its ok as this is a learning environment. If you're the smartest person in the room, you are in the wrong room.

What projets have I built?
Describe the capstone for foundations, then for scss, then for JS.

My favorite language is currently JavaScript as first its documentation is easier to understand than JS *do more research on what to say here*
*/

export default function About() {
  return (

    <div className="about-page">
      <div className="project-description">
        <h1>Project Description</h1>
        <p>Welcome to BlueBox! This project is my capstone for the Front End Course. The longest part of this for me was the pagination on the landing page. Creating the function was a challenge, I originally used a library for it, but it had multiple dependencies and I knew I could make it myself so I did.</p>
      </div>

      <div className="break-wrapper">
        <hr></hr>
      </div>
      
      <div className="industry-goals">
        <h1>My Current Industry Goals</h1>
        <p>Currently my industry goal is to work with devpipeline to grow as a fullstack developer, then I would like to work with the church on their apps and websites as a full-stack developer and continue to grow my career from there.</p>
      </div>

      <div className="break-wrapper">
        <hr></hr>
      </div>
      
      <div className="what-i-learned">
        <h1>What I have learned with DevPipeline</h1>
        <p>Currently at this date we have been taught Foundations (python) and Front-End (HTML,JS, React). With my time here I have learned its important to be as vocal (while appropriate) as you can. If you sound dumb, its ok as this is a learning environment. If you're the smartest person in the room, you are in the wrong room.</p>
      </div>

      <div className="break-wrapper">
        <hr></hr>
      </div>
      
      <div className="projects-i-built">
        <h1>Projects I have built</h1>

        <h2>Foundations Capstone</h2>
        <p>In the foundations class, my Capstone was a console log based program made to create and read data for student assessments. You could add students, test assessments, and scores for students that did those assessments. You could also remove them as well. With the project I created the ability to add dummy data to run tests while creating the app. The project dealt with with databases and CSVs.</p>

        <h2>FrontEnd Capstone</h2>
        <p>In the Frontend Class, this was my capstone. It was to create a movie service like website. The requirements can be found in the readme.txt</p>
      </div>

      <div className="break-wrapper">
        <hr></hr>
      </div>

      <div className="favorite-language">
        <h1>My Favorite language</h1>
        <p>My favorite language is currently JavaScript as first its documentation is easier to understand than Python. Also, its a better choice for developing mobile and desktop websites. There are far more capabilities for web development when you take into mind React, JQuery, and Angular. Python isn't optimal for front-end development </p>
      </div>
    </div>
    )
}