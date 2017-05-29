#pragma strict

var Damage : int = 50 ;
var Distance : float ;
var MaxDistance : float =1.5;
var Weapon : Transform ;

function Update () 
{
  if(Input.GetButtonDown ("Fire1"))
  {
    Weapon.GetComponent.<Animation>().Play("Sword");
    var hit : RaycastHit;
    if (Physics.Raycast (transform.position, transform.TransformDirection (Vector3.forward), hit))
    {
      Distance = hit.distance;
      if (Distance < MaxDistance)
      {
        hit.transform.SendMessage("ApplyDammage",Damage,SendMessageOptions.DontRequireReceiver);
      }
    }
  }
}
