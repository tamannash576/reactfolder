import React from 'react';
import Banner from '../Component/Banner';
import TopDoctor from '../Component/Topdoctors';
import RelatedDoctors from '../Component/Relateddoctor';
import Header from '../Component/Header';
import SpecialityMenu from '../Component/Specialitymenu';


function Home() {
    return (
        <div className='pic'>

            <Header />
            <Banner />

            <TopDoctor />
            <RelatedDoctors />
            <SpecialityMenu />
        </div>

    );
}
export default Home;
