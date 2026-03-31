// Error 1: Missing parameters in the function definition
function plotPoint(x0, y0, x, y) {
    console.log(x0, y0, x, y) // checks the arguments passed to this function
    
    // Error 2: Missing HTML DOM Methods to target the elements
    document.getElementById('in1').innerHTML = x0 + " " + y0 + " " + x + " " + y;
    
    var point = document.createElement('div');  
    point.className = 'point';
    
    /* control where to place the div on the screen using left and bottom of position:absolute */
    // Error 3 & 4: Invalid syntax for CSS manipulation (styleleft & stylebottom)
    point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    
    document.getElementById('coordinatePlane').appendChild(point);

    if (x > x0 && y > y0){
      document.getElementById('out1').innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      document.getElementById('out1').innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      document.getElementById('out1').innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      document.getElementById('out1').innerHTML = "NO"
    }
    else{
      document.getElementById('out1').innerHTML = "divisa"
    }
} // Error 5: Missing closing brace for the function
