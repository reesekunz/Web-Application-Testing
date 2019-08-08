// Buttons user can click whenever this is a strike, ball, foul, or hit (don't specify type of hit)
// Changes in this component should update info shown by Display component 

// balls and strikes reset to 0 when a hit is recorded.

import React from "react";

const Hits= props =>
<div>
<button onClick={() => (props.hit + 1)} >
Hit
</button>
</div>

export default Hits;
