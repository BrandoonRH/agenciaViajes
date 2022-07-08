import  express  from 'express';
import {
    paginaInicio, 
    paginaNosotros,
     paginaViajes, 
     paginaTestimoniales, 
     paginaViaje
} from '../controllers/pagesController.js'; 
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router(); 

router.get('/',paginaInicio ); 

router.get('/nosotros', paginaNosotros ); 

router.get('/viajes', paginaViajes ); 
router.get('/viajes/:slug', paginaViaje ); 

router.get('/testimoniales', paginaTestimoniales); 
router.post('/testimoniales', guardarTestimonial); 

export default router; 