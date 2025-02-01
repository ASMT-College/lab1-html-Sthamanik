<?php
    $errors = [];

    if ( $_SERVER['REQUEST_METHOD'] == 'POST'){
        $name = $_POST['name'];
        $age = $_POST['age'];
        $description = $_POST['description'];

        if (empty($name) || strlen(trim($name)) < 4)
            $errors['name'] = "Name must be at least 4 characters long";

        if (!is_numeric($age) || $age < 18)
            $errors['age'] = "Age must be greater than 18 ";
        
        if (empty($description)) 
            $errors['decription'] = "Description cannot be empty";

        if (count($errors) > 0) {
            header('Location: index.php?errors=' . urlencode(json_encode($errors)));
            exit;
        }

        echo "Form submitted successfully!";
        echo "<br>Name: ". $name;
        echo "<br>Age: ". $age;
        echo "<br>Description: ". $description;

    }
    else {
        echo "Unsupported request method";
    }
?>