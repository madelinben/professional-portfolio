import React from 'react';
import * as FaIcons from 'react-icons/fa';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
    return (
    <>
        <section aria-label='services' id='services'>
            <SectionTitle title={'Services'} />

            <div class='service-wrapper'>
                <div className='service-container'>
                    <div className='service-icon'>
                        <FaIcons.FaQuidditch />
                    </div>
                    <div className='service-header'>UI/UX Design</div>
                    <p >Designing is not just what it looks like and feels like. Design is how it works</p>
                </div>

                <div className='service-container'>
                    <div className='service-icon'>
                        <FaIcons.FaDesktop />
                    </div>
                    <div className='service-header'>Web Development</div>
                    <p >Your apps, your style, create them any way you want with</p>
                </div>

                <div className='service-container'>
                    <div className='service-icon'>
                        <FaIcons.FaTabletAlt />
                    </div>
                    <div className='service-header'>App Development</div>
                    <p >Build apps that users love. Simple as that</p>
                </div>
            </div>
        </section>

        <section aria-label='contact form' id='contact'>
            <SectionTitle title={'Lets Talk'} />
            <ContactForm />
        </section>
    </>
    );
}

export default Contact;