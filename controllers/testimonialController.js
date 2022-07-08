import { Testimonial } from "../models/Testimonial.js";
const guardarTestimonial = async (req, res) => {

    //Validar 
    const {name, email, message} = req.body; 
    const errores = []; 
    if(name.trim() === ''){
      errores.push({message: 'EL nombre esta Vacio'})
    }
    if(email.trim() === ''){
       errores.push({message: 'EL email esta Vacio'})
    }
    if(message.trim() === ''){
       errores.push({message: 'EL mensaje esta Vacio'})
    }
    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll(); 
        res.render('testimoniales', {
            titlePage: 'Testimoniales', 
            errores, 
            name, 
            email,
            message,
            testimoniales
        })
    }else{
        //Almacenar en la BD
       try {
        await Testimonial.create({
            name, 
            email,
            message
        }); 
        res.redirect('/testimoniales'); 

       } catch (error) {
        console.log(error)
       }

    }
}

export {
    guardarTestimonial
}