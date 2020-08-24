import React , {Component} from 'react';
import Project from './Project.js';
import img01 from '../assets/img/portfolio/01.jpg';
import img02 from '../assets/img/portfolio/02.jpg';
import img03 from '../assets/img/portfolio/03.jpg';
import img04 from '../assets/img/portfolio/04.jpg';
import img05 from '../assets/img/portfolio/05.jpg';
import img06 from '../assets/img/portfolio/06.jpg';
import img07 from '../assets/img/portfolio/07.jpg';
import img08 from '../assets/img/portfolio/08.jpg';
import img09 from '../assets/img/portfolio/09.jpg';
import img10 from '../assets/img/portfolio/10.jpg';
import img11 from '../assets/img/portfolio/11.jpg';
import img12 from '../assets/img/portfolio/12.jpg';
import img13 from '../assets/img/portfolio/13.jpg';
import img14 from '../assets/img/portfolio/14.jpg';
import img15 from '../assets/img/portfolio/15.jpg';

class Projects extends Component {
    constructor(props) {
        super(props);     
        this.categorias = [
            {"id":"01", "name":"Ventas"},
            {"id":"02", "name":"Perfiles"},
            {"id":"03", "name":"Deportes"},
            {"id":"04", "name":"Administración"},
            {"id":"05", "name":"Negocios"},
            {"id":"06", "name":"Arquitectos"},
            {"id":"07", "name":"Organizaciones"}
        ];
        this.cat01 = (this.categorias.filter(val=>val.id==="01"))[0].name;
        this.cat02 = (this.categorias.filter(val=>val.id==="02"))[0].name;
        this.cat03 = (this.categorias.filter(val=>val.id==="03"))[0].name;
        this.cat04 = (this.categorias.filter(val=>val.id==="04"))[0].name;        
        this.cat05 = (this.categorias.filter(val=>val.id==="05"))[0].name;        
        this.cat06 = (this.categorias.filter(val=>val.id==="06"))[0].name;
    }
    render(){
        return (
            <section className="page-section" id="portfolio">
                <div className="container box style2">
                    <div className="text-center">
                        <header>
                            <h2>Portafolio</h2>
                            <p>Estos son algunos de los proyectos realizados, en colaboración con el diseño grafico hecho por canelacreativa.com</p>
                        </header>
                    </div>
                    <div className="inner">				
                        <div className="row encima">
                            <Project
                            link="www.convocar.net"
                            image={img01}
                            title="Convocar"
                            description="Manejo de Propiedad Horizontal"
                            date="2013"
                            category={this.cat04}/>                            
                            <Project
                            link="www.arquimeg.com "
                            image={img02}
                            title="Arquimeg"
                            description="Arquitectura y construcción"
                            date="2014"
                            category={this.cat06}/>                            
                            <Project
                            link="www.macaty.com"
                            image={img03}
                            title="MacatyGirls"
                            description="Venta de ropa infantil"
                            date="2012"
                            category={this.cat01}/>
                            <Project
                            link="www.inverhay.com"
                            image={img04}
                            title="Inverhay"
                            modal="Desktop App"
                            description="Venta de maletines, bolsos y maletas de viaje"
                            date="2011"
                            category={this.cat01}/>
                            <Project
                            link="www.alianzaprof.com"
                            image={img05}
                            title="Alianza profesional"
                            description="Manejo de propiedad horizontal"
                            date="2013"
                            category={this.cat04}/>
                            <Project
                            link="www.bioplaza.org"
                            image={img06}
                            title="Bioplaza"
                            description="Venta de alimentos"
                            date="2014"
                            category={this.cat01}/>
                            <Project
                            link="www.la-canasta.org"
                            image={img07}
                            title="La canasta"
                            description="Venta de alimentos"
                            date="2012"
                            category={this.cat01}/>
                            <Project
                            link="www.quicazan.com.co"
                            image={img08}
                            title="Quicazan"
                            description="Arquitectura centro deportivo"
                            date="2011"
                            category={this.cat03}/>
                            <Project
                            link="www.enex.co"
                            image={img09}
                            title="Enex"
                            description="Manejo de recursos"
                            date="2010"
                            category={this.cat04}/>
                            <Project
                            link="www.tusmapas.com"
                            image={img10}
                            title="Tus mapas"
                            description="Servicios de navegación venta de mapas"
                            date="2015"
                            category={this.cat01}/>
                            <Project
                            link="www.asoleche.org"
                            image={img11}
                            title="Asoleche"
                            description="Gremio de la industria lechera"
                            date="2010"
                            category={this.cat07}/>
                            <Project
                            link="www.sinturamartinez.com"
                            image={img12}
                            title="Sintura Martinez"
                            description="Sociedad para asesoría y consultoría"
                            date="2016"
                            category={this.cat02}/>
                            <Project
                            link="www.kinkymascotas.co"
                            image={img13}
                            title="Kinky Mascotas"
                            description="Venta accesorios mascotas"
                            date="2015"
                            category={this.cat01}/>
                            <Project
                            link="www.wawaw.co"
                            image={img14}
                            title="Wawaw"
                            description="Venta accesorios mascotas"
                            date="2016"
                            category={this.cat03}/>
                            <Project
                            link="www.sentiido.com"
                            image={img15}
                            title="Sentiido"
                            description="Organización colombiana LGBT"
                            date="2015"
                            category={this.cat07}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
 
export default Projects;