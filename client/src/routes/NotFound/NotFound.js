import React from 'react';

import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

function NotFound() {
    return (
    <>
        <Hero />

        <section id='services'>
            <SectionTitle title={'Whoops!'} />
            <h1>Error 404: Page Not Found.</h1>
        </section>
    </>
    );
}

export default NotFound;