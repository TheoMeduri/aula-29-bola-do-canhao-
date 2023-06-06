class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    // Crie o corpo circular com os parâmetros
    this.body = Bodies.circle(x, y, this.r, options);
    // adicionar a imagem às balas de canhão.

    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot() {

    // Use a função predefinida para definir a velocidade e multiplicar o ângulo.
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
 
    // Adicione o valor de static para bala de canhão.
    Matter.Body.setStatic(this.body, false);

    // Adicione a função para setVelocity() e defina a velocidade x e y de acordo com os
// parâmetros. E após isso, teste o projeto.
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

    }
  }

