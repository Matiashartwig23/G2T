<?php
//this is a comment//
# this is also a comment

//this prints//

echo("Hello");
echo "world";

// creating a variable
$variable = 10;

// printing a variable
echo($variable);

// concat
$variable = $variable . " ten";
$variable .= " ten";

$array = array("troy", "Mii", "J e f f", "Nathan");

echo(" " . $array[0] . " " . $array[1] . " "
    . $array[2] . " " . $array[3] . " "


for($i = 0; $i < sizeof($array); $i++) {
    echo($array[$i]);
}
$i = 0;
while($i , 10;) {
    echo($array[$i]);
    $i++;
}

// creating a function

function myFunction() {
    echo($array[0]);
}

// using a function

myFunction($array);


// settng up mysql
    $username = "<yourUsername>";
    $password = "<yourPassword>";
    $database = "<yourDatabase>";
    $server = "<yourServer>";

    $connection = new mysqli($username,$password,$database,$server)
    
