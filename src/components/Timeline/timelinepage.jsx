import React from 'react';
import './timelinepage.css';
// import RecyclingRoundedIcon from '@mui/icons-material/RecyclingRounded';
import { FaRecycle } from "react-icons/fa";
import TimelineElements from "./TimelineElement";

import { GoTriangleRight } from "react-icons/go";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {

  return (
    <div id='timeline' className='py-8 font-mont font-normal flex flex-col justify-center items-center '>
      <h1 className="timeline-title text-black flex flex-col   ">Our Journey <br/>
        < span className='border-2 mt-1 border-green-300 rounded-full w-full' />
        <h2 className='font-normal underline-none lowercase text-[25px] text-gray-800'>so far</h2>
      </h1>
             
      <VerticalTimeline  >
      {TimelineElements.map((element) => {

          return (
            <VerticalTimelineElement
            key={element.key}
              date={element.date}
              dateClassName="date   my-3 mx-2 "
              iconStyle={element.iconstyles}
              contentStyle={element.styles}
              icon={<FaRecycle />}
            >
              <h3 className="vertical-timeline-element-title p-2">
                {element.title}
              </h3>
              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;