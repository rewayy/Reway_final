import React, {Component} from 'react'
import Cards from './CardUI';
import './FCards.css';
import { E_PRINT_12, E_PRINT_15, E_PRINT_17, E_WEB_13, sync } from '../../assets';

class FCards extends Component{
    render() {
        return (
            
            <div  className='w-full h-full bg-[#108540] bg-opacity-25 md:pb-14 relative  card-container'>
            <div className='max-w-[1206px] m-auto  h-full flex flex-col items-center justify-between'>

                <div className=' absolute -top-[15px] w-full  flex justify-center items-center  '>
                    <img className='sync' src={sync} sizes={60} alt="" />
                </div>

                <div className="container-fluid flex flex-col pt-8">
                            <div className="flex justify-center items-center flex-col  ">
                                <h1 className='text-black mb-4'> Sustainable Goals</h1>
                                <span className=' text-black font-mont mb-8  '> Making a difference, together.</span>
                            </div>

                    <div className="sdg-row grid px-20    sm:px-20 sm:grid-cols-2  md:grid-cols-3 md:px-4 lg:px-0 lg:grid-cols-4 p-2 mt-0 md:mt-8 ">
                        <div className="col-md-3   ">
                                <Cards  cardId="1 " imgsrc={E_PRINT_12} title="Responsible Consumption And Production"
                                para="Ensure sustainable consumption and production patterns." />
                        </div>
                        <div className="col-md-3 ">
                                <Cards cardId="2 " imgsrc={E_WEB_13} title="Climate Action"
                                para="Take urgent action to combat climate change and its impacts."/>
                        </div>
                        <div className="col-md-3 ">
                                <Cards cardId="3 " imgsrc={E_PRINT_15} title="Life on Land"
                                para="Protect, restore and promote sustainable use of terrestial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss."/>
                        </div>
                        <div className="col-md-3 ">
                                <Cards cardId="4 " imgsrc={E_PRINT_17} title="Partnerships for the Goals"
                                para="Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development. "/>
                        </div>
                    </div>
                </div>
      
        </div>
        </div>

        );
    }
}

export default FCards;