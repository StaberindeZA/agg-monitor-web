import React, {useState} from 'react';
import classNames from 'classnames';

interface AccordionProps {
  children: JSX.Element;
}

export function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="transition-all duration-700">
      <div className={classNames('relative', 'overflow-hidden', {'max-h-0': !expanded}, {'max-h-300': expanded}, {'mt-4': expanded})}>
        {props.children}
      </div>
      <button onClick={() => setExpanded(!expanded)} className="text-red-500 text-sm">
        <div className="flex place-content-center">
          <div>{!expanded ? 'VIEW MORE INFO' : 'VIEW LESS INFO'}</div>
          <div className="text-red-500 ml-2">
            {!expanded ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>}
          </div>  
        </div>        
      </button>
    </div>
  )
}
