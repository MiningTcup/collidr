(function () {
    const Collidr = {};

    Collidr.collide = function (object, world, physics = object, boundary = { x: 0, y: 0, w: 0, h: 0 }) {
        object.vy += physics.gravity;
        object.vx *= physics.frictionx;
        object.x += object.vx;

        if (boundary.width) boundary.w = boundary.width;
        if (boundary.height) boundary.h = boundary.height;

        if (Collidr.colliding(object, world, boundary)) {
            object.x -= object.vx;
            object.x += object.vx % 1;

            if (Collidr.colliding(object, world, boundary)) {
                object.x -= object.vx % 1;
            } else {
                while (!Collidr.colliding(object, world, boundary)) object.x += Math.sign(object.vx);
                object.x -= Math.sign(object.vx);
            }
            object.vx = 0;
        }

        object.y += object.vy;

        if (Collidr.colliding(object, world, boundary)) {
            object.y -= object.vy;
            object.y += object.vy % 1;

            if (Collidr.colliding(object, world, boundary)) {
                object.y -= object.vy % 1;
            } else {
                while (!Collidr.colliding(object, world, boundary)) object.y += Math.sign(object.vy);
                object.y -= Math.sign(object.vy);
            }

            if (object.vy < 0) {
                object.vy = -object.vy * physics.frictiony;
            } else {
                object.vy = 0;
                object.grounded = true;
            }            
        }
    };

    Collidr.colliding = function (object, world, boundary) {
        return (
            object.x < 0 ||
            object.x + object.w > boundary.w ||
            object.y < 0 ||
            object.y + object.h > boundary.h ||
            world.some((obj) => object.x < obj.x + obj.w && object.x + object.w > obj.x && object.y < obj.y + obj.h && object.y + object.h > obj.y)
        );
    };

    window.Collidr = Collidr;
})();