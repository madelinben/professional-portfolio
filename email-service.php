<?php
    // SEND EMAIL
    if (isset($_POST['submit-email'])) {
        try {
            // OBTAIN FORM INPUT VALUES
            $name = $_POST['name'] ?? 'UNKNOWN RECIPIENT';
            $subject = $_POST['subject'] ?? 'QUERY FROM MADELINBEN.CO.UK';
            $message = $_POST['message'];

            // SET MAIL RECIPIENTS
            $mailTo = 'ben.madelin@ntlworld.com'; //. ', recipent@example.com';
            $mailFrom = $_POST['email'];

            // VALIDATE FORM
            if (empty($message) || empty($mailFrom)) { // CHECK EMPTY FIELDS
                header('Location: index.php?error=empty&msg=' . $message . '&from=' . $mailFrom);
                exit();
            } else {
                if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) { // CHECK VALID EMAIL
                    header('Location: index.php?error=mailaddress&msg=' . $message);
                    exit();
                }
                if ((!preg_match('/^[a-zA-Z0-9]*$/', $name)) || (!preg_match('/^[a-zA-Z0-9]*$/', $subject)) || (!preg_match('/^[a-zA-Z0-9]*$/', $message))) { // CHECK SPECIAL CHARACTERS
                    header('Location: index.php?error=mailcontent&from=' . $mailFrom);
                    exit();
                }
            }

            // FORMAT MAIL HEADERS
            $headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            $headers .= 'To: Benjamin Madelin <' . $mailTo . '>' . "\r\n";
            $headers .= 'From: ' . $name . ' <' . $mailFrom . '>' . "\r\n";



            // FORMAT MAIL CONTENT
            $content = 'You have received an e-mail from ' . $name . '.\n\n' . $message;

            $formattedContent = <<<CONTENT

                <html>
                    <head>
                        <title>SUBJECT</title>
                        
                    <style>
                        /*STYLES*/
                    </style>
                    </head>
                    
                    <body>
                        <p>MESSAGE</p>
                        
                        <table>
                            <tr>
                                <th>COL</th>
                            </tr>
                            <tr>
                                <td>ROWCELL</td>
                            </tr>
                        </table>
                    </body>
                </html>

CONTENT;



            // EXECUTE STATEMENT
            mail($mailTo, $subject, $content, $headers);

            // SUCCESS FEEDBACK
            header('Location: index.php?success=mailsent');



        } catch (Exception $e) {
            // ERROR FEEDBACK
            echo 'Email Error: ' . $e->getMessage();
        }

    } else {
        header('Location: index.php');
        exit();
    }