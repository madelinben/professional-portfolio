<?php
function read($path) {
    $content = json_decode(file_get_contents($path), true) or die('Error reading JSON from: ' . $path);
    return $content;
}

function write($path, $data) {
    $file = fopen($path, 'w') or die('Error writing JSON to: ' . $path);
    fwrite($file, json_encode($data, JSON_UNESCAPED_UNICODE));
    fclose($file);
}
