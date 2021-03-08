<?php
    // SEND EMAIL
    if (isset($_POST['submit-email'])) {
        try {
            // OBTAIN FORM INPUT VALUES
            $name = $_POST['name'] ?? 'UNKNOWN RECIPIENT';
            $subject = $_POST['subject'];
            $message = $_POST['message'];

            // SET MAIL RECIPIENTS
            $mailTo = 'ben.madelin@ntlworld.com'; //. ', recipent@example.com';
            $mailFrom = $_POST['email'];

            // VALIDATE FORM
                // CHECK EMPTY FIELDS
                // CHECK VALID EMAIL
                // CHECK SPECIAL CHARACTERS

            // FORMAT MAIL HEADER
            $headers = 'From: ' . $mailFrom;

            // FORMAT MAIL CONTENT
            $content = 'You have received an e-mail from ' . $name . '.\n\n' . $message;

            // EXECUTE STATEMENT
            mail($mailTo, $subject, $content, $headers);

            // SUCCESS FEEDBACK
            header('Location: index.php?success=mailsent');



        } catch (Exception $e) {
            // ERROR FEEDBACK
            echo 'Register Error: ' . $e->getMessage();
        }

    } else {
        header('Location: index.php');
        exit();
    }