<?php

/* 
** PHP class to control back end of project tracker
* Author: Keith Blackwelder
*/
if (isset($_GET) ){
    $obj = new ProjectTracker;
    switch ($_GET["request"]){
        case "newproject":
        $obj->addNewProject();
        break;

        case "getall":
        $obj-> getAllProjects();
        break;

        case "details":
        $obj-> getDetails();
        break;
    }
}

class ProjectTracker {
    public function DbConn(){
        $host = "localhost";
        $user = "root";
        $pass = "herbie";
        $db = "project_tracker";

        try {
            $conn = new PDO("mysql: host=$host;dbname=$db", $user, $pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch (PDOException $e){
            echo "this is my message!!! ".$e->getMessage();
        }
    }

    // request all project listing
    public function addNewProject(){
        $conn = $this->DbConn();
        try {
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $title = $_POST["projectTitle"];
            $subject = $_POST["projectSubject"];
            $description = $_POST["projectDescription"];
            $timestamp = $_POST["timeStamp"];

            $sql = $conn->prepare("INSERT INTO projects(title, subject, description, timestamp)
            VALUES(:title, :subject, :description, :timestamp)");
            $sql->bindParam(':title', $title);
            $sql->bindParam(':subject', $subject);
            $sql->bindParam(':description', $description);
            $sql->bindParam(':timestamp', $timestamp);

            $sql->execute();

            // return for ajax, 0 false, 1 true
            echo '1';
        }
        catch (PDOException $e){
            $msg = "error inserting into projects!".$e->getMessage();
            echo "<script>console.log('".$msg."');</script>";
            echo '0';
        }
    }

    // function to get all records
    public function getAllProjects(){
        $conn = $this->DbConn();
        try{
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = $conn->prepare("SELECT * FROM projects");
            $sql->execute();

            $row = $sql->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($row);
        }
        catch (PDOException $e){
            echo "Error!!!".$e->getMessage();
        }
    }

    public function getDetails(){
        $conn = $this->DbConn();
        try{
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $id = $_POST["id"];
            $sql = $conn->prepare("SELECT projects.id, projects.title, todos.* 
            FROM projects, todos
            WHERE todos.todo_id = $id AND projects.id = $id");
            $sql->execute();

            $row = $sql->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($row);
        }
        catch (PDOException $e) {
            echo "error getting details: ".$e->getMessage();
        }
    }
}


?>