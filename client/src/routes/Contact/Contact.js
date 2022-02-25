import React from 'react';

import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
    return (
    <>
        <Hero />

        <section aria-label='services' id='services'>
            <SectionTitle title={'Services'} />
        </section>

        <section aria-label='contact form' id='contact'>
            <SectionTitle title={'Lets Talk'} />
            <ContactForm />
        </section>
    </>
    );
}

export default Contact;