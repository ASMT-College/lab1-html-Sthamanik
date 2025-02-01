<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="server.php" method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            <span id="nameError" class="error">
                <?= isset($errors['name']) ? $errors['name'] : ''; ?>
            </span>
        </div>
        <div>
            <label for="age">Age</label>
            <input type="number" id="age" name="age" required min="18">
            <span id="ageError" class="error">
                <?= isset($errors['age']) ? $errors['age'] : ''; ?>
            </span>
        </div>
        <div>
            <label for="description">Description</label>
            <textarea id="description" name="description" required rows="4"></textarea>
            <span id="descriptionError" class="error">
                <?= isset($errors['description']) ? $errors['description'] : ''; ?>
            </span>
        </div>
        <button type="submit" id="submitBtn" disabled>Submit</button>
    </form>
    <script src="script.js"></script>
</body>
</html>