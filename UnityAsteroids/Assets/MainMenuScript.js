#pragma strict
//placeholder for the image
var asteroidsTitle:Texture2D;

//placeholder for button image
var newButtonTexture:Texture2D;


function Start () {

}

function Update () {

}

//case sensitive! remember
function OnGUI()
{
	//width and height of screen
	//Screen.width;
	//Screen.height;
	//draw the image on screen
	GUI.Label(Rect(0,0,asteroidsTitle.width,asteroidsTitle.height),asteroidsTitle);
	
	//a button with an image
	if (GUI.Button(Rect(5,asteroidsTitle.height+10,newButtonTexture.width,newButtonTexture.height),newButtonTexture))
	{
		//print("start game");
		//switch to the next scene.
		Application.LoadLevel(1);
	}
	
	

}
