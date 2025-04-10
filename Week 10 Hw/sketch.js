var bill

function setup() {
  createCanvas(400, 400);


bill = createInput("50")
bill.position(100,100)
bill.size(150,50)

  //basic button
button = createButton('Calculate');
button.position(x, y)
button.size(xsize, ysize)
  //when pressed, run a fucntion
button.mousePressed(function(){tipCalc()});
  
  
text(bill.value(), 200, 200)  
  
}

function tipCalc()
  {
  tipAmt = bill.value() * perc.value() * .01 
  
  
  } 