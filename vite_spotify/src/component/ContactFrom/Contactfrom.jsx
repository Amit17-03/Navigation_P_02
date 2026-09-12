
import React from 'react';
import Button from '../Button/Button'
import styles from './contactfrom.module.css';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import {useState} from 'react';



const Contactfrom = () =>{
    const [name, setName] = useState("Amit")

    let email="support@agile.com";
    let text="whrer are your from";

    const onSubmit = (event) =>{
        event.preventDefault();
    

        setName(event.target[0].value);
        email = event.target.value[1];
        text = event.target.value[2];

        console.log(
            {
             name,
             email,
             text,

            }
        )
};

  

    const onViaCallSubmit = () => {
        console.log("I am from chennai")
    };


    return(
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="30px"/>} />

                <Button 
                  onClick={onViaCallSubmit}
                  
                  
                text="VOICE CALL" icon={<FaPhoneAlt fontSize="30px"/>} />
            </div>
            
            
                 <Button 
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<HiMail fontSize="30px"/>} />

                    <form onSubmit={onSubmit}>
                       <div className={styles.form_container}>
                         <label htmlFor='name'>Name</label>
                        <input type='text' name="name"/>
                       </div>
                        <div className={styles.form_container}>
                         <label htmlFor='email'>Email</label>
                        <input type='email' name="email"/>
                       </div>
                        <div className={styles.form_container}>
                         <label htmlFor='text'>Text</label>
                        <textarea name="text" row="8"/>
                       </div>
                       <div
                       style={{
                        display: "flex",
                        justifyContent: "end",
                       }}
                       >
                        <Button 
                    text="Submit Button" />
                    </div>
                    <div>
                        {
                            name + " " + email + " " + text
                        }
                    </div>
                    </form>
            </div>
            <div
            className={styles.contact_image}></div>
            {/* <div className={styles.contact_form}></div> */}
        </section>
    );
};   
export default Contactfrom;