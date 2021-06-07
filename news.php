<?
header("Content-Type: text/plain; charset=windows-1251");

function json_fix_cyr($json_str) {
    $cyr_chars = array (
        '\u0430' => 'а', '\u0410' => 'А',
        '\u0431' => 'б', '\u0411' => 'Б',
        '\u0432' => 'в', '\u0412' => 'В',
        '\u0433' => 'г', '\u0413' => 'Г',
        '\u0434' => 'д', '\u0414' => 'Д',
        '\u0435' => 'е', '\u0415' => 'Е',
        '\u0451' => 'ё', '\u0401' => 'Ё',
        '\u0436' => 'ж', '\u0416' => 'Ж',
        '\u0437' => 'з', '\u0417' => 'З',
        '\u0438' => 'и', '\u0418' => 'И',
        '\u0439' => 'й', '\u0419' => 'Й',
        '\u043a' => 'к', '\u041a' => 'К',
        '\u043b' => 'л', '\u041b' => 'Л',
        '\u043c' => 'м', '\u041c' => 'М',
        '\u043d' => 'н', '\u041d' => 'Н',
        '\u043e' => 'о', '\u041e' => 'О',
        '\u043f' => 'п', '\u041f' => 'П',
        '\u0440' => 'р', '\u0420' => 'Р',
        '\u0441' => 'с', '\u0421' => 'С',
        '\u0442' => 'т', '\u0422' => 'Т',
        '\u0443' => 'у', '\u0423' => 'У',
        '\u0444' => 'ф', '\u0424' => 'Ф',
        '\u0445' => 'х', '\u0425' => 'Х',
        '\u0446' => 'ц', '\u0426' => 'Ц',
        '\u0447' => 'ч', '\u0427' => 'Ч',
        '\u0448' => 'ш', '\u0428' => 'Ш',
        '\u0449' => 'щ', '\u0429' => 'Щ',
        '\u044a' => 'ъ', '\u042a' => 'Ъ',
        '\u044b' => 'ы', '\u042b' => 'Ы',
        '\u044c' => 'ь', '\u042c' => 'Ь',
        '\u044d' => 'э', '\u042d' => 'Э',
        '\u044e' => 'ю', '\u042e' => 'Ю',
        '\u044f' => 'я', '\u042f' => 'Я',
 
        '\r' => '',
        '\n' => '<br />',
        '\t' => ''
    );
 
    foreach ($cyr_chars as $cyr_char_key => $cyr_char) {
        $json_str = str_replace($cyr_char, $cyr_char_key, $json_str);
    }
    return $json_str;
}

$from = intval($_GET['from']);
$to = intval($_GET['to']);
if (!isset($from) || !isset($to)) {
	echo "erorr";
	exit();
}

$link = mysqli_connect("localhost", "nemedic_nemedic", "pg341ZeK", "nemedic_posts");

if ($link == false){
    print("Error " . mysqli_connect_error());
}
else {
    // print("Success");
}
$limit = $to - $from + 1;
$sql = 'SELECT * FROM `posts`';
$result = mysqli_query($link, $sql);

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

$reversed = array_reverse($rows);
$res = array_slice($reversed, $from - 1, $limit);

// var_dump($res);
$i = 0;
echo "[";
foreach($res as $row)
{
	if ($i == 0) {
		$i = 1;
	} else {
		echo ",";
	}
	$arr = ["[","]","'"];
	$desc = $row['description'];
	foreach ($arr as $value) {
		$desc = str_replace($value, "", $desc);
	}
	$desc = str_replace('"',"'", $desc);
	$name = str_replace('"',"'", $row['name']);

	echo "{";
	echo '"id":"'.json_fix_cyr($row['id']).'","name":"'.json_fix_cyr($name).'","description":"'.json_fix_cyr($desc).'","media":"'.json_fix_cyr($row['media']).'"';
	echo "}";
	// $name = strval($row['name']);
	// echo json_fix_cyr($name);

}
echo "]";
// var_dump($items);
// echo json_encode($items);
// echo $res[0]['name'];


 
// echo json_encode(array("собака","кошка")); // ["собака","кошка"]
