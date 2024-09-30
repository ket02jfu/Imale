import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default ({app}, inject) => {
    app.AOS = new AOS.init({
        duration: 400,
        disable: false,
        mirror: false,
        debounceDelay: 50,
        ThrottleDelay: 99,
        startEvent: 'DOMContentLoaded', 
        offset: 10,
        once: true
    })
}
