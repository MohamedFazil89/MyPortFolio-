import Navbar from '../Components/Navbar';
import "../styles/Services.css";
import Service from "../Components/Services.js";
import Model from "../Model.jsx"


export default function Services() {
  return (
    <section className='Services-container'>
      <Navbar />
      <Model />
      <h1>Our Services </h1>
      <div className="services-container">
        <div className="service-card">
          <div className="list">
            {Service.map((item, index) =>(
              <div key={item.id} className='Services'>
                <p className={item.classNames} style={{ background: item.bgcolor, backgroundClip: "text"}}>{item.Sevice}</p>
                <p className='Description'>{item.Description}</p>
              </div>
            ))}
          </div>
         





        </div>
      </div>





    </section>
  );
}

