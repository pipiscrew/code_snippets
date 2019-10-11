//https://stackoverflow.com/a/2237315/1320686

class MyConfig
{
    public static function read($filename)
    {
        $config = include $filename;
        return $config;
    }
    public static function write($filename, array $config)
    {
        $config = var_export($config, true);
        file_put_contents($filename, "<?php return $config ;");
    }
}

//You could use the class like this:

MyConfig::write('conf1.txt', array( 'setting_1' => 'foo' ));
$config = MyConfig::read('conf1.txt');
$config['setting_1'] = 'bar';
$config['setting_2'] = 'baz';
MyConfig::write('conf1.txt', $config);