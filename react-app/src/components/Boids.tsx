
export class Vector { // Export the Vector class
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
  }

  add(v: Vector): Vector {
      return new Vector(this.x + v.x, this.y + v.y);
  }

  subtract(v: Vector): Vector {
      return new Vector(this.x - v.x, this.y - v.y);
  }

  multiply(scalar: number): Vector {
      return new Vector(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number): Vector {
      if (scalar === 0) {
          console.error("Division by zero!");
          return new Vector(this.x,this.y); 
      }
      return new Vector(this.x / scalar, this.y / scalar);
  }

  magnitude(): number {
      return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): Vector {
      const mag = this.magnitude();
      if (mag === 0) {
          return new Vector(); 
      }
      return this.divide(mag);
  }

  limit(max: number): Vector {
      if (this.magnitude() > max) {
          return this.normalize().multiply(max);
      }
      return this;
  }

  setMag(magnitude:number):Vector{
      return this.normalize().multiply(magnitude);
  }
}

export class Boid { // Export the Boid class
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  maxSpeed: number;
  maxForce: number;

  constructor(x: number, y: number) {
      this.position = new Vector(x, y);
      this.velocity = new Vector(Math.random() * 4 - 1, Math.random() * 2 - 1);
      this.acceleration = new Vector();
      this.maxSpeed = 3;
      this.maxForce = 0.6;
  }

  update() {
      this.velocity = this.velocity.add(this.acceleration);
      this.velocity = this.velocity.limit(this.maxSpeed);
      this.position = this.position.add(this.velocity);
      this.acceleration = new Vector();
  }

  applyForce(force: Vector) {
      this.acceleration = this.acceleration.add(force);
  }

  draw(ctx: CanvasRenderingContext2D, boids: Boid[], maxDistance: number = 100, opacity: number = 1) {
    ctx.save(); 

    ctx.imageSmoothingEnabled = true;

    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    //ctx.shadowBlur = 1;
    //ctx.shadowColor = `rgba(255, 255, 255, ${opacity})`;

    const radius = 2;

    // Draw the boid (particle)
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Draw lines to nearby boids
    boids.forEach((otherBoid) => {
        if (otherBoid !== this) {
            const dx = this.position.x - otherBoid.position.x;
            const dy = this.position.y - otherBoid.position.y;
            const distance = Math.hypot(dx, dy);

            if (distance < maxDistance) {
                const lineOpacity = 1 - distance / maxDistance;  // Closer boids have brighter lines
                ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
                ctx.lineWidth = 0.5;

                ctx.beginPath();
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(otherBoid.position.x, otherBoid.position.y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    });

    ctx.restore();  // Restore previous state
}

  borders(width:number,height:number) {
      if (this.position.x < 0) this.position.x = width;
      if (this.position.y < 0) this.position.y = height;
      if (this.position.x > width) this.position.x = 0;
      if (this.position.y > height) this.position.y = 0;
    }
}