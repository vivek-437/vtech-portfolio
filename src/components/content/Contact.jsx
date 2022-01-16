import React from 'react'
import img from '../../img/my-img.jpg'
import downloadfile from '../download/download.pdf'
const Content = () => {
    return (
        <>
        <div className='container concontact'>
        <div className='scrolly'>
            <div className='aboutme'>
            
            <div className='flex'>
                <div className='img'>
                    <img src={img} alt="Reload" srcSet=""  />
                </div >
                
              <div className='block'>
              <h2>about me</h2>
                <div className='infomyself'>
                I am Vivek,I'm in second year of Bsc IT in Sir Sitaram & Lady Shantabai Patkar College of Arts & Science.My aim is to become Software Developer and Ethical Hacker..
                </div>
                <div className='contactdetails'>
                <h2>contact details</h2>

                    <span>Vivek Gupta,</span>
                    <span>Mumbai,Maharashtra,</span>
                    <span>Vivekgupta2742003@gmail.com</span>
                </div>
                <div className='resume'>
                <button class="btn"><a href="../download/download.pdf" download={downloadfile}>
                    <i class="fa fa-cloud-download-alt"></i>  Download <span className='shift'><br />Resume</span></a></button>
                </div>
                </div></div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Content