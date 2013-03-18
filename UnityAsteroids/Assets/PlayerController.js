#pragma strict

var normalSpeed:int;
var turboSpeed:int;

//slot for the laser
var laserprefab:Rigidbody;

//score starts at zero
static var score:int=0;

//lives
var health:int=100;


var gameOver:boolean=false;

var totalTime:float=5.0;

function Start () {
	
}

function Update () {
	print(gameOver);
	if (AsteroidGenerator.elapsedtime<totalTime)
	{
		gameOver = false;
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
	else 
	{
		
		gameOver=true;
	}	
				
}

function OnGUI()
{
	GUI.Label(Rect(1,1,200,50),"Time Elapsed: "+AsteroidGenerator.elapsedtime);
	GUI.Label(Rect(0,15,150,25),"Score :"+score);
	GUI.Label(Rect(0,40,150,25),"Health :"+health);
	
	if (gameOver==true)
	{
		GUI.Label(Rect(300,300,150,25),"GAME OVER");
		if (GUI.Button(Rect(300,350,100,100),"Restart Game"))
		{
			//to reset the scene and score
			gameOver = false;
			score = 0;
			health = 100;
			AsteroidGenerator.elapsedtime = Time.time;
			Application.LoadLevel(1);
		}
		if (GUI.Button(Rect(300,500,100,100),"Go back to main menu"))
		{
			//takes us back to the main menu
			Application.LoadLevel(0);
		}
		
	}
}

function OnTriggerEnter(otherObject:Collider)
{
	if(otherObject.gameObject.tag == "asteroid")
	{
		Destroy(otherObject.gameObject);
		health = health-1;
		if (health==0)
		{
			gameOver=true;
		}
	}
}


