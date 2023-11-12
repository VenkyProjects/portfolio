import { useState } from "react";
import styles from './styles.module.css';
import axios from 'axios';

function Contactform(){
    const [formData,setFormData]=useState({
        name:'',
        email:''
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('https://mernback-jdzc.onrender.com/data/', formData);
          alert('Form submitted successfully!');
          // Clear form after submission
          setFormData({ name: '', email: '', subject: '' ,message:'',phone_number:''});
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
    return(
        <div className={styles.form_container}>
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <input
                    name="phone_number"
                    type="number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default Contactform;