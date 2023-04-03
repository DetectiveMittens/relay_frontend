import { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
 
function NewSocialMessage(props){

    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    return (
    <div className="mb-1 px-2 mx-5 bg-slate-100 rounded-3 shadow-md">
        <div className="text-slate-400 font-semibold text-xs">
            {props.username ? props.username : "Username Undefined"}
            <form>
                <input type='text' />

            </form>
        </div>

    </div>

    )

}

export default NewSocialMessage;