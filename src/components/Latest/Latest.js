import React from 'react';
import LatestTop from '../LatestTop/LatestTop'
import Header from '../Header/Header'
import LatestBottom from '../LatestBottom/LatestBottom';
import Footer from '../../components/Footer/Footer'

export default function Latest() {
    return (
        <div className='main-latest'>
            <Header></Header>
            <LatestTop></LatestTop>
            <LatestBottom></LatestBottom>
            <Footer></Footer>
        </div>
    )
}
