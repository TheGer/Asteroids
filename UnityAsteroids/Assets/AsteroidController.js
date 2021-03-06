#pragma strict
var asteroidSpeed:float;

var horizontalDirection:int;
var verticalDirection:int;

function Start () {
	//RANDOM NUMBER FROM 10 TO 50
	asteroidSpeed = Random.Range(5,10);
	//RANDOM NUMBER FROM -4 TO 4
	horizontalDirection = Random.Range(-4,4);
	//RANDOM NUMBER FROM -4 TO 4
	verticalDirection = Random.Range(-4,4);
}

function Update () {
	
	BordersCalculator.EnableBorders(this.transform);
	
	//horizontal movement
	transform.Translate(Vector3.left * asteroidSpeed * horizontalDirection * Time.deltaTime);
	//vertical movement
	transform.Translate(Vector3.up *  asteroidSpeed * verticalDirection * Time.deltaTime);
	
	
}
