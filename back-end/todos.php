<?php
/* 
*** class for todos ****
*/

class Todos {

    public function getTodos($dbConn){
        try{
            $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = $dbConn->prepare("SELECT * FROM todos");
            $sql->execute();

            $row = $sql->fetchAll(PDO::FETCH_ASSOC);
            if (count($row) == 0){
                echo "empty";
            } else {
                echo json_encode($row);
            }
        }
        catch (PDOException $e) {
            echo "Problem running query to get todos: ".$e->getMessage();
        }
    }

    public function addTodo($dbConn, $project_id){
        try{
            $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $title= $_P
            $sql = $dbConn->prepare("INSERT INTO todos(todo_title, todo_description, todo_lastUpdated, todo_estimated, todo_status, todo_created, project_id)
            VALUES(:?, :?, :?, :?, :?, :?, :?)");

            $sql->bindParam(':?', $title);
            $sql->bindParam(':?', $description);
            $sql->bindParam(':?', $lastUpdated);
            $sql->bindParam(':?', $estimated);
            $sql->bindParam(':?', $status);
            $sql->bindParam(':?', $created);
            $sql->bindParam(':?', $project_id);

            $sql->execute();
            $dbConn->exec($sql);
        }
        catch (PDOException $e) {
            echo "problem send the data: ".$e->getMessage();
        }
    }
}