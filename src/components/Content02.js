import React , {Component} from 'react';
import back01 from '../images/slider1.jpg';
import back02 from '../images/slider2.jpg';

class Content02 extends Component {
    constructor(props) {
        super(props);     
        
    }
    render(){
        return (
            <div>
                {/* <!-- Banner --> */}
                <section id="banner">
                    <header>
                        <h2>Nosotros</h2>
                    </header>
                    <p>Somos un conjunto de ingenieros y diseñadores enfocados en brindar el mejor servicio a nuestros clientes.<br />
                    Es de vital importancia para nosotros materializar sus proyectos,<br />
                    asesoraremos y brindaremos las herrramientas necesarias para lograr los objetivos propuestos.</p>
                    <footer>
                        <a href="#first" className="button style2 scrolly">Conociendonos</a>
                    </footer>
                </section>

                {/* <!-- Feature 1 --> */}
                <article id="first" className="container box style1 right">
                    <a href="#" className="image fit"><img src={back01} alt="slider1" /></a>
                    <div className="inner">
                        <header>
                            <h2>Diseño gráfico</h2>
                        </header>
                        <p>Daremos vida a sus ideas, con estilo y creatividad encontraremos la manera en la que sus visitantes se sientan a gusto conociendo su empresa y/o productos para que estos se conviertan en clientes.</p>
                    </div>
                </article>

                {/* <!-- Feature 2 --> */}
                <article className="container box style1 left">
                    <a href="#" className="image fit"><img src={back02} alt="slider2" /></a>
                    <div className="inner">
                        <header>
                            <h2>Desarrollo de software y web</h2>
                        </header>
                        <p>Codificaremos de la mejor manera para tener un desarrollo destacable en las paginas web, en el software y aplicaciones, con metodologias agiles y sobretodo haciendo lo posible por cumplir las espectativas del cliente.</p>
                    </div>
                </article>
            </div>
        )
    }
}
 
export default Content02;