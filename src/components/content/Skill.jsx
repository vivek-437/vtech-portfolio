import React from 'react'
import Prgdata from './Prgdata'
const Skill = () => {
   
    const Prgrun=(props)=>{
        return(
            <>
  
                        <div className='prgrepot'>
                            <span>{props.Name}</span>
                            <div className='prgbar'>
                                <button className='prginc'>
                                    <div className='precolor' style={{width:props.Width}}></div>
                                </button>
                            </div>
                        </div>
               
               
            </>
        )
    }
    return (
        <>
            <div className='container conskill'>
                <div className='scrolly'>
               <div className='Skill'>
                    <div className='head'>
                        <h2>Skills</h2>
                    </div>
                    <div className='intro'>
                    Here are my skills in which I have worked & have some great experience in it...
                    </div>
                    <div className='data'>
                    {Prgdata.map((val)=>{
                    return(
                        <Prgrun Width={val.Width}
                            Name={val.Name}
                        />
                    )
                })}
               </div>     </div>
            </div></div>
        </>
    )
}

export default Skill
