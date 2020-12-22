<?php
    // заголовки 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // include_once 'config/database.php';

    // получаем соединение с базой данных 
    // $database = new Database();
    // $db = $database->getConnection();
    $link = mysqli_connect('localhost','root','root','example');

    //Получаем все данные из таблицы
    $sql = 'SELECT * FROM tbl';
    $result = mysqli_query($link, $sql);

    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $object = [];
    foreach($rows as $row){
        // $obj = json_encode($row);
        $obj = [
            'id' => $row['id'],
            'date' => $row['date'],
            'name' => $row['name'],
            'count' => $row['count'],
            'distance' => $row['distance']
        ];
        $object[] = $obj;
    }
    echo json_encode($object);
?>