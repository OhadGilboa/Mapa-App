import React from 'react';
import Switch from '@material-ui/core/Switch';
import { inject, observer } from 'mobx-react';


const Switches = inject("userData")(observer((props)=> {
  const handleChange = (event) => {
    props.userData.setSilence(!props.userData.user.silence)
  };

  return (
    <div>
      <Switch
        checked={!props.userData.user.silence}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}))

export default Switches