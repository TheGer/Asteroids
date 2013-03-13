#pragma strict

var normalSpeed:int;
var turboSpeed:int;

//slot for the laser
var laserprefab:Rigidbody;


function Start () {

}

function Update () {
	
	//to enable borders
	BordersCalculator.EnableBorders(this.transform);
	
	
	if (Input.GetKeyDown(KeyCode.LeftControl))
	{
		Instantiate(laserprefab,transform.position,transform.rotation);
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

