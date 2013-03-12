#pragma strict

var normalSpeed:int;
var turboSpeed:int;


function Start () {

}

function Update () {
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

