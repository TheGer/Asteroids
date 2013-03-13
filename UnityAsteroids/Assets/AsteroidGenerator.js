#pragma strict
//slot of asteroid prefab
var asteroidprefab:Rigidbody;

//the time at START of game
var starttime:float;
//the game at the moment
var currenttime:float;
//the game has been played for - KEMM ILI NILGHAB
static var elapsedtime:float;



function Start () {
	//saved the time when the game started. 
	starttime = Time.time;
	
	yield WaitForSeconds(1);
	//create three asteroids after one second
	createAsteroids(3);
	yield WaitForSeconds(20);
	createAsteroids(6);
	yield WaitForSeconds(60);
	createAsteroids(10);

}

function Update () {
	currenttime = Time.time;
	elapsedtime = currenttime - starttime;	
}

function OnGUI()
{
	GUI.Label(Rect(1,1,200,50),"Time Elapsed: "+elapsedtime);
}


function createAsteroids(numberOfAsteroids:int)
{
	var counter:int;
	counter = 0;
	
	//short hand for initing and setting value
	var xpos:int=0;
	var ypos:int=0;
	var zpos:int=1;
	
	for(counter = 0; counter<numberOfAsteroids; counter++)
	{
		xpos = Random.Range(BordersCalculator.leftmost,BordersCalculator.rightmost);
		ypos = Random.Range(BordersCalculator.topmost,BordersCalculator.bottommost);
		
		Instantiate(asteroidprefab,Vector3(xpos,ypos,zpos),Quaternion.identity);
		
	}

}

