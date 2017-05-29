#pragma strict

var Weapon1 : GameObject;
var Weapon2 : GameObject;

function Update ()
{
  if (Input.GetKeyDown(KeyCode.Q))
  {
    SwapWeapon();
  }
}
function SwapWeapon()
{
  if (Weapon1.activeInHierarchy == (true) )
  {
    Weapon1.SetActive (false);
    Weapon2.SetActive (true);
  }
  else
  {
    Weapon1.SetActive (true);
    Weapon2.SetActive (false);
  }
}
