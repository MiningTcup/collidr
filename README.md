# Collidr.JS
JavaScript library for 2D AABB collision.
## Usage
```javascript
// Applies collision between object, world, and optionally, boundary, using the physics given by physics or object.
Collidr.collide(object, world, [physics], [boundary]);

// Returns true or false, depending on whether object is colliding with world or boundary.
Collidr.colliding(object, world, boundary);
```
```object``` is the object that should have collision, for example, the player. ```world``` is what ```object``` will collide with. 
```physics``` is the physical properties of ```object```, which, if left undefined, will use ```object``` instead. ```boundary``` is the boundary of where ```object``` can roam. For example, pass your canvas to keep the player within the canvas. If left undefined, set to have zero width and height.

```javascript
object = { x: 0, y: 0, w: 100, h: 100 }
world = [ { x: 0, y: 200, w: 200, h: 50 }, { x: 200, y: 250, w: 200, h: 50 } ]
physics = { gravity: 1, frictionx: 0.8, frictiony: 0.5 }
```
