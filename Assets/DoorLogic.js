#pragma strict


var theDoor = Transform;
var anim : Animation;
private var drawGUI = false;
private var doorIsClosed = true;


function Update () 
{
  if (drawGUI == true && Input.GetKeyDown(KeyCode.E))
  {
    changeDoorState ();
  }
}

function OnTriggerEnter (theCollider : Collider)
{
  if (theCollider.tag == "Player")
  {
    drawGUI = true;
  }
}
function onTriggerExit (theCollider : Collider)
{
  if (theCollider.tag == "Player")
  {
    drawGUI = false;  
  }
}
function OnGUI ()
{
  if (drawGUI == true)
  {
    GUI.Box (Rect (Screen.width*0.5-51,15,250,25),"Klik E membuka pintu");
  }
}

function changeDoorState ()
{
  if (doorIsClosed==true)
  {
  
    anim.CrossFade("Open");
    doorIsClosed = false ;
    yield WaitForSeconds (3);
    anim.CrossFade ("Close");
    doorIsClosed = true;
  }
}
