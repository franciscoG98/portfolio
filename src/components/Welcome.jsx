import './WelcomeS.css';


const Welcome = ({ mode }) => {
  if(!mode) {
    return (
      <div className="En text">
        <h1>Hello!</h1>
        <span>I'm Francisco, I like coding :)</span>
      </div>
    )
  } else {
    return (
      <div className="Es text">
        <h1>Hola!</h1>
        <span>Soy Francisco, me gusta codear :)</span>
    </div>
    )
  }
  
}

export default Welcome;