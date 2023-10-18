# Collidr.JS
JavaScript library for 2D AABB collision.
## Usage
To use, add to your main game loop:
```javascript
Collidr.collide(object, world, [physics], [boundary]);
```
***
```object``` is the object that should have collision, for example, the player. ```object``` should be in the format
```javascript
object = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
}
```
***
```world``` is what ```object``` will collide with. ```world``` should be in the format
```javascript
world = [
    {
        x: 0,
        y: 200,
        w: 200,
        h: 50,
    },
    {
        x: 200,
        y: 250,
        w: 200,
        h: 50,
    },
]
```
***
```physics``` is the properties of ```object```. ```physics``` should be in the format
```javascript
physics = [
    {
        gravity: 1,
        friction: 0.8,
    },
]
```
If left undefined, ```object``` will be used instead.
***
```boundary``` is the boundary of where ```object``` can roam. For example, pass ```canvas``` to keep the player within the canvas. If left undefined, set to
```javascript
boundary = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
}
```
***
