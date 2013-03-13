#pragma strict
var laserSpeed:int;


function Start () {

}

function Update () {
	//move forward
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}

function OnTriggerEnter(otherObject:Collider)
{
	if (otherObject.gameObject.tag == "asteroid")
	{
		//increment score, destroy laser, destroy asteroid
		PlayerController.score++;
		Destroy(this.gameObject);
		Destroy(otherObject.gameObject);
	}

}