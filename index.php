<?php 

$products = [
    ['id'=>101,'title'=>'Fiktivní bomba (replika)','desc'=>'jen rekvizita, nefunkční','seller'=>55,'visible'=>true],
    ['id'=>102,'title'=>'Kobereček','desc'=>'hezký kobereček','seller'=>66,'visible'=>true],
];

$keywords = ['bomb','bomba','výbušnina','explosive'];

$tickets = [];
$emails = [];

foreach ($products as &$p) {
    $hay = mb_strtolower($p['title'] . ' ' . $p['desc']);
    $found = false;
    foreach ($keywords as $kw) {
        if (mb_stripos($hay, $kw) !== false) { $found = true; break; }
    }

    if ($found) {

        $p['visible'] = false;

        $tickets[] = ['ticket_id' => 'T' . time() . $p['id'], 'product_id' => $p['id']];

        $emails[] = ['to'=>'seller' . $p['seller'] . '@example.cz', 'subject'=>"Karanténa produktu {$p['id']}"];
    }
}
unset($p);

print_r($products);
print_r($tickets);
print_r($emails);


?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="hlstr.css">
</head>
<body>
    <ul>
        <li><a href="registration.html">Registrace</a></li>
        <li><a href="login.html">Přihlášení</a></li>
        <li><a href="index.php"></a></li>
    </ul>
</body>
</html>