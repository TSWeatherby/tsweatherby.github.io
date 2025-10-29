var canvas = document.getElementById('canvas');
var canvas_2 = document.getElementById('canvas_2');
var voltmax = 4.5;
var precision = 2;
var arrowcolour = "rgba(0,255,0,0.7)";
var img = new Image();
img.src = 'https://cdn.onlinewebfonts.com/svg/img_431207.png';

var lang = document.getElementById("lang_input");
var lang_str = lang.options[lang.selectedIndex].value;
lang_str = lang_str.substring(11,13);
console.log(lang_str);
var volt_symb = "";
var warning="";

if(lang_str=="en"){
    volt_symb = "V";
    slow_text = "Slow Mo";
    warning = "Short Circuit!";
}

if(lang_str=="de"){
    volt_symb = "U";
    slow_text = "Zeitlupe";
    warning = "Kurzschluss!";
}

var d_0;
var t_0;
var d_1;
var t_1;

function precise(x) {
    foo = Number.parseFloat(x).toPrecision(precision);
    return foo.toString(10)
}


function toSub(value)
{
  var str = "";
  //  Get the number of digits, with a minimum at 0 in case the value itself is 0
  var mag = Math.max(0, Math.floor(Math.log10(value)));
  //  Loop through all digits
  while (mag >= 0)
  {
    //  Current digit's value
    var digit = Math.floor(value/Math.pow(10, mag))%10;
    //  Append as subscript character
    str += String.fromCharCode(8320 + digit);
    mag--;
  }
  return str;
}

var x = canvas.width;
var y = canvas.height;
var x_squash=0;
var y_squash=0;
var squash_val=0;
var I_tot = 0;
window.addEventListener("resize", initialise);


var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 150;
var c_2 = canvas_2.getContext('2d');
canvas_2.width = window.innerWidth;
canvas_2.height = window.innerHeight - 150;
c.fillStyle = 'rgba(200,200,200,1)';
c.fillRect(0, 0, c.canvas.width, c.canvas.height);
canvas_2.addEventListener("click", onStop);

var parallels_1 = document.getElementById("NoWires1");
var parallels_2 = document.getElementById("NoWires2");
var parallels_3 = document.getElementById("NoWires3");
var parallels_value = 1;
var voltages = document.getElementById("voltages");
var phys = document.getElementById("phys");
var tech = document.getElementById("tech");
var RB = document.getElementById("RotBlau");
var BR = document.getElementById("BlauRot");
var RB_value=true;
var PosHigh = document.getElementById("PosHigh");
var NegHigh = document.getElementById("NegHigh");
var PosHigh_value=true;
var NegPos = document.getElementById("NegPos");
var ZeroPos = document.getElementById("ZeroPos");
var ZeroPos_value=true;
var tech_value = true;
var slow_button = document.getElementById("slow");
var fast_button = document.getElementById("fast");
var slow_value = false;
var voltage = [NaN, NaN, NaN, NaN, NaN, NaN];
var showResults = false;
var transformed = false;
var totalResistance;
var radio_button_colour = document.getElementById("SimTypeColour").checked;
var radio_button_height = document.getElementById("SimTypeHeight").checked;
var voltageWires_2 = [voltage[0], voltage[0], voltage[1], voltage[1], 0, voltage[2], voltage[2], voltage[3], voltage[3], voltmax, voltage[0], voltage[1]];
var voltageWires_3 = [0,0,0,0,0,0,0,0,0,0,0,0];
var voltageRef = [
    { left: voltmax, right: voltage[0] },
    { left: voltage[0], right: voltage[1] },
    { left: voltage[1], right: voltmax },
    { left: 0, right: voltage[2] },
    { left: voltage[2], right: voltage[3] },
    { left: voltage[3], right: voltmax },
    { left: 0, right: voltage[4] },
    { left: voltage[4], right: voltage[5] },
    { left: voltage[5], right: voltmax }
];

var lines_2 = [
    { x_1: 0.325, y_1: 0.85, x_2: 0.3625, y_2: 0.85, ident: 1, state: 1 },
    { x_1: 0.3625, y_1: 0.85, x_2: 0.4, y_2: 0.85, ident: 2, state: 1 },
    { x_1: 0.6, y_1: 0.85, x_2: 0.6375, y_2: 0.85, ident: 3, state: 1 },
    { x_1: 0.6375, y_1: 0.85, x_2: 0.675, y_2: 0.85, ident: 4, state: 1 },
    { x_1: 0.05, y_1: 0.6, x_2: 0.125, y_2: 0.6, ident: 5, state: 1 },
    { x_1: 0.325, y_1: 0.6, x_2: 0.3625, y_2: 0.6, ident: 6, state: 1 },
    { x_1: 0.3625, y_1: 0.6, x_2: 0.4, y_2: 0.6, ident: 7, state: 1 },
    { x_1: 0.6, y_1: 0.6, x_2: 0.6375, y_2: 0.6, ident: 8, state: 1 },
    { x_1: 0.6375, y_1: 0.6, x_2: 0.675, y_2: 0.6, ident: 9, state: 1 },
    { x_1: 0.875, y_1: 0.6, x_2: 0.95, y_2: 0.6, ident: 10, state: 1 },
    { x_1: 0.3625, y_1: 0.6, x_2: 0.3625, y_2: 0.85, ident: 17, state: 1 },
    { x_1: 0.6375, y_1: 0.6, x_2: 0.6375, y_2: 0.85, ident: 18, state: 1 }
];

var lines_3 = [
    { x_1: 0.325, y_1: 0.85, x_2: 0.3625, y_2: 0.85, ident: 0, state: 1 },
    { x_1: 0.3625, y_1: 0.85, x_2: 0.4, y_2: 0.85, ident: 1, state: 1 },
    { x_1: 0.6, y_1: 0.85, x_2: 0.6375, y_2: 0.85, ident: 2, state: 1 },
    { x_1: 0.6375, y_1: 0.85, x_2: 0.675, y_2: 0.85, ident: 3, state: 1 },
    //{ x_1: 0.05, y_1: 0.6, x_2: 0.125, y_2: 0.6, ident: 5, state: 1 },
    //{ x_1: 0.325, y_1: 0.6, x_2: 0.3625, y_2: 0.6, ident: 6, state: 1 },
    { x_1: 0.3625, y_1: 0.6, x_2: 0.4, y_2: 0.6, ident: 4, state: 1 },
    { x_1: 0.6, y_1: 0.6, x_2: 0.6375, y_2: 0.6, ident: 5, state: 1 },
    //{ x_1: 0.6375, y_1: 0.6, x_2: 0.675, y_2: 0.6, ident: 9, state: 1 },
    //{ x_1: 0.875, y_1: 0.6, x_2: 0.95, y_2: 0.6, ident: 10, state: 1 },
    //{ x_1: 0.05, y_1: 0.35, x_2: 0.125, y_2: 0.35, ident: 11, state: 1 },
    //{ x_1: 0.325, y_1: 0.35, x_2: 0.3625, y_2: 0.35, ident: 12, state: 1 },
    { x_1: 0.3625, y_1: 0.35, x_2: 0.4, y_2: 0.35, ident: 6, state: 1 },
    { x_1: 0.6, y_1: 0.35, x_2: 0.6375, y_2: 0.35, ident: 7, state: 1 },
    //{ x_1: 0.6375, y_1: 0.35, x_2: 0.675, y_2: 0.35, ident: 15, state: 1 },
    //{ x_1: 0.875, y_1: 0.35, x_2: 0.95, y_2: 0.35, ident: 16, state: 1 },
    { x_1: 0.3625, y_1: 0.6, x_2: 0.3625, y_2: 0.85, ident: 8, state: 1 },
    { x_1: 0.6375, y_1: 0.6, x_2: 0.6375, y_2: 0.85, ident: 9, state: 1 },
    { x_1: 0.3625, y_1: 0.35, x_2: 0.3625, y_2: 0.6, ident: 10, state: 1 },
    { x_1: 0.6375, y_1: 0.35, x_2: 0.6375, y_2: 0.6, ident: 11, state: 1 }
];

window.onresize = initialise();

parallels_1.oninput = function () {
    parallels_value = 1;
    showResults = false;
    onStop();
};
parallels_2.oninput = function () {
    parallels_value = 2;
    showResults = false;
    onStop();
};
parallels_3.oninput = function () {
    parallels_value = 3;
    showResults = false;
    onStop();
};

voltages.oninput = function () {
    voltmax = parseFloat(voltages.value);
    showResults = false;
    onStop();
};

function onPhysClick(){
    tech_value = true;
    tech.style.display = "inline";
    phys.style.display = "none";
};

function onTechClick(){
    tech_value = false;
    phys.style.display = "inline";
    tech.style.display = "none";
};

function onRBClick(){
    RB_value = true;
    BR.style.display = "inline";
    RB.style.display = "none";
};

function onBRClick(){
    RB_value = false;
    RB.style.display = "inline";
    BR.style.display = "none";
};

function onPosHigh(){
    PosHigh_value = false;
    NegHigh.style.display = "inline";
    PosHigh.style.display = "none";
};

function onNegHigh(){
    PosHigh_value = true;
    PosHigh.style.display = "inline";
    NegHigh.style.display = "none";
};

function onSlow(){
    slow_value = true;
    slow_button.style.display = "none";
    fast_button.style.display = "inline";
    onStop();
};

function onFast(){
    slow_value = false;
    slow_button.style.display = "inline";
    fast_button.style.display = "none";
    onStop();
};

function onNegPosClick(){
    ZeroPos_value = true;
    ZeroPos.style.display = "inline";
    NegPos.style.display = "none";
};

function onZeroPosClick(){
    ZeroPos_value = false;
    NegPos.style.display = "inline";
    ZeroPos.style.display = "none";
};

function drawBackground() {
    
    c.lineWidth = 3;
    c.setLineDash([]);
    c.strokeStyle = "black";
    //Draw Left Arm
    c.beginPath();
    c.moveTo(0.49 * x, 0.15 * y);
    c.lineTo(0.05 * x, 0.15 * y);
    c.lineTo(0.05 * x, 0.85 * y);
    c.lineTo(0.125 * x, 0.85 * y);
    c.stroke();
    c.closePath();

    //Draw Right Arm
    c.beginPath();
    c.moveTo(0.51 * x, 0.15 * y);
    c.lineTo(0.95 * x, 0.15 * y);
    c.lineTo(0.95 * x, 0.85 * y);
    c.lineTo(0.875 * x, 0.85 * y);
    c.stroke();
    c.closePath();

    //Draw Battery
    c.setLineDash([]);
    c.lineWidth = 2;
    c.beginPath();
    var plus_width = 0.008 * x;
    c.moveTo(0.525 * x, 0.115 * y + plus_width);
    c.lineTo(0.525 * x, 0.115 * y - plus_width);
    c.moveTo(0.525 * x + plus_width, 0.115 * y );
    c.lineTo(0.525 * x - plus_width, 0.115 * y );
    c.moveTo(0.475 * x + plus_width, 0.115 * y );
    c.lineTo(0.475 * x - plus_width, 0.115 * y );
    c.stroke();
    c.lineWidth = 3;
    c.beginPath();
    c.moveTo(0.51 * x, 0.1 * y);
    c.lineTo(0.51 * x, 0.2 * y);
    c.stroke();
    c.lineWidth = 8;
    c.beginPath();
    c.moveTo(0.49 * x, 0.125 * y);
    c.lineTo(0.49 * x, 0.175 * y);
    c.stroke();
    c.closePath();
    c.font = "30px Arial";
    c.fillStyle = "black";
    if(lang_str=="en"){
        c.fillText(volt_symb+"₀ = " + precise(voltmax) + " V", 0.42*x, 0.085 * y);
    }
    if(lang_str=="de"){
        var disp_volt = precise(voltmax);
        disp_volt = disp_volt.replace(".",",");
        c.fillText(volt_symb+"₀ = " + disp_volt + " V", 0.42*x, 0.085 * y);
    }
    if (parallels_value === 1) {
        //Draw centre connectors (Line 1 - Bottom)
        c.beginPath();
        c.lineWidth = 3;
        c.moveTo(0.325 * x, 0.85 * y);
        c.lineTo(0.4 * x, 0.85 * y);
        c.stroke();
        c.closePath();
        c.beginPath();
        c.moveTo(0.6 * x, 0.85 * y);
        c.lineTo(0.675 * x, 0.85 * y);
        c.stroke();
        c.closePath();
    }


    if (parallels_value === 2 ) {
        voltageWires_2 = [voltage[0], voltage[0], voltage[1], voltage[1], 0, voltage[2], voltage[2], voltage[3], voltage[3], voltmax, voltage[0], voltage[1]];
        // if(lines_2.state[4]==0){
        //     voltageWires_2[4]=voltageWires_2[5];
        // };
        for (var j = 0; j < lines_2.length; j++) {
            if (showResults && radio_button_colour) {
                c.beginPath();
                c.lineWidth = 30;
                c.strokeStyle = colourFromVoltage(voltageWires_2[j]);
                if (lines_2[j].state === 0) {
                    c.strokeStyle = "rgba(0,0,0,0)";
                };
                if (j == 4) {
                    c.moveTo(lines_2[j].x_1 * x + 10, lines_2[j].y_1 * y);
                    c.lineTo(lines_2[j].x_2 * x, lines_2[j].y_2 * y);
                    //window.alert("Left:"+lines_2[j].x_1*x);
                    //window.alert("Right:"+lines_2[j].x_2*x);
                }
                else if (j == 9) {
                    c.moveTo(lines_2[j].x_1 * x, lines_2[j].y_1 * y);
                    c.lineTo(lines_2[j].x_2 * x - 10, lines_2[j].y_2 * y);
                }
                else if (j == 10 || j == 11) {
                    c.moveTo(lines_2[j].x_1 * x, lines_2[j].y_1 * y + 10);
                    c.lineTo(lines_2[j].x_2 * x, lines_2[j].y_2 * y - 10);
                }
                else {
                    c.moveTo(lines_2[j].x_1 * x, lines_2[j].y_1 * y);
                    c.lineTo(lines_2[j].x_2 * x, lines_2[j].y_2 * y)
                };
                c.stroke();
                c.closePath();
            }
            c.beginPath();
            c.lineWidth = 3;
            c.strokeStyle = "black";
            if (lines_2[j].state === 0) {
                c.strokeStyle = "rgba(0,0,0,0)";
            }
            c.moveTo(lines_2[j].x_1 * x, lines_2[j].y_1 * y);
            c.lineTo(lines_2[j].x_2 * x, lines_2[j].y_2 * y);
            c.stroke();
            c.closePath();
        }
    };
    if (parallels_value === 3) {
        for (var j = 0; j < lines_3.length; j++) {
            voltageWires_3 = [voltage[0], voltage[0], voltage[1], voltage[1], voltage[2], voltage[3], voltage[4], voltage[5], voltage[0], voltage[1], voltage[2], voltage[3]];
            //if(j==12 || j==13 || j==18 || j==19){
                if (showResults && radio_button_colour) {
                    c.beginPath();
                    c.lineWidth = 30;
                    c.strokeStyle = colourFromVoltage(voltageWires_3[j]);
                    if (lines_3[j].state === 0) {
                        c.strokeStyle = "rgba(0,0,0,0)";
                    };
                    if (j == 8 || j == 9 || j == 10 || j == 11) {
                        c.moveTo(lines_3[j].x_1 * x, lines_3[j].y_1 * y + 10);
                        c.lineTo(lines_3[j].x_2 * x, lines_3[j].y_2 * y - 10);
                    }
                    else {
                        c.moveTo(lines_3[j].x_1 * x, lines_3[j].y_1 * y);
                        c.lineTo(lines_3[j].x_2 * x, lines_3[j].y_2 * y)
                    };
                    c.stroke();
                    c.closePath();
                }
            c.beginPath();
            c.lineWidth = 3;
            c.strokeStyle = "black";
            if (lines_3[j].state === 0) {
                c.strokeStyle = "rgba(0,0,0,0)";
            }
            c.moveTo(lines_3[j].x_1 * x, lines_3[j].y_1 * y);
            c.lineTo(lines_3[j].x_2 * x, lines_3[j].y_2 * y);
            c.stroke();
            c.closePath();
        //}
        }
    };

    if(slow_value==true){
        c.fillText(slow_text, 0.89*x, 0.95*y, 0.1*x, 0.05*y);
    }

};

function drawResults() {
    if (radio_button_colour) {
        arrowcolour = "rgba(0,255,0,0.7)";
        if(transformed) {
            /*c.transform(1 / 0.9, 0, 0, 1 / 0.9, -0.7 * x / 2, -0.2 * y);
            c.transform(0.707, -0.707, 1.22, 1.222, 0, 0);*/
            c.resetTransform();
            transformed = false;
        }
        c.lineWidth = 30;
        c.setLineDash([]);
        c.strokeStyle = colourFromVoltage(0);
        //Draw Left Arm
        c.beginPath();
        c.moveTo(0.49 * x, 0.15 * y);
        c.lineTo(0.05 * x, 0.15 * y);
        c.lineTo(0.05 * x, 0.85 * y);
        c.lineTo(0.125 * x, 0.85 * y);
        c.stroke();
        c.closePath();

        //Draw Right Arm
        c.strokeStyle = colourFromVoltage(voltmax);
        c.beginPath();
        c.moveTo(0.51 * x, 0.15 * y);
        c.lineTo(0.95 * x, 0.15 * y);
        c.lineTo(0.95 * x, 0.85 * y);
        c.lineTo(0.875 * x, 0.85 * y);
        c.stroke();
        c.closePath();


        if (parallels_value === 1) {
            //Draw centre connectors (Line 1 - Bottom)
            c.strokeStyle = colourFromVoltage(voltage[0]);
            c.beginPath();
            c.lineWidth = 30;
            c.moveTo(0.325 * x, 0.85 * y);
            c.lineTo(0.4 * x, 0.85 * y);
            c.stroke();
            c.closePath();
            c.strokeStyle = colourFromVoltage(voltage[1]);
            c.beginPath();
            c.moveTo(0.6 * x, 0.85 * y);
            c.lineTo(0.675 * x, 0.85 * y);
            c.stroke();
            c.closePath();
        }


        if (parallels_value === 2) {
            for (var j = 0; j < lines_2.length; j++) {
                c.beginPath();
                c.lineWidth = 3;
                c.strokeStyle = "black";
                if (lines_2[j].state === 0) {
                    c.strokeStyle = "rgba(0,0,0,0)";
                }
                c.moveTo(lines_2[j].x_1 * x, lines_2[j].y_1 * y);
                c.lineTo(lines_2[j].x_2 * x, lines_2[j].y_2 * y);
                c.stroke();
                c.closePath();
            }
        };
        if (parallels_value === 3) {
            for (var j = 0; j < lines_3.length; j++) {
                //if(j==12 || j==13 || j==18 || j==19){
                c.beginPath();
                c.lineWidth = 3;
                c.strokeStyle = "black";
                if (lines_3[j].state === 0) {
                    c.strokeStyle = "rgba(0,0,0,0)";
                }
                c.moveTo(lines_3[j].x_1 * x, lines_3[j].y_1 * y);
                c.lineTo(lines_3[j].x_2 * x, lines_3[j].y_2 * y);
                c.stroke();
                c.closePath();
            //}
            }
        };
    }
    if (radio_button_height) {
        arrowcolour = "rgba(255,0,0,0.7)";
        if(isNaN(t_1)){
            d_1=d_0;
            t_1=t_0;
        }
        if(t_1-t_0<1000){
        d_1 = new Date();
        t_1 = d_1.getTime();}
        if (!transformed) {
            c.resetTransform();
            x_squash = x/(0.707*(x+y));
            y_squash = (0.9*y)/(0.409*(x+y));
            if (x_squash>y_squash){
                squash_val=y_squash;
            }
            else{
                squash_val=x_squash;
            };
            if((t_1-t_0)<500){
                var m = (squash_val-1)/500;
                var scaling_factor = m*(t_1-t_0)+1;
                var prog = (t_1-t_0)/500;
                var m_a = (0.707-1)/500;
                var scaling_factor_a = m_a*(t_1-t_0)+1;
                var m_b = (0.409-1)/500;
                var scaling_factor_b = m_b*(t_1-t_0)+1;
                c.transform(scaling_factor, 0, 0, scaling_factor, 0, 0);
                c.save();
                c.resetTransform;
                c.restore;
                c.transform(scaling_factor_a, prog*0.409, -prog*0.707, scaling_factor_b, prog*0.707*y, prog*(y/squash_val-0.409*(x+y)));
                //c.save();
                //c.resetTransform;
                //c.restore; 
            }
            else{
            c.transform(squash_val, 0, 0, squash_val, 0, 0);
            c.save();
            c.resetTransform;
            c.restore;
            c.transform(0.707, 0.409, -0.707, 0.409, 0.707*y, (y/squash_val-0.409*(x+y)));
            c.save();
            c.resetTransform;
            c.restore;
            transformed = true;
            canvas_2.style.zIndex = 1;
            }
            
            //c.restore;
            //if(t_1-t_0>1000){transformed = true;}
            //transformed=true;
        }
    }
};

function coordAndHeight_x(x_coord, y_coord, voltage_coord){
    var A=0.707;
    var B=0.409;
    return (squash_val*A*y)+(A*squash_val*(x_coord-y_coord));
}

function coordAndHeight_y(x_coord, y_coord, voltage_coord){
    var A=0.707;
    var B=0.409;
    if(PosHigh_value == false && voltage_coord != -1){
        return squash_val*(y/squash_val-0.409*(x+y))+(B*squash_val*(x_coord+y_coord))-height(voltmax-voltage_coord);
    }else{
        return squash_val*(y/squash_val-0.409*(x+y))+(B*squash_val*(x_coord+y_coord))-height(voltage_coord);
    }
}

function height(voltage_coord){
    var max_height = 0.8*squash_val*(y/squash_val-0.409*(x+y));
    return (((t_1-t_0-500)/500)*(voltage_coord+1))*max_height/voltmax;
}

function drawWall(start_x, start_y, end_x, end_y, voltage_coord){
    c_2.fillStyle = "rgba(0,255,0,0.4)";
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(start_x*x, start_y*y, voltage_coord), coordAndHeight_y(start_x*x, start_y*y, voltage_coord));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, voltage_coord), coordAndHeight_y(end_x*x, end_y*y, voltage_coord));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, -1), coordAndHeight_y(end_x*x, end_y*y, -1));
    c_2.lineTo(coordAndHeight_x(start_x*x, start_y*y, -1), coordAndHeight_y(start_x*x, start_y*y, -1));
    c_2.fill();
    c_2.closePath();
}

function drawWallTrap(start_x, start_y, end_x, end_y, start_voltage_coord, end_voltage_coord){
    c_2.fillStyle = "rgba(0,255,0,0.4)";
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(start_x*x, start_y*y, start_voltage_coord), coordAndHeight_y(start_x*x, start_y*y, start_voltage_coord));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, end_voltage_coord), coordAndHeight_y(end_x*x, end_y*y, end_voltage_coord));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, -1), coordAndHeight_y(end_x*x, end_y*y, -1));
    c_2.lineTo(coordAndHeight_x(start_x*x, start_y*y, -1), coordAndHeight_y(start_x*x, start_y*y, -1));
    c_2.fill();
    c_2.closePath();
}

function drawHeightLine(start_x, start_y, end_x, end_y, voltage_coord){
    c_2.strokeStyle = "green";
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(start_x*x, start_y*y, voltage_coord), coordAndHeight_y(start_x*x, start_y*y, voltage_coord));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, voltage_coord), coordAndHeight_y(end_x*x, end_y*y, voltage_coord));
    c_2.stroke();
    c_2.closePath();
}

function drawHeightLineTrap(start_x, start_y, end_x, end_y, start_voltage_coord, end_voltage_coord){
    c_2.strokeStyle = "green";
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(start_x*x, start_y*y, start_voltage_coord), coordAndHeight_y(start_x*x, start_y*y, start_voltage_coord));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, end_voltage_coord), coordAndHeight_y(end_x*x, end_y*y, end_voltage_coord));
    c_2.stroke();
    c_2.closePath();
    c_2.stroke();
    if(end_voltage_coord != start_voltage_coord){
    c_2.setLineDash([5,15]);
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(start_x*x, start_y*y, -1), coordAndHeight_y(start_x*x, start_y*y, -1));
    c_2.lineTo(coordAndHeight_x(start_x*x, start_y*y, start_voltage_coord), coordAndHeight_y(start_x*x, start_y*y, start_voltage_coord));
    c_2.moveTo(coordAndHeight_x(end_x*x, end_y*y, -1), coordAndHeight_y(end_x*x, end_y*y, -1));
    c_2.lineTo(coordAndHeight_x(end_x*x, end_y*y, end_voltage_coord), coordAndHeight_y(end_x*x, end_y*y, end_voltage_coord));
    c_2.closePath();
    c_2.stroke();
    c_2.setLineDash([]);
    }
}

var rects = [
    { x: x * 0.125, y: 0.75 * y, w: x * 0.2, h: y * 0.2, ident: 1, state: 0 },
    { x: x * 0.4, y: 0.75 * y, w: x * 0.2, h: y * 0.2, ident: 2, state: 0 },
    { x: x * 0.675, y: 0.75 * y, w: x * 0.2, h: y * 0.2, ident: 3, state: 0 },
    { x: x * 0.125, y: 0.5 * y, w: x * 0.2, h: y * 0.2, ident: 4, state: 0 },
    { x: x * 0.4, y: 0.5 * y, w: x * 0.2, h: y * 0.2, ident: 5, state: 0 },
    { x: x * 0.675, y: 0.5 * y, w: x * 0.2, h: y * 0.2, ident: 6, state: 0 },
    { x: x * 0.125, y: 0.25 * y, w: x * 0.2, h: y * 0.2, ident: 7, state: 0 },
    { x: x * 0.4, y: 0.25 * y, w: x * 0.2, h: y * 0.2, ident: 8, state: 0 },
    { x: x * 0.675, y: 0.25 * y, w: x * 0.2, h: y * 0.2, ident: 9, state: 0 }// etc.
];

function drawHeightResult(){
    c_2.strokeStyle = "green";
    c_2.lineWidth = 3;
    drawWall(0.49,0.15,0.05,0.15, 0);
    drawWall(0.05,0.15, 0.05,0.85, 0);
    drawWall(0.05,0.85,0.125,0.85,0);
    drawWall(0.51,0.15,0.95,0.15, voltmax);
    drawWall(0.95,0.15,0.95,0.85, voltmax);
    drawWall(0.95,0.85,0.875,0.85,voltmax);

    if(parallels_value==2){
        for(var i = 0; i<lines_2.length; i++){
            if(lines_2[i].state==1){
                drawWall(lines_2[i].x_1, lines_2[i].y_1, lines_2[i].x_2, lines_2[i].y_2, voltageWires_2[i]);
            }
        }
    }else if(parallels_value==3){
        for(var i = 0; i<lines_3.length; i++){
            if(lines_3[i].state==1){
                drawWall(lines_3[i].x_1, lines_3[i].y_1, lines_3[i].x_2, lines_3[i].y_2, voltageWires_3[i]);
            }
        }
    }else{
        drawWall(0.325, 0.85,0.4,0.85,voltage[0]);
        drawWall(0.675, 0.85,0.6,0.85,voltage[1]);
    }
    
    if (parallels_value == 2) {
        if (lines_2[2].state == 0 && lines_2[7].state == 0) {
            voltageRef[5].left = voltageRef[5].right;
            voltageRef[2].left = voltageRef[2].right;
        }
        if (lines_2[0].state == 0) {
            voltageRef[0].right = 0;
        };
        if (lines_2[1].state == 0 && lines_2[2].state == 0) {
            voltageRef[1].left = NaN;
            voltageRef[1].right = NaN;
        };
        if (lines_2[1].state == 0) {
            voltageRef[1].left = voltageRef[1].right;
        }
        if (lines_2[2].state == 0) {
            voltageRef[1].right = voltageRef[1].left;
        }
        if (lines_2[3].state == 0) {
            voltageRef[2].left = voltageRef[2].right;
        }
        if (lines_2[4].state == 0 && lines_2[5].state == 0) {
            voltageRef[3].left = NaN;
            voltageRef[3].right = NaN;
        };
        if (lines_2[4].state == 0 && lines_2[5].state == 1) {
            voltageRef[3].left = voltageRef[3].right;
        };
        if (lines_2[4].state == 1 && lines_2[5].state == 0) {
            voltageRef[3].right = 0;
        };
        if (lines_2[6].state == 0 && lines_2[7].state == 0) {
            voltageRef[4].left = NaN;
            voltageRef[4].right = NaN;
        };
        if (lines_2[6].state == 0) {
            voltageRef[4].left = voltageRef[4].right;
        }
        if (lines_2[7].state == 0) {
            voltageRef[4].right = voltageRef[4].left;
        }
        if (lines_2[8].state == 0 && lines_2[9].state == 0) {
            voltageRef[5].left = NaN;
            voltageRef[5].right = NaN;
        };
        if (lines_2[8].state == 0 && lines_2[9].state == 1) {
            voltageRef[5].left = voltageRef[5].right;
        };
        if (lines_2[9].state == 0) {
            voltageRef[5].right = voltageRef[5].left;
        };
    }
    if (parallels_value === 3) {
        //window.alert("Trigger 1");
        if (lines_3[0].state == 0) {
            voltageRef[0].right = voltageRef[0].left;
        }
        if (lines_3[1].state == 0 && lines_3[2].state != 0) {
            voltageRef[1].left = voltageRef[1].right;
        }
        if (lines_3[1].state != 0 && lines_3[2].state == 0){
            voltageRef[1].right = voltageRef[1].left;
        }
        if (lines_3[1].state == 0 && lines_3[2].state == 0) {
            voltageRef[1].right = NaN;
            voltageRef[1].left = NaN;
        }
        if (lines_3[3].state == 0) {
            voltageRef[2].left = voltageRef[2].right;
        }
        if (lines_3[4].state == 0 && lines_3[5].state != 0) {
            voltageRef[4].left = voltageRef[4].right;
        }
        if (lines_3[4].state != 0 && lines_3[5].state == 0){
            voltageRef[4].right = voltageRef[4].left;
        }
        if (lines_3[4].state == 0 && lines_3[5].state == 0) {
            voltageRef[4].right = NaN;
            voltageRef[4].left = NaN;
        }
        if (lines_3[6].state == 0 && lines_3[7].state != 0) {
            voltageRef[7].left = voltageRef[7].right;
        }
        if (lines_3[6].state != 0 && lines_3[7].state == 0){
            voltageRef[7].right = voltageRef[7].left;
        }
        if (lines_3[6].state == 0 && lines_3[7].state == 0) {
            voltageRef[7].right = NaN;
            voltageRef[7].left = NaN;
        }
    }
    if(parallels_value==2 || parallels_value==3){

    }else{
        parallels_value=1;
    }
    for (i = 0; i < parallels_value * 3; i++) {
        if((parallels_value === 3) && (i==3 || i==5|| i==6 || i==8)){
        }
        else{
            if(rects[i].state==0){
                drawWallTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==1){
                drawWallTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==2){
                drawWallTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==3){
                //drawWallTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
                //drawHeightLineTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);

            }
            if(rects[i].state==4 || rects[i].state==5 || rects[i].state==6 ){
                drawWallTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + 0.25*rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].left);
                drawWallTrap((rects[i].x + 0.25*rects[i].w)/x, ((rects[i].y / y) + 0.1) , (rects[i].x + 0.75*rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
                drawWallTrap((rects[i].x + 0.75*rects[i].w)/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].right,voltageRef[i].right);
            }
        }
    }
    for (i = 0; i < parallels_value * 3; i++) {
        if((parallels_value === 3) && (i==3 || i==5|| i==6 || i==8)){
        }
        else{
            if(rects[i].state==0){
                drawHeightLineTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==1){
                drawHeightLineTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==2){
                drawHeightLineTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==3){
                //drawWallTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
                //drawHeightLineTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
            }
            if(rects[i].state==4 || rects[i].state==5 || rects[i].state==6 ){
                drawHeightLineTrap(rects[i].x/x, ((rects[i].y / y) + 0.1) , (rects[i].x + 0.25*rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].left);
                drawHeightLineTrap((rects[i].x + 0.25*rects[i].w)/x, ((rects[i].y / y) + 0.1) , (rects[i].x + 0.75*rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].left,voltageRef[i].right);
                drawHeightLineTrap((rects[i].x + 0.75*rects[i].w)/x, ((rects[i].y / y) + 0.1) , (rects[i].x + rects[i].w)/x, ((rects[i].y / y) + 0.1), voltageRef[i].right,voltageRef[i].right);
            }
            
        }

    }
    if(parallels_value==2){
        for(var i = 0; i<lines_2.length; i++){
            if(lines_2[i].state==1){
                drawHeightLine(lines_2[i].x_1, lines_2[i].y_1, lines_2[i].x_2, lines_2[i].y_2, voltageWires_2[i]);
            }
        }
    }else if(parallels_value==3){
        for(var i = 0; i<lines_3.length; i++){
            if(lines_3[i].state==1){
                drawHeightLine(lines_3[i].x_1, lines_3[i].y_1, lines_3[i].x_2, lines_3[i].y_2, voltageWires_3[i]);
            }
        }
    }else{
        drawHeightLine(0.325, 0.85,0.4,0.85,voltage[0]);
        drawHeightLine(0.675, 0.85,0.6,0.85,voltage[1]);
    }
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(0.49*x, 0.15*y, 0), coordAndHeight_y(0.49*x, 0.15*y, 0));
    c_2.lineTo(coordAndHeight_x(0.05*x, 0.15*y, 0), coordAndHeight_y(0.05*x, 0.15*y, 0));
    c_2.lineTo(coordAndHeight_x(0.05*x, 0.85*y, 0), coordAndHeight_y(0.05*x, 0.85*y, 0));
    c_2.lineTo(coordAndHeight_x(0.125*x, 0.85*y, 0), coordAndHeight_y(0.125*x, 0.85*y, 0));
    c_2.stroke();
    c_2.closePath();
    c_2.beginPath();
    c_2.moveTo(coordAndHeight_x(0.51*x, 0.15*y, voltmax), coordAndHeight_y(0.51*x, 0.15*y, voltmax));
    c_2.lineTo(coordAndHeight_x(0.95*x, 0.15*y, voltmax), coordAndHeight_y(0.95*x, 0.15*y, voltmax));
    c_2.lineTo(coordAndHeight_x(0.95*x, 0.85*y, voltmax), coordAndHeight_y(0.95*x, 0.85*y, voltmax));
    c_2.lineTo(coordAndHeight_x(0.875*x, 0.85*y, voltmax), coordAndHeight_y(0.875*x, 0.85*y, voltmax));
    c_2.stroke();
    c_2.closePath();
};

function colourFromVoltage(voltage) {
    var percVolt=voltage/voltmax;
    if(!RB_value){
        percVolt= 1 -percVolt;
    }
    if (percVolt >= 0.5) {
        var red = 100 * (1.5 - percVolt);
        red = red.toPrecision(3);
        if(slow_value == true){
            d_slow = new Date();
            t_slow = d_slow.getTime();
            if(voltage==voltmax){
                return "hsl(360, 100%, " + red + "%)";
            }
            else if(voltage == voltmax/2){
                return "hsl(360, 100%, " + red + "%)";
            }
            else if(t_slow-t_0<5000){
                red=red/100;
                red = 100*(red-(0.5-red)*Math.exp(-(t_slow-t_0)/1000));
                red = red.toPrecision(3);
                return "hsl(360, 100%, " + red + "%)";
            }
            else{return "hsl(360, 100%, " + red + "%)";}
        }
        else{return "hsl(360, 100%, " + red + "%)";}
    }
    if (percVolt < 0.5) {
        var blue = 100 * (0.5 + percVolt);
        blue = blue.toPrecision(3);
        if(slow_value == true){
            d_slow = new Date();
            t_slow = d_slow.getTime();
            if(voltage==0){
                return "hsl(240, 100%, " + blue + "%)";
            }
            else if(t_slow-t_0<5000){
                blue=blue/100;
                blue = 100*(blue-(0.5-blue)*Math.exp(-(t_slow-t_0)/1000));
                blue = blue.toPrecision(3);
                return "hsl(240, 100%, " + blue + "%)";
            }
            else{return "hsl(240, 100%, " + blue + "%)";}
        }
        else{return "hsl(240, 100%, " + blue + "%)";}
    }
    else {
        return "orange";
    }
};

var i = 0;

function drawBoxes() {
    rects[0].x = x * 0.125;
    rects[0].y = 0.75 * y;
    rects[0].w = x * 0.2;
    rects[0].h = y * 0.2;
    rects[1].x = x * 0.4;
    rects[1].y = 0.75 * y;
    rects[1].w = x * 0.2;
    rects[1].h = y * 0.2;
    rects[2].x = x * 0.675;
    rects[2].y = 0.75 * y;
    rects[2].w = x * 0.2;
    rects[2].h = y * 0.2;
    rects[3].x = x * 0.125;
    rects[3].y = 0.5 * y;
    rects[3].w = x * 0.2;
    rects[3].h = y * 0.2;
    rects[4].x = x * 0.4;
    rects[4].y = 0.5 * y;
    rects[4].w = x * 0.2;
    rects[4].h = y * 0.2;
    rects[5].x = x * 0.675;
    rects[5].y = 0.5 * y;
    rects[5].w = x * 0.2;
    rects[5].h = y * 0.2;
    rects[6].x = x * 0.125;
    rects[6].y = 0.25 * y;
    rects[6].w = x * 0.2;
    rects[6].h = y * 0.2;
    rects[7].x = x * 0.4;
    rects[7].y = 0.25 * y;
    rects[7].w = x * 0.2;
    rects[7].h = y * 0.2;
    rects[8].x = x * 0.675;
    rects[8].y = 0.25 * y;
    rects[8].w = x * 0.2;
    rects[8].h = y * 0.2;

    voltageRef = [
        { left: 0, right: voltage[0] },
        { left: voltage[0], right: voltage[1] },
        { left: voltage[1], right: voltmax },
        { left: 0, right: voltage[2] },
        { left: voltage[2], right: voltage[3] },
        { left: voltage[3], right: voltmax },
        { left: 0, right: voltage[4] },
        { left: voltage[4], right: voltage[5] },
        { left: voltage[5], right: voltmax }
    ];
    if (parallels_value === 2) {
        if (lines_2[2].state == 0 && lines_2[7].state == 0) {
            voltageRef[5].left = voltageRef[5].right;
            voltageRef[2].left = voltageRef[2].right;
        }

        if (lines_2[0].state == 0) {
            voltageRef[0].right = 0;
        };
        if (lines_2[1].state == 0 && lines_2[2].state == 0) {
            voltageRef[1].left = NaN;
            voltageRef[1].right = NaN;
        };
        if (lines_2[1].state == 0) {
            voltageRef[1].left = voltageRef[1].right;
        }
        if (lines_2[2].state == 0) {
            voltageRef[1].right = voltageRef[1].left;
        }
        if (lines_2[3].state == 0) {
            voltageRef[2].left = voltageRef[2].right;
        }

        if (lines_2[4].state == 0 && lines_2[5].state == 0) {
            voltageRef[3].left = NaN;
            voltageRef[3].right = NaN;
        };
        if (lines_2[4].state == 0 && lines_2[5].state == 1) {
            voltageRef[3].left = voltageRef[3].right;
        };
        if (lines_2[4].state == 1 && lines_2[5].state == 0) {
            voltageRef[3].right = 0;
        };

        if (lines_2[6].state == 0 && lines_2[7].state == 0) {
            voltageRef[4].left = NaN;
            voltageRef[4].right = NaN;
        };
        if (lines_2[6].state == 0) {
            voltageRef[4].left = voltageRef[4].right;
        }
        if (lines_2[7].state == 0) {
            voltageRef[4].right = voltageRef[4].left;
        }
        if (lines_2[8].state == 0 && lines_2[9].state == 0) {
            voltageRef[5].left = NaN;
            voltageRef[5].right = NaN;
        };
        if (lines_2[8].state == 0 && lines_2[9].state == 1) {
            voltageRef[5].left = voltageRef[5].right;
        };
        if (lines_2[9].state == 0) {
            voltageRef[5].right = voltageRef[5].left;
        };
    }
    if (parallels_value === 3) {
        //window.alert("Trigger 1");
        if (lines_3[0].state == 0) {
            voltageRef[0].right = voltageRef[0].left;
        }
        if (lines_3[1].state == 0 && lines_3[2].state != 0) {
            voltageRef[1].left = voltageRef[1].right;
        }
        if (lines_3[1].state != 0 && lines_3[2].state == 0){
            voltageRef[1].right = voltageRef[1].left;
        }
        if (lines_3[1].state == 0 && lines_3[2].state == 0) {
            voltageRef[1].right = NaN;
            voltageRef[1].left = NaN;
        }
        if (lines_3[3].state == 0) {
            voltageRef[2].left = voltageRef[2].right;
        }
        if (lines_3[4].state == 0 && lines_3[5].state != 0) {
            voltageRef[4].left = voltageRef[4].right;
        }
        if (lines_3[4].state != 0 && lines_3[5].state == 0){
            voltageRef[4].right = voltageRef[4].left;
        }
        if (lines_3[4].state == 0 && lines_3[5].state == 0) {
            voltageRef[4].right = NaN;
            voltageRef[4].left = NaN;
        }
        if (lines_3[6].state == 0 && lines_3[7].state != 0) {
            voltageRef[7].left = voltageRef[7].right;
        }
        if (lines_3[6].state != 0 && lines_3[7].state == 0){
            voltageRef[7].right = voltageRef[7].left;
        }
        if (lines_3[6].state == 0 && lines_3[7].state == 0) {
            voltageRef[7].right = NaN;
            voltageRef[7].left = NaN;
        }
    }


    for (i = 0; i < parallels_value * 3; i++) {
        if((parallels_value === 3) && (i==3 || i==5|| i==6 || i==8)){

        }
        else{
        c.beginPath();
        c.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
        c.lineWidth = 3;
        c.setLineDash([5, 10]);
        c.strokeStyle = "lightblue";
        c.stroke();
        c.closePath();
        if (rects[i].state == 0) {
            if (showResults && radio_button_colour) {
                c.strokeStyle = colourFromVoltage(voltageRef[i].right);
                c.lineWidth = 30;
                c.setLineDash([]);
                c.beginPath();
                c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
            };
            c.strokeStyle = "black";
            c.lineWidth = 3;
            c.setLineDash([]);
            c.beginPath();
            c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.stroke();
            c.closePath();
        };
        if (rects[i].state == 1) {
            rects[i].state = 3;
            c.strokeStyle = "black";
            c.setLineDash([]);
            c.beginPath();
            c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + .25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + .75 * rects[i].w, ((rects[i].y / y) + 0.06) * y);
            c.moveTo(rects[i].x + .75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.stroke();
            c.closePath();
        };
        if (rects[i].state == 2) {
            var radius = rects[i].h * 0.35;
            var diag_offset = Math.sqrt(0.5 * radius * radius);
            if (showResults && radio_button_colour) {
                c.strokeStyle = colourFromVoltage(voltageRef[i].left);
                c.setLineDash([]);
                c.lineWidth = 30;
                c.beginPath();
                c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();

                c.strokeStyle = colourFromVoltage(voltageRef[i].right);
                c.beginPath();
                c.moveTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
            };
            c.strokeStyle = "black";
            c.lineWidth = 3;
            c.setLineDash([]);
            c.beginPath();
            c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.arc(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y, radius, 0, 2 * Math.PI, false);
            c.fillStyle = "yellow";
            c.fill();
            c.stroke();
            c.closePath();
            c.beginPath();
            c.moveTo(rects[i].x + rects[i].w * 0.5 - diag_offset, rects[i].y + rects[i].h * 0.5 + diag_offset);
            c.lineTo(rects[i].x + rects[i].w * 0.5 + diag_offset, rects[i].y + rects[i].h * 0.5 - diag_offset);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.moveTo(rects[i].x + rects[i].w * 0.5 - diag_offset, rects[i].y + rects[i].h * 0.5 - diag_offset);
            c.lineTo(rects[i].x + rects[i].w * 0.5 + diag_offset, rects[i].y + rects[i].h * 0.5 + diag_offset);
            c.stroke();
            c.closePath();
        };
        if (rects[i].state == 3) {
            if (showResults) {
            c.font = "30px Arial";
                c.fillStyle = "black";
                var V_d = Math.round(((voltageRef[i].right - voltageRef[i].left))*100)/100;
                if(!isNaN(V_d)){
                if(lang_str=="de"){
                    V_d = precise(V_d);
                    V_d = V_d.replace('.', ',');
                    c.fillText(volt_symb + toSub(i+1) +" = "+V_d + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);                
                }
                else{
                c.fillText(volt_symb + toSub(i+1) +" = "+precise(V_d) + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                }
            }
        }
        }
        if (rects[i].state == 4) {
            var radius = rects[i].h * 0.35;
            var diag_offset = Math.sqrt(0.5 * radius * radius);
            if (showResults) {
                if(radio_button_colour){
                    c.strokeStyle = colourFromVoltage(voltageRef[i].left);
                    c.setLineDash([]);
                    c.lineWidth = 30;
                    c.beginPath();
                    c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
                    c.lineTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                    c.stroke();
                    c.closePath();

                    c.strokeStyle = colourFromVoltage(voltageRef[i].right);
                    c.beginPath();
                    c.moveTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                    c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
                    c.stroke();
                    c.closePath();}
                c.font = "30px Arial";
                c.fillStyle = "black";
                var V_d = Math.round(((voltageRef[i].right - voltageRef[i].left))*100)/100;
                var I = Math.round(((voltageRef[i].right - voltageRef[i].left)/50.0)*1000)/1000;
                
                if(!isNaN(V_d)){

                if(lang_str=="de"){
                    V_d = precise(V_d);
                    V_d = V_d.replace('.', ',');
                    I_disp = precise(I);
                    I_disp = I_disp.replace('.', ',');
                    c.fillText(volt_symb + toSub(i+1) + " = "+V_d + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                    c.fillText("I" + toSub(i+1) + " = "+I_disp + " A", rects[i].x + 0.17 * rects[i].w, ((rects[i].y / y) + 0.04) * y);
                
                }
                else{
                c.fillText(volt_symb + toSub(i+1) + " = "+precise(V_d) + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                c.fillText("I" + toSub(i+1) + " = "+precise(I) + " A", rects[i].x + 0.17 * rects[i].w, ((rects[i].y / y) + 0.04) * y);
                }
            }
            };
            c.strokeStyle = "black";
            c.lineWidth = 3;
            c.setLineDash([]);
            c.beginPath();
            c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.rect(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.075) * y, rects[i].w/2, rects[i].h/4);
            c.fillStyle = "grey";
            c.fill();
            c.stroke();
            c.closePath();
            c.fillStyle = "black";
            c.font = "30px Arial";
            c.fillText("50 Ω", rects[i].x + 0.35 * rects[i].w, ((rects[i].y / y) + 0.11) * y);
            if(showResults && I != 0 && !isNaN(I) && tech_value){
                c.strokeStyle = arrowcolour;
            c.setLineDash([]);
                c.lineWidth = 120*I;
                c.beginPath();
                c.moveTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.lineTo(rects[i].x + 0.45 * rects[i].w, ((rects[i].y / y) + 0.15) * y);
                c.lineTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.45 * rects[i].w, ((rects[i].y / y) + 0.05) * y);
                c.stroke();
                c.closePath();
            }
            if(showResults && I != 0 && !isNaN(I) && !tech_value){
                c.strokeStyle = arrowcolour;
            c.setLineDash([]);
                c.lineWidth = 120*I;
                c.beginPath();
                c.moveTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.lineTo(rects[i].x + 0.55 * rects[i].w, ((rects[i].y / y) + 0.15) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.55 * rects[i].w, ((rects[i].y / y) + 0.05) * y);
                c.stroke();
                c.closePath();
            }
        };
        if (rects[i].state == 5) {
            var radius = rects[i].h * 0.35;
            var diag_offset = Math.sqrt(0.5 * radius * radius);
            if (showResults) {
                if(radio_button_colour)
                {c.strokeStyle = colourFromVoltage(voltageRef[i].left);
                c.setLineDash([]);
                c.lineWidth = 30;
                c.beginPath();
                c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();

                c.strokeStyle = colourFromVoltage(voltageRef[i].right);
                c.beginPath();
                c.moveTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();}

                c.font = "30px Arial";
                c.fillStyle = "black";
                var V_d = Math.round(((voltageRef[i].right - voltageRef[i].left))*100)/100;
                var I = Math.round(((voltageRef[i].right - voltageRef[i].left)/100.0)*1000)/1000;
                if(!isNaN(V_d)){
                if(lang_str=="de"){
                    V_d = precise(V_d);
                    V_d = V_d.replace('.', ',');
                    I_disp = precise(I);
                    I_disp = I_disp.replace('.', ',');
                    c.fillText(volt_symb+ toSub(1+i)  + " = "+V_d + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                    c.fillText("I" + toSub(i+1) + " = "+I_disp + " A", rects[i].x + 0.17 * rects[i].w, ((rects[i].y / y) + 0.04) * y);
                }else{
                c.fillText(volt_symb+ toSub(1+i)  + " = "+precise(V_d) + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                c.fillText("I" + toSub(i+1) + " = "+precise(I) + " A", rects[i].x + 0.17 * rects[i].w, ((rects[i].y / y) + 0.04) * y);
                }
            }
            };
            c.strokeStyle = "black";
            c.lineWidth = 3;
            c.setLineDash([]);
            c.beginPath();
            c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.rect(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.075) * y, rects[i].w/2, rects[i].h/4);
            c.fillStyle = "grey";
            c.fill();
            c.stroke();
            c.closePath();
            c.fillStyle = "black";
            c.font = "30px Arial";
            c.fillText("100 Ω", rects[i].x + 0.3 * rects[i].w, ((rects[i].y / y) + 0.11) * y);
            if(showResults && I != 0 && !isNaN(I) && tech_value){
                c.strokeStyle = arrowcolour;
            c.setLineDash([]);
                c.lineWidth = 120*I;
                c.beginPath();
                c.moveTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.lineTo(rects[i].x + 0.45 * rects[i].w, ((rects[i].y / y) + 0.15) * y);
                c.lineTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.45 * rects[i].w, ((rects[i].y / y) + 0.05) * y);
                c.stroke();
                c.closePath();
            }
            if(showResults && I != 0 && !isNaN(I) && !tech_value){
                c.strokeStyle = arrowcolour;
            c.setLineDash([]);
                c.lineWidth = 120*I;
                c.beginPath();
                c.moveTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.lineTo(rects[i].x + 0.55 * rects[i].w, ((rects[i].y / y) + 0.15) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.55 * rects[i].w, ((rects[i].y / y) + 0.05) * y);
                c.stroke();
                c.closePath();
            }
        };
        if (rects[i].state == 6) {
            var radius = rects[i].h * 0.35;
            var diag_offset = Math.sqrt(0.5 * radius * radius);
            if (showResults) {
                if(radio_button_colour){
                c.strokeStyle = colourFromVoltage(voltageRef[i].left);
                c.setLineDash([]);
                c.lineWidth = 30;
                c.beginPath();
                c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();

                c.strokeStyle = colourFromVoltage(voltageRef[i].right);
                c.beginPath();
                c.moveTo(rects[i].x + 0.5 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                }
                c.font = "30px Arial";
                c.fillStyle = "black";
                var V_d = Math.round(((voltageRef[i].right - voltageRef[i].left))*100)/100;
                var I = Math.round(((voltageRef[i].right - voltageRef[i].left)/150.0)*1000)/1000;
                var I_unrounded = (voltageRef[i].right - voltageRef[i].left)/150.0;
                if(!isNaN(V_d)){
                if(lang_str=="de"){
                    V_d = precise(V_d);
                    V_d = V_d.replace('.', ',');
                    I_disp = precise(I);
                    I_disp = I_disp.replace('.', ',');
                    c.fillText(volt_symb+ toSub(i+1) + " = "+V_d + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                    c.fillText("I" + toSub(i+1) + " = "+I_disp + " A", rects[i].x + 0.17 * rects[i].w, ((rects[i].y / y) + 0.04) * y);
                }else{
                c.fillText(volt_symb+ toSub(i+1) + " = "+precise(V_d) + " V", rects[i].x + 0.05 * rects[i].w, ((rects[i].y / y) + 0.18) * y);
                c.fillText("I" + toSub(i+1) + " = "+precise(I) + " A", rects[i].x + 0.17 * rects[i].w, ((rects[i].y / y) + 0.04) * y);
                }
            }
            };
            c.strokeStyle = "black";
            c.lineWidth = 3;
            c.setLineDash([]);
            c.beginPath();
            c.moveTo(rects[i].x, ((rects[i].y / y) + 0.1) * y);
            c.lineTo(rects[i].x + rects[i].w, ((rects[i].y / y) + 0.1) * y);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.rect(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.075) * y, rects[i].w/2, rects[i].h/4);
            c.fillStyle = "grey";
            c.fill();
            c.stroke();
            c.closePath();
            c.fillStyle = "black";
            c.font = "30px Arial";
            c.fillText("150 Ω", rects[i].x + 0.3 * rects[i].w, ((rects[i].y / y) + 0.11) * y);
            if(showResults && I != 0 && !isNaN(I) && tech_value){
                c.strokeStyle = arrowcolour;
            c.setLineDash([]);
                c.lineWidth = 120*I;
                c.beginPath();
                c.moveTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.lineTo(rects[i].x + 0.45 * rects[i].w, ((rects[i].y / y) + 0.15) * y);
                c.lineTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.45 * rects[i].w, ((rects[i].y / y) + 0.05) * y);
                c.stroke();
                c.closePath();
            }
            if(showResults && I != 0 && !isNaN(I) && !tech_value){
                c.strokeStyle = arrowcolour;
            c.setLineDash([]);
                c.lineWidth = 120*I;
                c.beginPath();
                c.moveTo(rects[i].x + 0.25 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.stroke();
                c.closePath();
                c.beginPath();
                c.lineTo(rects[i].x + 0.55 * rects[i].w, ((rects[i].y / y) + 0.15) * y);
                c.lineTo(rects[i].x + 0.75 * rects[i].w, ((rects[i].y / y) + 0.1) * y);
                c.lineTo(rects[i].x + 0.55 * rects[i].w, ((rects[i].y / y) + 0.05) * y);
                c.stroke();
                c.closePath();
            }
        };
    }
    }

};

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c_2.clearRect(0,0,x,y);
    c.fillStyle = "#E8E8E8";
    c.fillRect(0, 0, canvas.width, canvas.height);
    var radio_button_colour_old = radio_button_colour;
    radio_button_colour = document.getElementById("SimTypeColour").checked;
    radio_button_height = document.getElementById("SimTypeHeight").checked;

    if(radio_button_colour!=radio_button_colour_old){
        showResults=false;
    }

    if (showResults) {
        drawResults();
    };

    drawBackground();
    //c.fillText(t_0,x/2,y/2);
    //c.fillText(t_1,x/2,y/2+30);
    i = 0;
    drawBoxes();

    if(radio_button_height){drawHeightResult()};

    I_tot=voltmax/totalResistance;

    if(isNaN(I_tot)){
        I_tot=0;
    }
    

    if(showResults && I_tot != 0){

        //window.alert(I_tot);
        //window.alert(totalResistance);
        if(ZeroPos_value){
            if(lang_str=="en"){
                var legend_left = "0 V";
                var legend_right = voltmax.toString() +" V";
            }
            if(lang_str=="de"){
                var legend_left = "0 V";
                var disp_volt = voltmax.toString();
                disp_volt =disp_volt.replace(".",",");
                var legend_right = disp_volt +" V";
            }
        }
        if(!ZeroPos_value){
            if(lang_str=="en"){
                var legend_right = (voltmax/2).toString() +" V";
                var legend_left = "-"+legend_right;
            }
            if(lang_str=="de"){
                var disp_volt = (voltmax/2).toString();
                disp_volt =disp_volt.replace(".",",");
                var legend_right = disp_volt +" V";
                var legend_left = "-"+legend_right;
            }
        };
        if(tech_value){
        c.strokeStyle = arrowcolour;
        c.setLineDash([]);
        c.lineWidth = 120*I_tot;
        c.beginPath();
        c.moveTo(0.65*x, 0.15*y);
        c.lineTo(0.75*x, 0.15*y);
        c.stroke();
        c.closePath();
        c.beginPath();
        c.lineTo(0.7*x, 0.1 * y);
        c.lineTo(0.75*x, 0.15 * y);
        c.lineTo(0.7*x, 0.2 * y);
        c.stroke();
        c.closePath();
        // Create gradient
        if(radio_button_colour){
        var grd = c.createLinearGradient(0.1*x,0,0.35*x,0);
        grd.addColorStop(0,colourFromVoltage(0));
        grd.addColorStop(0.5,"white");
        grd.addColorStop(1,colourFromVoltage(voltmax));
        c.fillText(legend_left, 0.08*x, 0.045 * y);
        c.fillText(legend_right, 0.32*x, 0.045 * y);
        // Fill with gradient
        c.fillStyle = grd;
        c.fillRect(0.1*x,0.05*y,0.25*x,0.05*y);}}

        if(!tech_value){
            c.strokeStyle = arrowcolour;
            c.setLineDash([]);
            c.setLineDash([]);
            c.lineWidth = 120*I_tot;
            c.beginPath();
            c.moveTo(0.35*x, 0.15*y);
            c.lineTo(0.25*x, 0.15*y);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.lineTo(0.3*x, 0.1 * y);
            c.lineTo(0.25*x, 0.15 * y);
            c.lineTo(0.3*x, 0.2 * y);
            c.stroke();
            c.closePath();
            if(radio_button_colour){
            // Create gradient
            var grd = c.createLinearGradient(0.65*x,0,0.9*x,0);
            grd.addColorStop(0,colourFromVoltage(0));
            grd.addColorStop(0.5,"white");
            grd.addColorStop(1,colourFromVoltage(voltmax));
            c.fillText(legend_left, 0.62*x, 0.045 * y);
            c.fillText(legend_right, 0.87*x, 0.045 * y);
            // Fill with gradient
            c.fillStyle = grd;
            c.fillRect(0.65*x,0.05*y,0.25*x,0.05*y);}
        }

        I_tot=I_tot*1000;
        I_tot=Math.round(I_tot);
        I_tot=I_tot/1000;

        c.font = "30px Arial";
        c.fillStyle = "black";
        if(lang_str=="de"){
            I_tot_disp =  precise(I_tot);
            I_tot_disp =  I_tot_disp.replace(".",",");
        }else{
            I_tot_disp =  precise(I_tot);
        }
        if(tech_value){
        c.fillText("I₀" + " = " + I_tot_disp + " A", 0.65*x, 0.05 * y);
        }
        else{
            c.fillText("I₀" + " = " + I_tot_disp + " A", 0.2*x, 0.05 * y);
        }
    }
};

animate();


// listen for mousedown events

function initialise() {
    c.canvas.width = window.innerWidth;
    c.canvas.height = window.innerHeight - 150;
    c_2.canvas.width = window.innerWidth;
    c_2.canvas.height = window.innerHeight - 150;
    showResults = false;
    transformed = false;
    x = canvas.width;
    y = canvas.height;  
    var canvas_event = document.getElementById("canvas");
    canvas_event.addEventListener("mousedown", doMouseDown, false);
    var start_event = document.getElementById("startAnimation");
    start_event.addEventListener("click", makeResults, false);
    var stop_event = document.getElementById("stopAnimation");
    stop_event.addEventListener("click", onStop, false);
    canvas_2.style.zIndex = -1;
    lang_str = lang.options[lang.selectedIndex].value;
    lang_str = lang_str.substring(11,13);
    console.log(lang_str);
};

function onStop(){
    if(transformed){
        c.resetTransform();
        transformed=false;
    }
    showResults = false;
    canvas_2.style.zIndex = -1;
};

function doMouseDown(e) {
    showResults = false;
    e.preventDefault();
    var rect_client = canvas.getBoundingClientRect();
    var clickX = e.clientX - rect_client.left;
    const clickY = e.clientY - rect_client.top;
    //iterate each shape in the shapes array
    for (var i = 0; i < parallels_value * 3; i++) {
        // test if the mouse is in the current shape
        if (((clickX > rects[i].x) && (clickX < (rects[i].x + rects[i].w))) && ((clickY > rects[i].y) && (clickY < (rects[i].y + rects[i].h)))) {
            // if inside, increment state of box
            rects[i].state++;
            if (rects[i].state > 6) {
                rects[i].state = 0;
            }
        }
    }
    if (parallels_value === 2) {
        for (var k = 0; k < lines_2.length; k++) {
            var acc = 5;
            // test if the mouse is in the current shape
            if (((clickX > (lines_2[k].x_1 * x) - acc) && (clickX < (lines_2[k].x_2 * x) + acc)) && ((clickY > (lines_2[k].y_1 * y) - acc) && (clickY < (lines_2[k].y_2 * y) + acc))) {
                // if inside, display the shape's id
                lines_2[k].state++;
                if (lines_2[k].state > 1) {
                    lines_2[k].state = 0;
                }
            }
        }
    }
    if (parallels_value === 3) {
        for (var k = 0; k < lines_3.length; k++) {
            var acc = 5;
            // test if the mouse is in the current shape
            if (((clickX > (lines_3[k].x_1 * x) - acc) && (clickX < (lines_3[k].x_2 * x) + acc)) && ((clickY > (lines_3[k].y_1 * y) - acc) && (clickY < (lines_3[k].y_2 * y) + acc))) {
                // if inside, incerement state
                lines_3[k].state++;
                if (lines_3[k].state > 1) {
                    lines_3[k].state = 0;
                }
            }
        }
    }
};

function makeResults(e) {
    d_0 = new Date();
    t_0 = d_0.getTime();
    showResults = true;
    //generate voltage matrix

    if (parallels_value === 1) {
        var resistances = [0, 0, 0];
        var noOpen = 0;
        for (i = 0; i < 3; i++) {
            if (rects[i].state == 2) {
                resistances[i] = 1;
            }
            if (rects[i].state == 0) {
                resistances[i] = 0;
            }
            if (rects[i].state == 3) {
                resistances[i] = NaN;
            }
            if (rects[i].state == 4) {
                resistances[i] = 50;
            }
            if (rects[i].state == 5) {
                resistances[i] = 100;
            }
            if (rects[i].state == 6) {
                resistances[i] = 150;
            }
        }
        for (i = 0; i < 3; i++) {
            if (isNaN(resistances[i])) {
                noOpen += 1;
            };
        };
        //window.alert(resistances);
        //window.alert(noOpen);
        if (noOpen > 0) {
            if (noOpen == 1) {
                if (isNaN(resistances[0])) {
                    voltage[0] = voltmax;
                    voltage[1] = voltmax;
                };
                if (isNaN(resistances[1])) {
                    voltage[0] = 0;
                    voltage[1] = voltmax;
                };
                if (isNaN(resistances[2])) {
                    voltage[0] = 0;
                    voltage[1] = 0;
                };
                //window.alert("One Open");
                //window.alert(voltages);
            };
            if (noOpen == 2) {
                if (isNaN(resistances[0]) && isNaN(resistances[1])) {
                    voltage[0] = NaN;
                    voltage[1] = voltmax;
                };
                if (isNaN(resistances[0]) && isNaN(resistances[2])) {
                    voltage[0] = NaN;
                    voltage[1] = NaN;
                };
                if (isNaN(resistances[1]) && isNaN(resistances[2])) {
                    voltage[0] = 0;
                    voltage[1] = NaN;
                };
                //window.alert("Two Open");
            };
            if (noOpen == 3) {
                voltage[0] = NaN;
                voltage[1] = NaN;
                //window.alert("Three Open");
            };
        }
        else if (noOpen == 0) {
            var sumResistance = resistances.reduce((a, b) => a + b, 0);
            if (sumResistance == 0) {
                window.alert(warning);
                showResults = false;
            }
            else{
                voltage[1] = voltmax *(1-(resistances[2]/sumResistance));
                voltage[0] = voltmax *(1-((resistances[1]+resistances[2])/sumResistance));
            }
        }
        //window.alert(voltage);
        totalResistance =  resistances[0]+resistances[1]+resistances[2];
    };

    if (parallels_value == 2) {
        var resistances = [0, 0, 0, 0, 0, 0];
        var net = new Array(12);

        for (i = 0; i < 12; i++) {
            net[i] = lines_2[i].state;
        };

        //window.alert("Net: " + net.toString());

        //Assign Resistance R0
        if (net[0] == 0 || rects[0].state == 3) {
            resistances[0] = NaN;
        }
        else if (net[0] == 1 && rects[0].state == 2) {
            resistances[0] = 1;
        }
        else if (net[0] == 1 && rects[0].state == 4) {
            resistances[0] = 50;
        }
        else if (net[0] == 1 && rects[0].state == 5) {
            resistances[0] = 100;
        }
        else if (net[0] == 1 && rects[0].state == 6) {
            resistances[0] = 150;
        };
        if (net[1] == 0 || net[2] == 0 || rects[1].state == 3) {
            resistances[1] = NaN;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 2) {
            resistances[1] = 1;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 4) {
            resistances[1] = 50;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 5) {
            resistances[1] = 100;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 6) {
            resistances[1] = 150;
        };
        if (net[3] == 0 || rects[2].state == 3) {
            resistances[2] = NaN;
        }
        else if (net[3] == 1 && rects[2].state == 2) {
            resistances[2] = 1;
        }
        else if (net[3] == 1 && rects[2].state == 4) {
            resistances[2] = 50;
        }
        else if (net[3] == 1 && rects[2].state == 5) {
            resistances[2] = 100;
        }
        else if (net[3] == 1 && rects[2].state == 6) {
            resistances[2] = 150;
        };
        if (net[4] == 0 || net[5] == 0 || rects[3].state == 3) {
            resistances[3] = NaN;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[3].state == 2) {
            resistances[3] = 1;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[3].state == 4) {
            resistances[3] = 50;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[3].state == 5) {
            resistances[3] = 100;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[3].state == 6) {
            resistances[3] = 150;
        };
        if (net[6] == 0 || net[7] == 0 || rects[4].state == 3) {
            resistances[4] = NaN;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[4].state == 2) {
            resistances[4] = 1;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[4].state == 4) {
            resistances[4] = 50;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[4].state == 5) {
            resistances[4] = 100;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[4].state == 6) {
            resistances[4] = 150;
        };
        if (net[8] == 0 || net[9] == 0 || rects[5].state == 3) {
            resistances[5] = NaN;
        }
        else if (net[8] == 1 && net[9] == 1 && rects[5].state == 2) {
            resistances[5] = 1;
        }
        else if (net[8] == 1 && net[9] == 1 && rects[5].state == 4) {
            resistances[5] = 50;
        }
        else if (net[8] == 1 && net[9] == 1 && rects[5].state == 5) {
            resistances[5] = 100;
        }
        else if (net[8] == 1 && net[9] == 1 && rects[5].state == 6) {
            resistances[5] = 150;
        };

        //Purely two parallel

        if (net[10] == 0 && net[11] == 0) {
            var para1open = 0;
            var para2open = 0;
            //window.alert("Resistances: " + resistances);
            if (resistances[0] + resistances[1] + resistances[2] == 0 || resistances[3] + resistances[4] + resistances[5] == 0) {
                window.alert("Short Circuit");
                showResults = false;
            };
            for (i = 0; i < 3; i++) {
                if (isNaN(resistances[i])) {
                    para1open += 1;
                };
                if (isNaN(resistances[i + 3])) {
                    para2open += 1;
                };
            };
            if (para1open == 1) {
                if (isNaN(resistances[0])) {
                    voltage[0] = voltmax;
                    voltage[1] = voltmax;
                };
                if (isNaN(resistances[1])) {
                    voltage[0] = 0;
                    voltage[1] = voltmax;
                };
                if (isNaN(resistances[2])) {
                    voltage[0] = 0;
                    voltage[1] = 0;
                };
            };
            if (para1open == 2) {
                if (isNaN(resistances[0]) && isNaN(resistances[1])) {
                    voltage[0] = NaN;
                    voltage[1] = voltmax;
                };
                if (isNaN(resistances[0]) && isNaN(resistances[2])) {
                    voltage[0] = NaN;
                    voltage[1] = NaN;
                };
                if (isNaN(resistances[1]) && isNaN(resistances[2])) {
                    voltage[0] = 0;
                    voltage[1] = NaN;
                };
            };
            if (para1open == 3) {
                voltage[0] = NaN;
                voltage[1] = NaN;
            };
            if (para2open == 1) {
                if (isNaN(resistances[3])) {
                    voltage[2] = voltmax;
                    voltage[3] = voltmax;
                };
                if (isNaN(resistances[4])) {
                    voltage[2] = 0;
                    voltage[3] = voltmax;
                };
                if (isNaN(resistances[5])) {
                    voltage[2] = 0;
                    voltage[3] = 0;
                };
            };
            if (para2open == 2) {
                if (isNaN(resistances[3]) && isNaN(resistances[4])) {
                    voltage[2] = NaN;
                    voltage[3] = voltmax;
                };
                if (isNaN(resistances[3]) && isNaN(resistances[5])) {
                    voltage[2] = NaN;
                    voltage[3] = NaN;
                };
                if (isNaN(resistances[4]) && isNaN(resistances[5])) {
                    voltage[2] = 0;
                    voltage[3] = NaN;
                };
            };
            if (para2open == 3) {
                voltage[2] = NaN;
                voltage[3] = NaN;
            };
            var totResistance_1 = resistances[0] + resistances[1] + resistances[2];
            var totResistance_2 = resistances[3] + resistances[4] + resistances[5];
            if (para1open == 0) {
                voltage[1] = voltmax*(1 - (resistances[2] / totResistance_1));
                voltage[0] = voltmax*(1 - ((resistances[1]+resistances[2]) / totResistance_1));
            }
            if (para2open == 0) {
                voltage[3] = voltmax*(1 - (resistances[5] / totResistance_2));
                voltage[2] = voltmax*(1 - ((resistances[4]+resistances[5]) / totResistance_2));
            }
            if(para1open == 0 && para2open==0){
                totalResistance = 1/(1/totResistance_1 + 1/totResistance_2);
            }
            else if(para1open != 0 && para2open==0){
                totalResistance = totResistance_2;
            }
            else if(para1open == 0 && para2open!=0){
                totalResistance = totResistance_1;
            }
            //window.alert("Voltages: " + voltage);

        } //both cross bars on
        if (net[10] == 1 && net[11] == 1) {
            var resistancesParallel = [0, 0, 0];
            //window.alert(resistances);
            var para1short = false;
            var para2short = false;
            var para3short = false;
            if (resistances[5] == 0 || resistances[2] == 0) {
                para3short = true;
            };
            if ((resistances[4] == 0) || (resistances[1] == 0)) {
                para2short = true;
            };
            if ((resistances[3] == 0) || (resistances[0] == 0)) {
                para1short = true;
            };
            if (para1short && para2short && para3short) {
                window.alert("Short Circuit");
                showResults = false;
            };
            //window.alert("Resistances: " + resistances.toString());
            //window.alert(isNaN(resistances[0]));
            var sumParas = 0;
            for (i = 0; i < 3; i++) {
                if (resistances[i] == 0 || resistances[i + 3] == 0) {
                    resistancesParallel[i] = 0;
                }
                else if (isNaN(resistances[i]) && isNaN(resistances[i + 3])) {
                    resistancesParallel[i] = NaN;
                }
                else if (isNaN(resistances[i]) || isNaN(resistances[i + 3])) {
                    if (resistances[i] != 0 && resistances[i + 3] != 0) {
                        if(isNaN(resistances[i])){
                            resistancesParallel[i]=resistances[i+3];
                        };
                        if(isNaN(resistances[i+3])){
                            resistancesParallel[i]=resistances[i];
                        };
                    }
                    else if (resistances[i] == 0 || resistances[i + 3] == 0) {
                        resistancesParallel[i] = 0;
                    };
                }
                else if ((!isNaN(resistances[i]) || resistances[i] != 0) && (!isNaN(resistances[i+3]) || resistances[i+3] != 0)) {
                    resistancesParallel[i] = 1/((1/resistances[i])+(1/resistances[i+3]));
                }
                else {
                    window.alert("Case Not Considered.");
                };
                sumParas += resistancesParallel[i];
            };
            //window.alert(resistancesParallel);
            if (isNaN(resistancesParallel[0]) && isNaN(resistancesParallel[1]) && isNaN(resistancesParallel[2])) {
                voltage[0] = NaN;
                voltage[1] = NaN;
                voltage[2] = NaN;
                voltage[3] = NaN;
            }
            else if (isNaN(resistancesParallel[0]) && isNaN(resistancesParallel[2])) {
                voltage[0] = NaN;
                voltage[1] = NaN;
                voltage[2] = NaN;
                voltage[3] = NaN;
            }
            else if (isNaN(resistancesParallel[1]) && isNaN(resistancesParallel[2])) {
                voltage[0] = 0;
                voltage[1] = 0;
                voltage[2] = NaN;
                voltage[3] = NaN;
            }
            else if (isNaN(resistancesParallel[0]) && isNaN(resistancesParallel[1])) {
                voltage[0] = NaN;
                voltage[1] = NaN;
                voltage[2] = voltmax;
                voltage[3] = voltmax;
            }
            else if (isNaN(resistancesParallel[0])) {
                voltage[0] = voltmax;
                voltage[1] = voltmax;
                voltage[2] = voltmax;
                voltage[3] = voltmax;
            }
            else if (isNaN(resistancesParallel[1])) {
                voltage[0] = 0;
                voltage[1] = voltmax;
                voltage[2] = 0;
                voltage[3] = voltmax;
            }
            else if (isNaN(resistancesParallel[2])) {
                voltage[0] = 0;
                voltage[1] = 0;
                voltage[2] = 0;
                voltage[3] = 0;
            }
            else {
                voltage[0] = voltmax*(resistancesParallel[0] / sumParas);
                voltage[1] = voltmax*((resistancesParallel[0] + resistancesParallel[1]) / sumParas);
                voltage[2] = voltage[0];
                voltage[3] = voltage[1];
            }

            totalResistance=sumParas;
        };
        if (net[10] == 1 && net[11] == 0) {
            var paraRes;
            paraRes = 1 / (1 / resistances[0] + 1 / resistances[3]);
            totalResistance = paraRes + 1 / (1 / (resistances[4] + resistances[5]) + 1 / (resistances[1] + resistances[2]));
            //window.alert(totalResistance);
            //window.alert("Resistances: " + resistances);
            if ((resistances[0] == 0 || resistances[3] == 0) && ((resistances[1] == 0 && resistances[2] == 0) || (resistances[4] == 0 && resistances[5] == 0))) {
                window.alert(warning);
                showResults = false;
            };

            if (!isNaN(totalResistance)) {
                paraRes = 1 / (1 / resistances[0] + 1 / resistances[3]);
                totalResistance = paraRes + 1 / (1 / (resistances[4] + resistances[5]) + 1 / (resistances[1] + resistances[2]));
                //window.alert("Normal Loop");
                voltage[0] = voltmax * paraRes / totalResistance;
                voltage[1] = voltage[0] + (resistances[1] / (resistances[1] + resistances[2])) * (voltmax  - voltage[0]);
                voltage[2] = voltage[0];
                voltage[3] = voltage[0] + (resistances[4] / (resistances[4] + resistances[5])) * (voltmax - voltage[0]);
                if (resistances[1] == 0 && resistances[2] == 0) {
                    voltage[0] = voltmax;
                    voltage[2] = voltmax;
                    voltage[1] = voltmax;
                    voltage[3] = voltage[0] + (resistances[4] / (resistances[4] + resistances[5])) * (1 - voltage[0]);
                }
                else if (resistances[4] == 0 && resistances[5] == 0) {
                    voltage[0] = voltmax;
                    voltage[2] = voltmax;
                    voltage[1] = voltage[0] + (resistances[1] / (resistances[1] + resistances[2])) * (1 - voltage[0]);
                    voltage[3] = voltmax;
                }
            }
            else if (isNaN(resistances[0]) && !isNaN(resistances[3])) {
                paraRes = resistances[3];
                totalResistance = paraRes + 1 / (1 / (resistances[4] + resistances[5]) + 1 / (resistances[1] + resistances[2]));
                voltage[0] = voltmax*(paraRes / totalResistance);
                voltage[1] = voltage[0] + (((resistances[1] / (resistances[1] + resistances[2]))) * (voltmax - voltage[0]));
                voltage[2] = voltage[0];
                voltage[3] = voltage[0] + ((resistances[4] / (resistances[4] + resistances[5])) * (voltmax - voltage[0]));
                //window.alert("Case 2");
                if (isNaN(resistances[1]) || isNaN(resistances[2])) {
                    totalResistance = paraRes + resistances[4] + resistances[5];
                    voltage[0] = voltmax * paraRes / totalResistance;
                    voltage[2] = voltage[0];
                    voltage[3] = voltage[0] + (resistances[4] / (resistances[4] + resistances[5])) * (voltmax - voltage[0]);
                    if (resistances[4] == 0 && resistances[5] == 0) {
                        voltage[3] = voltmax;
                    }
                    if (isNaN(resistances[1]) && isNaN(resistances[2])) {
                        voltage[1] = NaN;
                    }
                    else if (isNaN(resistances[1])) {
                        voltage[1] = voltmax;
                    }
                    else {
                        voltage[1] = voltage[0];
                    }
                }
                if (isNaN(resistances[4]) || isNaN(resistances[5])) {
                    totalResistance = paraRes + resistances[1] + resistances[2];
                    voltage[0] = voltmax*paraRes / totalResistance;
                    voltage[1] = voltage[0] + (resistances[1] / (resistances[1] + resistances[2])) * (voltmax - voltage[0]);
                    voltage[2] = voltage[0];
                    if (isNaN(resistances[4]) && isNaN(resistances[5])) {
                        voltage[3] = NaN;
                    }
                    else if (isNaN(resistances[4])) {
                        voltage[3] = voltmax;
                    }
                    else {
                        voltage[3] = voltage[2];
                    }

                }
                if ((resistances[1] == 0 && resistances[2] == 0) || (resistances[5] == 0 && resistances[4] == 0)) {
                    voltage[1] = voltmax;
                    voltage[0] = voltmax;
                    voltage[2] = voltmax;
                    voltage[3] = voltmax;
                }
            }
            else if (isNaN(resistances[3]) && !isNaN(resistances[0])) {
                paraRes = resistances[0];
                totalResistance = paraRes + 1 / (1 / (resistances[4] + resistances[5]) + 1 / (resistances[1] + resistances[2]));
                voltage[0] = voltmax * paraRes / totalResistance;
                voltage[1] = voltage[0] + (resistances[1] / (resistances[1] + resistances[2])) * (voltmax - voltage[0]);
                voltage[2] = voltage[0];
                voltage[3] = voltage[0] + (resistances[4] / (resistances[4] + resistances[5])) * (voltmax - voltage[0]);
                //window.alert("Case 2");
                if (isNaN(resistances[1]) || isNaN(resistances[2])) {
                    totalResistance = paraRes + resistances[4] + resistances[5];
                    voltage[0] = voltmax * paraRes / totalResistance;
                    voltage[2] = voltage[0];
                    voltage[3] = voltage[0] + (resistances[4] / (resistances[4] + resistances[5])) * (voltmax - voltage[0]);
                    if (resistances[4] == 0 && resistances[5] == 0) {
                        voltage[3] = voltmax;
                    }
                    if (isNaN(resistances[1]) && isNaN(resistances[2])) {
                        voltage[1] = NaN;
                    }
                    else if (isNaN(resistances[1])) {
                        voltage[1] = voltmax;
                    }
                    else {
                        voltage[1] = voltage[0];
                    }
                }
                if (isNaN(resistances[4]) || isNaN(resistances[5])) {
                    totalResistance = paraRes + resistances[1] + resistances[2];
                    voltage[0] = voltmax * paraRes / totalResistance;
                    voltage[1] = voltage[0] + (resistances[1] / (resistances[1] + resistances[2])) * (voltmax - voltage[0]);
                    voltage[2] = voltage[0];
                    if (isNaN(resistances[4]) && isNaN(resistances[5])) {
                        voltage[3] = NaN;
                    }
                    else if (isNaN(resistances[4])) {
                        voltage[3] = voltmax;
                    }
                    else {
                        voltage[3] = voltage[2];
                    }

                }
                if ((resistances[1] == 0 && resistances[2] == 0) || (resistances[5] == 0 && resistances[4] == 0)) {
                    voltage[1] = voltmax;
                    voltage[0] = voltmax;
                    voltage[2] = voltmax;
                    voltage[3] = voltmax;
                }
            }
            else if (isNaN(resistances[3]) && isNaN(resistances[0])) {
                voltage[0] = voltmax;
                voltage[1] = voltmax;
                voltage[2] = voltmax;
                voltage[3] = voltmax;
                //window.alert("Case 3");
            }
            else if (!isNaN(resistances[3]) && !isNaN(resistances[0])) {
                paraRes = 1 / (1 / resistances[0] + 1 / resistances[3]);
                if (resistances[0] == 0 || resistances[3] == 0) {
                    paraRes = 0;
                }

                if (isNaN(resistances[1]) || isNaN(resistances[2])) {
                    totalResistance = paraRes + resistances[4] + resistances[5];
                    voltage[0] = voltmax * paraRes / totalResistance;
                    voltage[2] = voltage[0];
                    voltage[3] = voltage[0] + (resistances[4] / (resistances[4] + resistances[5])) * (voltmax - voltage[0]);
                    if (isNaN(resistances[1]) && isNaN(resistances[2])) {
                        voltage[1] = NaN;
                    }
                    else if (isNaN(resistances[1])) {
                        voltage[1] = voltmax;
                    }
                    else {
                        voltage[1] = voltage[0];
                    }
                }
                if (isNaN(resistances[4]) || isNaN(resistances[5])) {
                    totalResistance = paraRes + resistances[1] + resistances[2];
                    voltage[0] = voltmax * paraRes / totalResistance;
                    voltage[1] = voltage[0] + (resistances[1] / (resistances[1] + resistances[2])) * (voltmax - voltage[0]);
                    voltage[2] = voltage[0];
                    if (isNaN(resistances[4]) && isNaN(resistances[5])) {
                        voltage[3] = NaN;
                    }
                    else if (isNaN(resistances[4])) {
                        voltage[3] = voltmax;
                    }
                    else {
                        voltage[3] = voltage[2];
                    }

                }
            }
            else {
                window.alert("Case not considered or Open Circuit");
            }


            if ((isNaN(resistances[1]) || isNaN(resistances[2])) && (isNaN(resistances[4]) || isNaN(resistances[5]))) {
                voltage[0] = 0;
                voltage[2] = 0;
                if (isNaN(resistances[1]) && isNaN(resistances[2])) {
                    voltage[1] = NaN;
                }
                else if (isNaN(resistances[1])) {
                    voltage[1] = voltmax;
                }
                else {
                    voltage[1] = 0;
                }
                if (isNaN(resistances[4]) && isNaN(resistances[5])) {
                    voltage[3] = NaN;
                }
                else if (isNaN(resistances[4])) {
                    voltage[3] = voltmax;
                }
                else {
                    voltage[3] = 0;
                }
            }

        };
        if (net[10] == 0 && net[11] == 1) {
            var paraRes;
            //window.alert(resistances);
            paraRes = 1 / (1 / resistances[2] + 1 / resistances[5]);
            res_para_bot = (resistances[0] + resistances[1]);
            res_para_top = (resistances[3] + resistances[4]);
            if(!isNaN(res_para_bot) && !isNaN(res_para_top)){
            totalResistance = paraRes + 1 / ((1 / res_para_bot) + (1 / res_para_top));
            }
            if(isNaN(res_para_bot) && !isNaN(res_para_top)){
                totalResistance = paraRes +  res_para_top;
            }
            if(!isNaN(res_para_bot) && isNaN(res_para_top)){
                totalResistance = paraRes + res_para_bot;
            }

            if ((resistances[2] == 0 || resistances[5] == 0) && ((resistances[0] == 0 && resistances[1] == 0) || (resistances[3] == 0 && resistances[4] == 0))) {
                window.alert("Short Circuit");
                showResults = false;
            };

            if (!isNaN(totalResistance)) {
                voltage[1] = voltmax * (1 - paraRes / totalResistance);
                voltage[3] = voltage[1];
                voltage[0] = voltage[1] * (1 - (resistances[1] / (resistances[1] + resistances[0])));
                voltage[2] = voltage[3] * (1 - (resistances[4] / (resistances[3] + resistances[4])));
                if (resistances[0] == 0 && resistances[1] == 0) {
                    voltage[0] = 0;
                    voltage[3] = 0;
                    voltage[1] = 0;
                    voltage[2] = 0;
                }
                else if (resistances[4] == 0 && resistances[3] == 0) {
                    voltage[0] = 0;
                    voltage[2] = 0;
                    voltage[1] = 0;
                    voltage[3] = 0;
                }
            }
            else if (isNaN(resistances[2]) && !isNaN(resistances[5])) {
                paraRes = resistances[5];
                totalResistance = paraRes + 1 / (1 / (resistances[0] + resistances[1]) + 1 / (resistances[3] + resistances[4]));
                voltage[1] = voltmax * (1 - paraRes / totalResistance);
                voltage[3] = voltage[1];
                voltage[0] = voltage[1] * (1 - (resistances[1] / (resistances[1] + resistances[0])));
                voltage[2] = voltage[3] * (1 - (resistances[4] / (resistances[3] + resistances[4])));
                //window.alert("Case 1");
                if (isNaN(resistances[0]) || isNaN(resistances[1])) {
                    totalResistance = paraRes + resistances[3] + resistances[4];
                    voltage[1] = voltmax * (1 - paraRes / totalResistance);
                    voltage[3] = voltage[1];
                    voltage[2] = voltage[3] * (1 - (resistances[4] / (resistances[3] + resistances[4])));
                    if (isNaN(resistances[0]) && isNaN(resistances[1])) {
                        voltage[0] = NaN;
                    }
                    else if (isNaN(resistances[1])) {
                        voltage[0] = 0;
                    }
                    else {
                        voltage[0] = voltage[1];
                    }
                }
                if (isNaN(resistances[3]) || isNaN(resistances[4])) {
                    totalResistance = paraRes + resistances[0] + resistances[1];
                    voltage[1] = voltmax * (1 - paraRes / totalResistance);
                    voltage[3] = voltage[1];
                    voltage[0] = voltage[1] * (1 - (resistances[1] / (resistances[1] + resistances[0])));
                    if (isNaN(resistances[3]) && isNaN(resistances[4])) {
                        voltage[2] = NaN;
                    }
                    else if (isNaN(resistances[4])) {
                        voltage[2] = 0;
                    }
                    else {
                        voltage[2] = voltage[3];
                    }

                }
                if((resistances[0]==0 && resistances[1]==0)||(resistances[3]==0 && resistances[4]==0)){
                    voltage[0] = 0;
                    voltage[1] = 0;
                    voltage[2] = 0;
                    voltage[3] = 0;
                }

            }
            else if (isNaN(resistances[5]) && !isNaN(resistances[2])) {
                paraRes = resistances[2];
                totalResistance = paraRes + 1 / (1 / (resistances[0] + resistances[1]) + 1 / (resistances[3] + resistances[4]));
                voltage[1] = voltmax * (1 - paraRes / totalResistance);
                voltage[3] = voltage[1];
                voltage[0] = voltage[1] * (1 - (resistances[1] / (resistances[1] + resistances[0])));
                voltage[2] = voltage[3] * (1 - (resistances[4] / (resistances[3] + resistances[4])));
                //window.alert("Case 1");
                if (isNaN(resistances[0]) || isNaN(resistances[1])) {
                    totalResistance = paraRes + resistances[3] + resistances[4];
                    voltage[1] = voltmax * (1 - paraRes / totalResistance);
                    voltage[3] = voltage[1];
                    voltage[2] = voltage[3] * (1 - (resistances[4] / (resistances[3] + resistances[4])));
                    if (isNaN(resistances[0]) && isNaN(resistances[1])) {
                        voltage[0] = NaN;
                    }
                    else if (isNaN(resistances[1])) {
                        voltage[0] = 0;
                    }
                    else {
                        voltage[0] = voltage[1];
                    }
                }
                if (isNaN(resistances[3]) || isNaN(resistances[4])) {
                    totalResistance = paraRes + resistances[0] + resistances[1];
                    voltage[1] = voltmax * (1 - paraRes / totalResistance);
                    voltage[3] = voltage[1];
                    voltage[0] = voltage[1] * (1 - (resistances[1] / (resistances[1] + resistances[0])));
                    if (isNaN(resistances[3]) && isNaN(resistances[4])) {
                        voltage[2] = NaN;
                    }
                    else if (isNaN(resistances[4])) {
                        voltage[2] = 0;
                    }
                    else {
                        voltage[2] = voltage[3];
                    }

                }
                if ((resistances[0] == 0 && resistances[1] == 0) || (resistances[3] == 0 && resistances[4] == 0)) {
                    voltage[0] = 0;
                    voltage[1] = 0;
                    voltage[2] = 0;
                    voltage[3] = 0;
                }
            }
            else if (isNaN(resistances[2]) && isNaN(resistances[5])) {
                voltage[0] = 0;
                voltage[1] = 0;
                voltage[2] = 0;
                voltage[3] = 0;
                //window.alert("Case 3");
            }
            else if (!isNaN(resistances[5]) && !isNaN(resistances[2])) {
                paraRes = 1 / ((1/ resistances[5]) + (1 / resistances[2]));
                if (resistances[2] == 0 || resistances[5] == 0) {
                    paraRes = 0;
                }

                if (isNaN(resistances[1]) || isNaN(resistances[0])) {
                    totalResistance = paraRes + resistances[3] + resistances[4];
                    voltage[1] = voltmax*(1-(paraRes / totalResistance));
                    voltage[3] = voltage[1];
                    voltage[2] = voltage[1]*(resistances[3]/(resistances[3]+resistances[4]));
                    if (isNaN(resistances[0]) && isNaN(resistances[1])) {
                        voltage[0] = NaN;
                    }
                    else if (isNaN(resistances[1])) {
                        voltage[0] = 0;
                    }
                    else {
                        voltage[0] = voltage[1];
                    }
                }
                if (isNaN(resistances[4]) || isNaN(resistances[3])) {
                    totalResistance = paraRes + resistances[0] + resistances[1];
                    voltage[1] = voltmax*(1- (paraRes / totalResistance));
                    voltage[3] = voltage[1];
                    voltage[0] = voltage[1]*(resistances[0]/(resistances[1]+resistances[0]));
                    if (isNaN(resistances[3]) && isNaN(resistances[4])) {
                        voltage[2] = NaN;
                    }
                    else if (isNaN(resistances[4])) {
                        voltage[2] = 0;
                    }
                    else {
                        voltage[2] = voltage[3];
                    }

                }
            }
            else {
                window.alert("Case not considered or Open Circuit");
            }

            if ((isNaN(resistances[0]) || isNaN(resistances[1])) && (isNaN(resistances[3]) || isNaN(resistances[4]))) {
                voltage[1] = voltmax;
                voltage[3] = voltmax;
                if (isNaN(resistances[0]) && isNaN(resistances[1])) {
                    voltage[0] = NaN;
                }
                else if (isNaN(resistances[1])) {
                    voltage[0] = 0;
                }
                else {
                    voltage[0] = voltmax;
                }
                if (isNaN(resistances[3]) && isNaN(resistances[4])) {
                    voltage[2] = NaN;
                }
                else if (isNaN(resistances[4])) {
                    voltage[2] = 0;
                }
                else {
                    voltage[2] = voltmax;
                }
            }
        };
    };

    if (parallels_value == 3) {
        var resistances = [0, 0, 0, 0, 0];
        var net = new Array(lines_3.length);
        var paraRes = 0;

        for (i = 0; i < lines_3.length; i++) {
            net[i] = lines_3[i].state;
        };

        //window.alert("Net: " + net.toString());

        //Assign Resistance R0
        if (net[0] == 0 || rects[0].state == 3) {
            resistances[0] = NaN;
        }
        else if (net[0] == 1 && rects[0].state == 2) {
            resistances[0] = 1;
        }
        else if (net[0] == 1 && rects[0].state == 4) {
            resistances[0] = 50;
        }
        else if (net[0] == 1 && rects[0].state == 5) {
            resistances[0] = 100;
        }
        else if (net[0] == 1 && rects[0].state == 6) {
            resistances[0] = 150;
        };
        if (net[1] == 0 || net[2] == 0 || rects[1].state == 3) {
            resistances[1] = NaN;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 2) {
            resistances[1] = 1;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 4) {
            resistances[1] = 50;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 5) {
            resistances[1] = 100;
        }
        else if (net[1] == 1 && net[2] == 1 && rects[1].state == 6) {
            resistances[1] = 150;
        };
        if (net[3] == 0 || rects[2].state == 3) {
            resistances[2] = NaN;
        }
        else if (net[3] == 1 && rects[2].state == 2) {
            resistances[2] = 1;
        }
        else if (net[3] == 1 && rects[2].state == 4) {
            resistances[2] = 50;
        }
        else if (net[3] == 1 && rects[2].state == 5) {
            resistances[2] = 100;
        }
        else if (net[3] == 1 && rects[2].state == 6) {
            resistances[2] = 150;
        };

        if (net[4] == 0 || net[5] == 0 || rects[4].state == 3) {
            resistances[3] = NaN;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[4].state == 2) {
            resistances[3] = 1;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[4].state == 4) {
            resistances[3] = 50;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[4].state == 5) {
            resistances[3] = 100;
        }
        else if (net[4] == 1 && net[5] == 1 && rects[4].state == 6) {
            resistances[3] = 150;
        };
        if (net[6] == 0 || net[7] == 0 || rects[7].state == 3) {
            resistances[4] = NaN;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[7].state == 2) {
            resistances[4] = 1;
        }     
        else if (net[6] == 1 && net[7] == 1 && rects[7].state == 4) {
            resistances[4] = 50;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[7].state == 5) {
            resistances[4] = 100;
        }
        else if (net[6] == 1 && net[7] == 1 && rects[7].state == 6) {
            resistances[4] = 150;
        }; 
        
        var one_paraRes = 0;
        var paraRes = 0;

        console.log(resistances);
        

        if(resistances[1]==0 || (net[8]==1 && net[9]==1 && resistances[3]==0)|| (net[8]==1 && net[9]==1 && net[10]==1 && net[11]==1 && resistances[4]==0)){
            paraRes = 0;
        }
        else if((isNaN(resistances[1]) && isNaN(resistances[3])) && isNaN(resistances[4])){
            paraRes = NaN;
            if(isNaN(resistances[0]) && !isNaN(resistances[2])){
                voltage[0] = NaN;
                voltage[1] = voltmax;
                voltage[2] = NaN;
                voltage[3] = voltmax;
                voltage[4] = NaN;
                voltage[5] = voltmax;
            }
            if(!isNaN(resistances[0]) && isNaN(resistances[2])){
                voltage[0] = 0;
                voltage[1] = NaN;
                voltage[2] = 0;
                voltage[3] = NaN;
                voltage[4] = 0;
                voltage[5] = NaN;
            }
            if(!isNaN(resistances[0]) && !isNaN(resistances[2])){
                voltage[0] = 0;
                voltage[1] = voltmax;
                voltage[2] = 0;
                voltage[3] = voltmax;
                voltage[4] = 0;
                voltage[5] = voltmax;
            }
            if(isNaN(resistances[0]) && isNaN(resistances[2])){
                voltage[0] = NaN;
                voltage[1] = NaN;
                voltage[2] = NaN;
                voltage[3] = NaN;
                voltage[4] = NaN;
                voltage[5] = NaN;
            }
        }
        else {
            if (!isNaN(resistances[1])) {
                one_paraRes = one_paraRes + 1 / resistances[1];
            }
            if (!isNaN(resistances[3]) && net[8]==1 && net[9]==1) {
                one_paraRes = one_paraRes + 1 / resistances[3];
            }
            if (!isNaN(resistances[4]) && net[10]==1 && net[11]==1 && net[8]==1 && net[9]==1) {
                one_paraRes = one_paraRes + 1 / resistances[4];
            }
            paraRes = 1 / one_paraRes;
        }
        

        totalResistance = resistances[0] + paraRes + resistances[2];

        if(totalResistance==0){
            window.alert(warning);
            showResults = false;
        }

        if(isNaN(totalResistance) && !isNaN(paraRes)){
            if(isNaN(resistances[0]) && isNaN(resistances[2])){
                voltage[0] = NaN;
                voltage[1] = NaN;
                voltage[2] = NaN;
                voltage[3] = NaN;
                voltage[4] = NaN;
                voltage[5] = NaN;
            }
            if(isNaN(resistances[0]) && !isNaN(resistances[2])){
                voltage[0] = voltmax;
                voltage[1] = voltmax;
                voltage[2] = voltmax;
                voltage[3] = voltmax;
                voltage[4] = voltmax;
                voltage[5] = voltmax;
            }
            if(!isNaN(resistances[0]) && isNaN(resistances[2])){
                voltage[0] = 0;
                voltage[1] = 0;
                voltage[2] = 0;
                voltage[3] = 0;
                voltage[4] = 0;
                voltage[5] = 0;
            }
        }
        else if(!isNaN(totalResistance) && !isNaN(paraRes)){
        voltage[1] = voltmax * (1 - (resistances[2] / totalResistance));
        voltage[0] = voltmax * (1 - ((resistances[2] + paraRes) / totalResistance));
        }

        if(net[8]==0 && net[9]!=0){
            paraRes = resistances[1];
            totalResistance = resistances[0] + paraRes + resistances[2];
            voltage[1] = voltmax * (1 - (resistances[2] / totalResistance));
            voltage[0] = voltmax * (1 - ((resistances[2] + paraRes) / totalResistance));
            voltage[2] = voltage[1];
            voltage[3] = voltage[1];
            voltage[4] = voltage[1];
            voltage[5] = voltage[1];
        }
        else if(net[8]!=0 &&net[9]==0){
            paraRes = resistances[1];
            totalResistance = resistances[0] + paraRes + resistances[2];
            voltage[1] = voltmax * (1 - (resistances[2] / totalResistance));
            voltage[0] = voltmax * (1 - ((resistances[2] + paraRes) / totalResistance));
            voltage[2] = voltage[0];
            voltage[3] = voltage[0];
            voltage[4] = voltage[0];
            voltage[5] = voltage[0];
        }
        else if(net[8]==0 && net[9]==0){
            paraRes = resistances[1];
            totalResistance = resistances[0] + paraRes + resistances[2];
            voltage[1] = voltmax * (1 - (resistances[2] / totalResistance));
            voltage[0] = voltmax * (1 - ((resistances[2] + paraRes) / totalResistance));
            voltage[2] = NaN;
            voltage[3] = NaN;
            voltage[4] = NaN;
            voltage[5] = NaN;
        }
        else {
            voltage[2] = voltage[0];
            voltage[3] = voltage[1];
            voltage[4] = voltage[0];
            voltage[5] = voltage[1];
        }
    
        if(net[10]==0 && net[11]!=0){
            voltage[4] = voltage[3];
            voltage[5] = voltage[3];
        }
        else if(net[10]!=0 &&net[11]==0){
            voltage[4] = voltage[2];
            voltage[5] = voltage[2];
        }
        else if(net[10]==0 && net[11]==0){
            voltage[4] = NaN;
            voltage[5] = NaN;
        }
    
        console.log("Parallel Resistance=" + paraRes.toString(10));

        if(net[8]==0 && net[9]==0 && isNaN(resistances[1])){
            voltage[0] = 0;
            voltage[1] = voltmax;
            voltage[2] = NaN;
            voltage[3] = NaN;
            voltage[4] = NaN;
            voltage[5] = NaN;
            if(isNaN(resistances[2])){
                voltage[1]=NaN;
            }
            if(isNaN(resistances[0])){
                voltage[0]=NaN;
            }
        }

        if(isNaN(paraRes) && (!isNaN(resistances[2]) || !isNaN(resistances[0]))){
            console.log("Trigger");
            voltage[0] = 0;
            voltage[1] = voltmax;
            if(net[8]==1){
                voltage[2] = voltage[0];
                if(!isNaN(resistances[3])&& !isNaN(voltage[2])){
                    voltage[3]=voltage[2];
                }
            }
            if(net[9]==1){
                voltage[3] = voltage[1];
                if(!isNaN(resistances[3])&& !isNaN(voltage[3])){
                    voltage[2]=voltage[3];
                }
            }
            if(net[10]==1){
                voltage[4] = voltage[2];
                if(!isNaN(resistances[4])&& !isNaN(voltage[4])){
                    voltage[5]=voltage[4];
                    console.log(voltage[5]);
                }
            }
            if(net[11]==1){
                if(!isNaN(voltage[3])){
                voltage[5] = voltage[3];}
                if(!isNaN(resistances[4])&& !isNaN(voltage[5])){
                    voltage[4]=voltage[5];
                }
            }
            if(!isNaN(voltage[4]) && net[10]==1 && isNaN(resistances[3])){
                voltage[2]=voltage[4];
            }
            if(!isNaN(voltage[5]) && net[11]==1 && isNaN(resistances[3])){
                voltage[3]=voltage[5];
            }
        }


        //window.alert(voltage);
        console.log(net);
    };



    if (radio_button_colour) {
        var colour_sim_on = true;
    }
    if (radio_button_height) {
        var height_sim_on = true;
    }
    //window.alert(totalResistance);
};


