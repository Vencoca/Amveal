<?php
$host = "127.0.0.1"; 
$user = "amveal.com"; 
$password = ""; 
$dbname = "amvealcom1"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
      $id = $_GET['id'];
      $sql = "select * from emails".($id?" where id=$id":''); 
      break;
    case 'POST':
      $email = $_POST["email"];
      $sql = "insert into emails (email) values ('$email')"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if ($method == 'GET') {
  if (!$id) echo '[';
  for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
  }
  if (!$id) echo ']';
} elseif ($method == 'POST') {
  echo json_encode($result);
} else {
  echo mysqli_affected_rows($con);
}

$con->close();