import { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
 
function SocialMessage(props){

    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    return (
    <div className="align-middle m-1 pb-1 pt-2.5 px-2 mx-5 bg-slate-100 rounded-3 shadow-md">
        
        <div className="inline-grid align-middle px-2 text-slate-400 font-semibold">
            <div className=" rounded-full">
                    <img
                    className="h-10 w-10 rounded-full border-2 border-green-300 bg-cyan-700"
                    src="favicon.ico"
                    />
            </div>
        </div>

        {<p className="inline-grid px-2 text-slate-400 font-semibold" >{' ' + props.username + ': '}</p>}
        {<p className="inline-grid px-1 text-slate-800 text-base font-light">{props.message}</p>}


        {/* <Accordion open={open === 1}>
            <AccordionHeader className="h-2 bg-slate-100" onClick={() => handleOpen(1)}>
                &#8205;
            </AccordionHeader>
            <AccordionBody>
                <button className="m-1 bg-slate-600 rounded-2 px-6 py-1 text-slate-100 text-xs font-semibold">
                    Post Comment
                </button>
            </AccordionBody>
        </Accordion> 
        */}

    </div>

    )

}

export default SocialMessage;