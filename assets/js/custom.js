// Triangle part Script
function calculateTriangle(){
    // get triangle base value
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    
    // get triangle height value
    const triangleHeightInput = document.getElementById("triangle-height");
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // calculate triangle area
    const area = 0.5 * base * height;

    // display triangle area
    const triangleAreaSpan = document.getElementById("triangle-area");
    triangleAreaSpan.innerText = area;

    // empty input field
    triangleBaseInput.value = "";
    triangleHeightInput.value = "";
}

// Rectangle part Script
function calculateRectangle(){
    // rectangle width value
    const rectangleWidthInput = document.getElementById("rectangle-width");
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);
    
    // rectangle length value
    const rectangleLengthInput = document.getElementById("rectangle-length");
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);

    // calculate rectangle area
    const area = rectangleWidth * rectangleLength;
    console.log(area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById("rectangle-area");
    rectangleAreaSpan.innerText = area;

    // empty input field
    rectangleWidthInput.value = "";
    rectangleLengthInput.value = "";
}