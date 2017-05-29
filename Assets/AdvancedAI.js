var Distance : float;
var Target : Transform;
var LookAtDistance = 25.0;
var ChaseRange=15;
var AttackRange = 5.0;
var MoveSpeed = 5.0;
var Damping = 6.0;
var Damage = 35;

var attackRepeatTime =1;
private var attackTime : float;

var controller : CharacterController;
var gravity : float =20.0;
private var MoveDirection : Vector3 = Vector3.zero;

function Start ()
{
  attackTime = Time.time;
}



function Update()

{
  Distance = Vector3.Distance(Target.position,transform.position);
  
  if (Distance<LookAtDistance)
  {
    lookAt();
  }
  if (Distance>LookAtDistance)
  {
    GetComponent.<Renderer>().material.color = Color.green;
  }
  if (Distance < AttackRange)
  {
    attack();
  }
  else
  if (Distance<ChaseRange)
  {
    chase();
  }
}

function lookAt()
{
  GetComponent.<Renderer>().material.color = Color.yellow;
  var rotation = Quaternion.LookRotation(Target.position-transform.position);
  transform.rotation = Quaternion.Slerp(transform.rotation, rotation , Time.deltaTime * Damping);
}


function chase ()
{
  GetComponent.<Renderer>().material.color = Color.red;
  moveDirection = transform.forward ;
  moveDirection *= MoveSpeed;
  moveDirection.y -= gravity * Time.deltaTime;
  controller.Move(moveDirection* Time.deltaTime);
}
function attack ()
{
  if (Time.time > attackTime)
  {
    Target.SendMessage("ApplyDammage",Damage);
    Debug.Log ("Melakukan serangan");
    attackTime = Time.time + attackRepeatTime ;
  }
}
function ApplyDammage()
{
  ChaseRange *=30;
  MoveSpeed *= 2;
  LookAtDistance *= 40;
}
