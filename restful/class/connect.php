<?php

session_start();


class Config
{
    static $confArray;

    public static function read($name)
    {
        return self::$confArray[$name];
    }

    public static function write($name, $value)
    {
        self::$confArray[$name] = $value;
    }

}

// db
Config::write('db.host', 'localhost');
Config::write('db.port', '5432');
Config::write('db.basename', 'geotechno');
Config::write('db.user', 'root');
Config::write('db.password', '');
class Core
{
    public $dbh; // handle of the db connexion
    private static $instance;

    private function __construct()
    {
        
        $dsn = 'mysql: host=localhost;dbname=geotechno';
                   
       $user = Config::read('db.user');
        // getting DB password from config                
        $password = Config::read('db.password');


        $this->dbh = new PDO($dsn, $user, $password);
    }

    public static function getInstance()
    {
        if (!isset(self::$instance))
        {
            $object = __CLASS__;
            self::$instance = new $object;
        }
        return self::$instance;
    }
	public static function Sanitize($str,$remove_nl=true)
    {
       

        if($remove_nl)
        {
            $injections = array('/(\n+)/i',
                '/(\r+)/i',
                '/(\t+)/i',
                '/(%0A+)/i',
                '/(%0D+)/i',
                '/(%08+)/i',
                '/(%09+)/i'
                );
            $str = preg_replace($injections,'',$str);
        }

        return $str;
    }
    public static function RedirectToURL($url)
    {
        header("Location: $url");
        exit;
    }
	public static function Redirect($url,$val)
    {
        header("Location: $url?go=$val");
        exit;
    }
}
/*$servername = "localhost";
$username = "root";
$password = "";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=main", $username, $password);
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }*/
?>