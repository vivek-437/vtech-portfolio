import React from 'react'
import img from '../../img/my-img.jpg'
import downloadresume from "../download/download.pdf";
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
                Hello, I'm Vivek, a recent graduate of BSc IT from Sir Sitaram & Lady Shantabai Patkar College of Arts & Science. I have a strong ambition to pursue a career as a Software Developer and Ethical Hacker...
                </div>
                <div className='contactdetails'>
                <h2>contact details</h2>
                    <span>Vivek Gupta,</span>
                    <span>Mumbai,Maharashtra,</span>
                    <span>Vivekgupta2742003@gmail.com</span>
                </div>
                <div className='resume'>
                <a href={downloadresume}  download>
                <button className="btn">
                    <i className="fa fa-cloud-download-alt"></i>  Download <span className='shift'><br />Resume</span></button></a>
                </div>
                </div></div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Content
