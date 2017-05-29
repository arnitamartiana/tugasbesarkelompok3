#pragma strict

var Distance : float;
var Target : Transform;
var LookAtDistance = 25.0;
var AttackRange = 15.0;
var MoveSpeed = 5.0;
var Damping = 6.0;

function Update()

{
  Distance = Vector3.Distance(Target.position,transform.position);
  
  if (Distance<LookAtDistance)
  {
    GetComponent.<Renderer>().material.color = Color.yellow;
    lookAt();
  }
  if (Distance>LookAtDistance)
  {
    GetComponent.<Renderer>().material.color = Color.green;
  }
  if (Distance<AttackRange)
  {
    GetComponent.<Renderer>().material.color = Color.red;
    attack();
  }
}

function lookAt()
{
  var rotation = Quaternion.LookRotation(Target.position-transform.position);
  transform.rotation = Quaternion.Slerp(transform.rotation,rotation, Time.deltaTime *Damping);
}


function attack ()
{
  transform.Translate(Vector3.forward * MoveSpeed * Time.deltaTime);
}
