import React, {useContext} from 'react';
import {IconSun} from './IconSun';
import {IconMoon} from './IconMoon';
import {context} from '../../App';

const ThemeButton = (props) => {
 
    const theam = useContext(context);
    
    return (
        <div className="btn-theme" {...props}>  
          {theam ? <IconSun/> : <IconMoon/>}
        </div>  
    );
  }

export default ThemeButton;
