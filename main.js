let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

// create engine
const engine = Engine.create()

// create render
const render = Render.create({
    engine,
    element : document.body,
    options: {
        wireframes : false, // true면 색상 적용X
        background : "#F7F4C8", // background color
        width : 620,
        height : 850
    } 
});

// create world
const world = engine.world

// create left_wall
const left_wall = Bodies.rectangle(15, 395, 30, 790, {
    isStatic : true, // fix
    render : { fillStyle : "#E6B143" } // color
});

// create right_wall
const right_wall = Bodies.rectangle(605, 395, 30, 790, {
    isStatic : true, // fix
    render : { fillStyle : "#E6B143" } // color
});

// create ground
const ground = Bodies.rectangle(310, 820, 620, 60, {
    isStatic : true, // fix
    render : { fillStyle : "#E6B143" } // color
});

// create top_line
const top_line = Bodies.rectangle(310, 150, 620, 2, {
    isStatic : true, // fix
    render : { fillStyle : "#E6B143" } // color
});

// add left_wall
World.add(world, [left_wall, right_wall, ground, top_line])

Render.run(render)
Render.run(engine)