#pragma strict

var normalSpeed:int;
var turboSpeed:int;


function Start () {

}

function Update () {
	var xpositionofspaceship:float;
	var ypositionofspaceship:float;
	
	
	xpositionofspaceship = transform.position.x;
	ypositionofspaceship = transform.position.y;
	
	
	//space ship enable borders
	//if the spaceship exited the scene to the left
	if (xpositionofspaceship < BordersCalculator.leftmost)
	{
		transform.position.x = BordersCalculator.rightmost;
	}
	
	//if the spaceship exited the scene to the right
	if(xpositionofspaceship > BordersCalculator.rightmost)
	{
		transform.position.x = BordersCalculator.leftmost;
	}
	
	//if the spaceship exited the scene from the top
	if (ypositionofspaceship > BordersCalculator.topmost)
	{
		transform.position.y = BordersCalculator.bottommost;
	}
	
	//if the spaceship exited the scene from the bottom
	if (ypositionofspaceship < BordersCalculator.bottommost)
	{
		transform.position.y = BordersCalculator.topmost;
	}
	
	
	
	//rotate left and right
	transform.Rotate(Vector3.forward * -40 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	//move forward at a given speed
	if(Input.GetKey(KeyCode.Space))
	{
		transform.Translate(Vector3.up * turboSpeed * Time.deltaTime * Input.GetAxis("Vertical"));
	}
	else
	{
		transform.Translate(Vector3.up * normalSpeed * Time.deltaTime * Input.GetAxis("Vertical"));
	}	
	
		
				
}

