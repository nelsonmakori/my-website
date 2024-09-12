import Pic from './assets/profile.jpg'

function Card(){
  return(
    <div className="card">
      <img src={Pic} alt=" pic"/>
      <h2 className='card-title'>Nelson</h2>
      <p className='card-text'>proffesional runner  and studying software ingeneer</p>

    </div>
  );

}
export default Card