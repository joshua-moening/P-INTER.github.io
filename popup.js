console.log('This is a popup!');
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  btn.addEventListener("click", paint);
});

function paint() {
// Create a canvas
    const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        let sx = 0;
        let sy = 0;
        let line1ex = 0;
        let line1ey = 0;
        let rad = 0;
        let arcsx = 0;
        let arcsy = 0;
        let arcSa = 0;
        let arcEa = 0;
        const cssColorNames = ["AliceBlue",
                                 "AntiqueWhite",
                                 "Aqua",
                                 "Aquamarine",
                                 "Azure",
                                 "Beige",
                                 "Bisque",
                                 "Black",
                                 "BlanchedAlmond",
                                 "Blue",
                                 "BlueViolet",
                                 "Brown",
                                 "BurlyWood",
                                 "CadetBlue",
                                 "Chartreuse",
                                 "Chocolate",
                                 "Coral",
                                 "CornflowerBlue",
                                 "Cornsilk",
                                 "Crimson",
                                 "Cyan",
                                 "DarkBlue",
                                 "DarkCyan",
                                 "DarkGoldenRod",
                                 "DarkGray",
                                 "DarkGrey",
                                 "DarkGreen",
                                 "DarkKhaki",
                                 "DarkMagenta",
                                 "DarkOliveGreen",
                                 "DarkOrange",
                                 "DarkOrchid",
                                 "DarkRed",
                                 "DarkSalmon",
                                 "DarkSeaGreen",
                                 "DarkSlateBlue",
                                 "DarkSlateGray",
                                 "DarkSlateGrey",
                                 "DarkTurquoise",
                                 "DarkViolet",
                                 "DeepPink",
                                 "DeepSkyBlue",
                                 "DimGray",
                                 "DimGrey",
                                 "DodgerBlue",
                                 "FireBrick",
                                 "FloralWhite",
                                 "ForestGreen",
                                 "Fuchsia",
                                 "Gainsboro",
                                 "GhostWhite",
                                 "Gold",
                                 "GoldenRod",
                                 "Gray",
                                 "Grey",
                                 "Green",
                                 "GreenYellow",
                                 "HoneyDew",
                                 "HotPink",
                                 "IndianRed",
                                 "Indigo",
                                 "Ivory",
                                 "Khaki",
                                 "Lavender",
                                 "LavenderBlush",
                                 "LawnGreen",
                                 "LemonChiffon",
                                 "LightBlue",
                                 "LightCoral",
                                 "LightCyan",
                                 "LightGoldenRodYellow",
                                 "LightGray",
                                 "LightGrey",
                                 "LightGreen",
                                 "LightPink",
                                 "LightSalmon",
                                 "LightSeaGreen",
                                 "LightSkyBlue",
                                 "LightSlateGray",
                                 "LightSlateGrey",
                                 "LightSteelBlue",
                                 "LightYellow",
                                 "Lime",
                                 "LimeGreen",
                                 "Linen",
                                 "Magenta",
                                 "Maroon",
                                 "MediumAquaMarine",
                                 "MediumBlue",
                                 "MediumOrchid",
                                 "MediumPurple",
                                 "MediumSeaGreen",
                                 "MediumSlateBlue",
                                 "MediumSpringGreen",
                                 "MediumTurquoise",
                                 "MediumVioletRed",
                                 "MidnightBlue",
                                 "MintCream",
                                 "MistyRose",
                                 "Moccasin",
                                 "NavajoWhite",
                                 "Navy",
                                 "OldLace",
                                 "Olive",
                                 "OliveDrab",
                                 "Orange",
                                 "OrangeRed",
                                 "Orchid",
                                 "PaleGoldenRod",
                                 "PaleGreen",
                                 "PaleTurquoise",
                                 "PaleVioletRed",
                                 "PapayaWhip",
                                 "PeachPuff",
                                 "Peru",
                                 "Pink",
                                 "Plum",
                                 "PowderBlue",
                                 "Purple",
                                 "RebeccaPurple",
                                 "Red",
                                 "RosyBrown",
                                 "RoyalBlue",
                                 "SaddleBrown",
                                 "Salmon",
                                 "SandyBrown",
                                 "SeaGreen",
                                 "SeaShell",
                                 "Sienna",
                                 "Silver",
                                 "SkyBlue",
                                 "SlateBlue",
                                 "SlateGray",
                                 "SlateGrey",
                                 "Snow",
                                 "SpringGreen",
                                 "SteelBlue",
                                 "Tan",
                                 "Teal",
                                 "Thistle",
                                 "Tomato",
                                 "Turquoise",
                                 "Violet",
                                 "Wheat",
                                 "White",
                                 "WhiteSmoke",
                                 "Yellow",
                                 "YellowGreen"];


        function randLine()  {
        sx = Math.floor(Math.random() * 361);
        sy = Math.floor(Math.random() * 501);
        line1ex = Math.floor(Math.random() * 361);
        line1ey = Math.floor(Math.random() * 501);
        rad =  Math.floor(Math.random() * 250);
        arcsx = Math.floor(Math.random() * 361);
        arcsy = Math.floor(Math.random() * 250);
        arcSa = (Math.random() * 2.0);
        arcEa = (Math.random() * 2.0);
        }

        function randArc() {
        ctx.beginPath();
            if (arcSa == 0 && arcEa == 0){
                ctx.arc(arcsx, arcsy, rad, arcSa, arcEa);
            } else if (arcSa != 0 && arcEa != 0)  {
                ctx.arc(arcsx, arcsy, rad, arcSa * Math.PI, arcEa * Math.PI);
            } else if (arcSa == 0 && arcEa != 0)  {
                ctx.arc(arcsx, arcsy, rad, arcSa, arcEa * Math.PI);
            } else if (arcSa != 0 && arcEa == 0)  {
                ctx.arc(arcsx, arcsy, rad, arcSa * Math.PI, arcEa);
            }
         ctx.strokeStyle = cssColorNames[Math.floor(Math.random() * cssColorNames.length)];
         ctx.fillStyle = cssColorNames[Math.floor(Math.random() * cssColorNames.length)];
         ctx.stroke();
        }

        function animate()  {
        randLine();
        randArc();
        ctx.beginPath();
        ctx.moveTo(sx,sy);
        ctx.lineTo(line1ex,line1ey);
        ctx.strokeStyle = cssColorNames[Math.floor(Math.random() * cssColorNames.length)];
        ctx.stroke();
        requestAnimationFrame(animate);
        }
        animate();
}