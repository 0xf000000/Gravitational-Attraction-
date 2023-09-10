const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const windowSize = 500;
canvas.height = windowSize;
canvas.width = windowSize;
ctx.fillRect(0, 0, canvas.width, canvas.height);





let atoms = createAtoms("blue", 5);
let atoms2 = createAtoms("red", 5)
requestAnimationFrame(drawAtom);


function randomxy() {

    return (Math.round(Math.random() * windowSize + 1))

}

function createAtom(x, y, c) {

    return { "x": x, "y": y, "vx": 0, "vy": 0, "color": c }

}


function gravitationRule(atom1, atom2, g) {


}


function createAtoms(color, count) {

    let atoms = [];



    for (let j = 0; j < count; j++) {

        atoms[j] = createAtom(randomxy(), randomxy(), color);
    }

    return atoms;

}

function gravitationalRule(atom1, atom2, g) {



    for (let i = 0; i < atom1.length; i++) {



        let fx = 0;
        let fy = 0;

        for (let j = 0; j < atoms2.length; j++) {

            var a = atom1[i];
            var b = atom2[j];

            dx = a.x - b.x;
            dy = a.y - b.y;
            let distance =  Math.sqrt(dx * dx + dy * dy);
   
            if ( distance > 0 && distance < 250) {

                let F = g * 1/ distance;
                fx += F * dx;
                fy += F * dy;
            }

           
           
        }

        a.vx = (a.vx + fx) ;
        a.vy = (a.vy + fy);

       
        a.x += a.vx;
        a.y += a.vy;



        if (a.x <= 0 || a.x >= windowSize) a.vx *= -1;


        if (a.y <= 0 || a.y >= windowSize) a.vy *= -1;

    }

}

function drawAllAtoms(atoms){
    

    for(atom of atoms){
        ctx.fillStyle= atom.color;
        ctx.fillRect(atom.x, atom.y, 5, 5);
    }

   
}


function drawAtom() {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

   

    ctx.fillStyle = "black"
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
   
   gravitationalRule(atoms2, atoms, -0.1);
    gravitationalRule(atoms,atoms2, -0.1 );

   drawAllAtoms(atoms);
   drawAllAtoms(atoms2);




    requestAnimationFrame(drawAtom);

}





