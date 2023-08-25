import Background from '../assets/images/drinks.jpg'
function About() {
    return (
      <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed p-5'
        >
          <div className='flex  h-screen text-white p-5'>
            <div className='p-5'>
            <h1>Here at the speakeasy our goal to to provide a fun and relaxing atmostphere. 
              Bring a Friend, check out our game collection, and relax with some of our tasty drinks.
              Don't for get to try our Whiskey 
              Pretzels. </h1>
              </div>
          </div>
      </div>
    )
  }
  
  export default About