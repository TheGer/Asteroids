#pragma strict
static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () {

	//CALCULATE LEFT MOST
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	//RIGHT MOST POSITION
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	//BOTTOM MOST POSITION
	bottommost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;
	//TOP MOST POSITION
	topmost = Camera.main.ScreenToWorldPoint(Vector3(0,Screen.height,0)).y;
}