// JavaScript Document
#pragma strict
var Health = 100 ;

function Update () 
{ 
  if (Health <= 0)
  { 
    Dead();
  }
}
function ApplyDammage (Damage : int)
  { 
    Health -= Damage ;
  }
function Dead()
  {
    Destroy (gameObject);
  }
