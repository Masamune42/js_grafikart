<?php
// Ici c'est du code PHP !
// BASES : 
// 1.
$nom = "aze"; // Interprète les variables entre "
// Une variable non déclarée et testée sera NULL

// 2.
// Conversion automatique de PHP
var_dump("1" + 1);
var_dump("1" . 1);

// 3.
$tab = [1, 2, '23'];
$tab[0];
$eleve = [
    'nom' => 'Jean',
    'moyenne' => 15
];
$eleve[$indice];

// 4.
if (1) {
    # code...
} elseif (1) {
    # code...
} else {
}

// 5.
while (0) {
    # code...
}

// 6.
for ($i = 0; $i < 3; $i++) {
    # code...
}

// 7.
foreach ($tab as $key => $value) {
    # code...
}

// 8.
function demo($a, $b = 2)
{
    echo "Salut!";
}

// Closure, existe depuis PHP 5.3
$a = function () {
}; // ; obligatoire dans ce cas
var_dump($a);

demo(1);

// 9
// Utilisation de fonction globale (courant en PHP)
strtoupper($nom);

// 10
// Pareil qu'une fonction JS
$b = 3;
$demo2 = function () use ($b) {
    return 3 * $b;
};

echo $demo2(); // vaut 9

// CLASSES
// 1.
class Eleve
{
    public $nom;
    public $role = "Eleve";

    public function __construct($nom)
    {
        $this->nom = $nom;
    }

    public function moyenne()
    {
        return 10;
    }

    public function present()
    {
        return $this->nom . " présent !";
    }
}

$eleve = new Eleve('Jean');

// 2. 
class Session
{
    public static function get()
    {
    }
}

Session::get();

// 3. 
class Delegue extends Eleve
{
    public $role = "delegue";
    public function moyenne()
    {
        return 15;
    }
}
