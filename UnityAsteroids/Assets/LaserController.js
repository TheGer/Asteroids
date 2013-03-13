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