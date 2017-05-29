#pragma strict
var Health = 100 ;


function ApplyDammage (Damage : int)
  { 
    Health -= Damage ;
    if (Health < 0)
    {
      Dead();
    }
  }
function Dead()
  {
    Debug.Log("Karakter Terbunuh");
  }
