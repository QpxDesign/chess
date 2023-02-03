export function ColorKnight(bcg: any, yIndex: any, xIndex: any) {
  //ima hard code  this lmao

    // up two over one
    try {
      if (bcg[yIndex + 2][xIndex + 1] === null) {
        // pos pos
        bcg[yIndex + 2][xIndex + 1] = "green";
      } else if (bcg[yIndex + 2][xIndex + 1].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex + 2][xIndex + 1] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex - 2][xIndex + 1] === null) {
        // neg pos
        bcg[yIndex - 2][xIndex + 1] = "green";
      } else if (bcg[yIndex - 2][xIndex + 1].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex - 2][xIndex + 1] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex + 2][xIndex - 1] === null) {
        // pos neg
        bcg[yIndex + 2][xIndex - 1] = "green";
      } else if (bcg[yIndex + 2][xIndex - 1].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex + 2][xIndex - 1] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex - 2][xIndex - 1] === null) {
        // neg neg
        bcg[yIndex - 2][xIndex - 1] = "green";
      } else if (bcg[yIndex - 2][xIndex - 1].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex - 2][xIndex - 1] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex + 1][xIndex + 2] === null) {
        // pos pos
        bcg[yIndex + 1][xIndex + 2] = "green";
      } else if (bcg[yIndex + 1][xIndex + 2].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex + 1][xIndex + 2] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex - 1][xIndex + 2] === null) {
        // neg pos
        bcg[yIndex - 1][xIndex + 2] = "green";
      } else if (bcg[yIndex - 1][xIndex + 2].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex - 1][xIndex + 2] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex + 1][xIndex - 2] === null) {
        // pos neg
        bcg[yIndex + 1][xIndex - 2] = "green";
      } else if (bcg[yIndex + 1][xIndex - 2].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex + 1][xIndex - 2] = "purple";
      }
    } catch(e) {}
    try {
      if (bcg[yIndex - 1][xIndex - 2] === null) {
        // neg neg
        bcg[yIndex - 1][xIndex - 2] = "green";
      } else if (bcg[yIndex - 1][xIndex - 2].color !== bcg[yIndex][xIndex]) {
        bcg[yIndex - 1][xIndex - 2] = "purple";
      }
    } catch(e) {}
    
   
  
   
    //up one over too
    
    
   
  
  return bcg;
}
