import JS from '../assets/img/javascript.svg'
import HTML from "../assets/img/html.svg";
import CSS from "../assets/img/css.svg";
import React from "../assets/img/react.svg";
import Bootstrap from "../assets/img/bootstrap.svg";
import Php from "../assets/img/php.svg";
import Node from "../assets/img/nodejs.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

 const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="Habilidades">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                            <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={HTML} alt="Image" />
                                <h5>Html 5</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                                <img src={JS} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5  >React</h5>
                            </div>
                            <div className="item mt-4">
                                <img src={Php} alt="Image" />
                                <h5 className='mt-5'>Php</h5>
                            </div>
                            <div className="item">
                                <img src={Node} alt="Image" />
                                <h5 className='mt-4'>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={Bootstrap} alt="Image" />
                                <h5 className='mt-4'>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills