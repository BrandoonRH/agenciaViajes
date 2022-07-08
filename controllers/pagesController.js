import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";

const paginaInicio = async (req, res) => {
    //Consultar BD para mostrar3 viajes 
    const promiseDB = [];
    promiseDB.push( Viaje.findAll( {limit: 3}) );
    promiseDB.push( Testimonial.findAll( {limit: 3}) )
   try {
    const result = await Promise.all( promiseDB );
    
    res.render('inicio', {
        titlePage: 'Inicio', 
        clase: 'home',
        viajes:  result[0],
        testimoniales: result[1]
    }); 
   } catch (error) {
    console.log(error)
   }
}
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        titlePage: 'Nosotros', 
    }); 
}
const paginaViajes = async (req, res) => {
    //Consultar DB 
    const viajes = await Viaje.findAll(); 

    res.render('viajes', {
        titlePage: 'Próximos Viajes', 
        viajes
    }); 
}
const paginaTestimoniales = async (req, res) => {
   try {
    const testimoniales = await Testimonial.findAll(); 
    res.render('testimoniales', {
        titlePage: 'Testimoniales', 
        testimoniales
    }); 
   } catch (error) {
    console.log(error)
   }
}

const paginaViaje = async (req, res) => {
    const {slug} = req.params; 
    try {
        const viaje = await Viaje.findOne({where: {slug}})
        res.render('viaje', {
            titlePage: 'Información Viaje', 
            viaje
        })
    } catch (error) {
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales, 
    paginaViaje

}