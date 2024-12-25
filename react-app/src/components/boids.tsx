// DoublePendulumComponent.tsx

import React, { useEffect, useRef } from "react";

// Boid
  class boid {

     pos_x:number;
     pos_y: number;

    velocity:number;

    acceletation:number;

    constructor(pos_x = 0, pos_y = 0,velocity = 0, acceletation=0){

      this.pos_x = pos_x;
      this.pos_y = pos_y;

      this.velocity = velocity;

      this.acceletation = acceletation;

    }
    
     

  }

