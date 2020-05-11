// Child functional component with forwardRef

import React from "react";

const RefForward = React.forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
});

export default RefForward;
