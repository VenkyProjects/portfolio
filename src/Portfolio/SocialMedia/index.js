import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import styles from './styles.module.css'

function SocialMedia(){
    const onSubmit=()=>(
        window.location.href='https://www.linkedin.com/in/venkateswarlu-sunke-79a086274/'
    );
    const onSubmitInstagram=()=>{
        window.location.href='https://www.instagram.com/_its_me_venkatesh___/'
    }

    const onSubmitTwitter=()=>{
        window.location.href='https://twitter.com/SunkeVenka22669'
    }
    const onSubmitFacebook=()=>{
        window.location.href='https://www.facebook.com/sunkea.venkateswarlu'
    }

    const whatsappNumber = '9381009089';

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Hello, I want to connect with you.'); 
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };
    return(
        <div className={styles.icons}>
            <FaLinkedin className={styles.linkedin} onClick={()=>onSubmit()}/>
            <FaTwitter className={styles.twitter} onClick={()=>onSubmitTwitter()}/>
            <FaFacebook className={styles.facebook} onClick={()=>onSubmitFacebook()}/>
            <FaWhatsapp className={styles.whatsapp} onClick={()=>handleWhatsAppClick()}/>
            <FaInstagram className={styles.instagram} onClick={()=>onSubmitInstagram()}/>
        </div>
    );
};
export default SocialMedia