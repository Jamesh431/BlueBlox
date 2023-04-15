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

    <>
      <div className="ProjectDescription">
        <h1>Project Description</h1>
        <p>This project is my capstone for the Front End Course DevPipeline</p>
      </div>
      
      <div className="IndustryGoals">
        <h1>My Current Industry Goals</h1>
        <p>Currently my industry goal is to work with devpipeline to grow as a fullstack developer, then I would like to work with the church on their apps and websites as a full-stack developer and continue to grow my career from there.</p>
      </div>
      
      <div className="WhatILearned">
        <h1>What I have learned with DevPipeline</h1>
        <p>Currently at this date we have been taught Foundations (python) and Front-End (HTML,JS, React). With my time here I have learned its important to be as vocal (while appropriate) as you can. If you sound dumb, its ok as this is a learning environment. If you're the smartest person in the room, you are in the wrong room.</p>
      </div>
      
      <div className="ProjectsIBuilt">
        <h1>Projects I have built</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iste reprehenderit debitis officia ducimus inventore natus asperiores quis labore dolorem quibusdam saepe quo esse nemo nisi unde tempore molestias voluptatibus!</p>
      </div>

      <div className="FavoriteLanguage">
        <h1>My Favorite language</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iste reprehenderit debitis officia ducimus inventore natus asperiores quis labore dolorem quibusdam saepe quo esse nemo nisi unde tempore molestias voluptatibus!</p>
      </div>
    </>
    )
}