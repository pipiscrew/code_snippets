//[php android .net] Encryption – AES128 PKCS7
//http://www.pipiscrew.com/2016/02/php-android-net-encryption-aes128-pkcs7/

references :
http://aesencryption.net/
AES 128bit Cross Platform (Java and C#) Encryption Compatibility
https://gist.github.com/jafetsanchez/1080133
http://vivavivugeek.blogspot.com/2012/05/encrypt-by-php-decrypt-by-aspnet-c-and.html

warning the encrypted/decrypted values of this article, didnt decrypted/encrypted with 1234567890123456!!

PHP (decrypt)
//https://gist.github.com/RiANOl/1077723
<?php
    function aes128_cbc_decrypt($key, $data, $iv) {
      if(16 !== strlen($key)) $key = hash('MD5', $key, true);
      if(16 !== strlen($iv)) $iv = hash('MD5', $iv, true);
      $data = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $data, MCRYPT_MODE_CBC, $iv);
      $padding = ord($data[strlen($data) - 1]);
      return substr($data, 0, -$padding);
    }
 
    $text = base64_decode('4iS2mahLSlkSk1SLuWZ1qQ==');
    $key = "1234567890123456";
    $iv = '1234567890123456';
 
    echo aes128_cbc_decrypt($key,$text,$iv);
?>
 
//https://www.leaseweb.com/labs/2014/02/aes-php-mcrypt-key-padding/
<?php
    $crypt = base64_decode("4iS2mahLSlkSk1SLuWZ1qQ==");
    $key = "1234567890123456";
    $iv = '1234567890123456';
    $enc = MCRYPT_RIJNDAEL_128;
    $mode = MCRYPT_MODE_CBC;
 
    echo mcrypt_decrypt($enc, $key, $crypt, $mode, $iv);
 
 

java android (encrypt)

//https://github.com/scottyab/AESCrypt-Android/blob/master/aescrypt/src/main/java/com/scottyab/aescrypt/AESCrypt.java
//ex. 
// String SecretKey = "1234567890123456";
// String iv = "1234567890123456";
// Log.w("secret", Base64.encodeToString(AESCrypt.encrypt(new SecretKeySpec(SecretKey.getBytes(), "AES"), iv.getBytes(), txt_secret.getText().toString().getBytes()), Base64.DEFAULT));
//
 
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
 
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
 
import android.util.Base64;
import android.util.Log;
 
/**
 * Encrypt and decrypt messages using AES 256 bit encryption that are compatible with AESCrypt-ObjC and AESCrypt Ruby.
 * <p/>
 * Created by scottab on 04/10/2014.
 */
public final class AESCrypt {
 
    private static final String TAG = "AESCrypt";
 
    //AESCrypt-ObjC uses CBC and PKCS7Padding
    private static final String AES_MODE = "AES/CBC/PKCS7Padding";
    private static final String CHARSET = "UTF-8";
 
    //AESCrypt-ObjC uses SHA-256 (and so a 256-bit key)
    private static final String HASH_ALGORITHM = "SHA-256";
 
    //AESCrypt-ObjC uses blank IV (not the best security, but the aim here is compatibility)
    private static final byte[] ivBytes = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
 
    //togglable log option (please turn off in live!)
    public static boolean DEBUG_LOG_ENABLED = false;
 
 
    /**
     * Generates SHA256 hash of the password which is used as key
     *
     * @param password used to generated key
     * @return SHA256 of the password
     */
    private static SecretKeySpec generateKey(final String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
        final MessageDigest digest = MessageDigest.getInstance(HASH_ALGORITHM);
        byte[] bytes = password.getBytes("UTF-8");
        digest.update(bytes, 0, bytes.length);
        byte[] key = digest.digest();
 
        log("SHA-256 key ", key);
 
        SecretKeySpec secretKeySpec = new SecretKeySpec(key, "AES");
        return secretKeySpec;
    }
 
 
    /**
     * Encrypt and encode message using 256-bit AES with key generated from password.
     *
     *
     * @param password used to generated key
     * @param message the thing you want to encrypt assumed String UTF-8
     * @return Base64 encoded CipherText
     * @throws GeneralSecurityException if problems occur during encryption
     */
    public static String encrypt(final String password, String message)
            throws GeneralSecurityException {
 
        try {
            final SecretKeySpec key = generateKey(password);
 
            log("message", message);
 
            byte[] cipherText = encrypt(key, ivBytes, message.getBytes(CHARSET));
 
            //NO_WRAP is important as was getting \n at the end
            String encoded = Base64.encodeToString(cipherText, Base64.NO_WRAP);
            log("Base64.NO_WRAP", encoded);
            return encoded;
        } catch (UnsupportedEncodingException e) {
            if (DEBUG_LOG_ENABLED)
                Log.e(TAG, "UnsupportedEncodingException ", e);
            throw new GeneralSecurityException(e);
        }
    }
 
 
    /**
     * More flexible AES encrypt that doesn't encode
     * @param key AES key typically 128, 192 or 256 bit
     * @param iv Initiation Vector
     * @param message in bytes (assumed it's already been decoded)
     * @return Encrypted cipher text (not encoded)
     * @throws GeneralSecurityException if something goes wrong during encryption
     */
    public static byte[] encrypt(final SecretKeySpec key, final byte[] iv, final byte[] message)
            throws GeneralSecurityException {
        final Cipher cipher = Cipher.getInstance(AES_MODE);
        IvParameterSpec ivSpec = new IvParameterSpec(iv);
        cipher.init(Cipher.ENCRYPT_MODE, key, ivSpec);
        byte[] cipherText = cipher.doFinal(message);
 
        log("cipherText", cipherText);
 
        return cipherText;
    }
 
 
    /**
     * Decrypt and decode ciphertext using 256-bit AES with key generated from password
     *
     * @param password used to generated key
     * @param base64EncodedCipherText the encrpyted message encoded with base64
     * @return message in Plain text (String UTF-8)
     * @throws GeneralSecurityException if there's an issue decrypting
     */
    public static String decrypt(final String password, String base64EncodedCipherText)
            throws GeneralSecurityException {
 
        try {
            final SecretKeySpec key = generateKey(password);
 
            log("base64EncodedCipherText", base64EncodedCipherText);
            byte[] decodedCipherText = Base64.decode(base64EncodedCipherText, Base64.NO_WRAP);
            log("decodedCipherText", decodedCipherText);
 
            byte[] decryptedBytes = decrypt(key, ivBytes, decodedCipherText);
 
            log("decryptedBytes", decryptedBytes);
            String message = new String(decryptedBytes, CHARSET);
            log("message", message);
 
 
            return message;
        } catch (UnsupportedEncodingException e) {
            if (DEBUG_LOG_ENABLED)
                Log.e(TAG, "UnsupportedEncodingException ", e);
 
            throw new GeneralSecurityException(e);
        }
    }
 
 
    /**
     * More flexible AES decrypt that doesn't encode
     *
     * @param key AES key typically 128, 192 or 256 bit
     * @param iv Initiation Vector
     * @param decodedCipherText in bytes (assumed it's already been decoded)
     * @return Decrypted message cipher text (not encoded)
     * @throws GeneralSecurityException if something goes wrong during encryption
     */
    public static byte[] decrypt(final SecretKeySpec key, final byte[] iv, final byte[] decodedCipherText)
            throws GeneralSecurityException {
            final Cipher cipher = Cipher.getInstance(AES_MODE);
            IvParameterSpec ivSpec = new IvParameterSpec(iv);
            cipher.init(Cipher.DECRYPT_MODE, key, ivSpec);
            byte[] decryptedBytes = cipher.doFinal(decodedCipherText);
 
            log("decryptedBytes", decryptedBytes);
 
            return decryptedBytes;
    }
 
 
 
 
    private static void log(String what, byte[] bytes) {
        if (DEBUG_LOG_ENABLED)
            Log.d(TAG, what + "[" + bytes.length + "] [" + bytesToHex(bytes) + "]");
    }
 
    private static void log(String what, String value) {
        if (DEBUG_LOG_ENABLED)
            Log.d(TAG, what + "[" + value.length() + "] [" + value + "]");
    }
 
 
    /**
     * Converts byte array to hexidecimal useful for logging and fault finding
     * @param bytes
     * @return
     */
    private static String bytesToHex(byte[] bytes) {
        final char[] hexArray = {'0', '1', '2', '3', '4', '5', '6', '7', '8',
                '9', 'A', 'B', 'C', 'D', 'E', 'F'};
        char[] hexChars = new char[bytes.length * 2];
        int v;
        for (int j = 0; j < bytes.length; j++) {
            v = bytes[j] & 0xFF;
            hexChars[j * 2] = hexArray[v >>> 4];
            hexChars[j * 2 + 1] = hexArray[v & 0x0F];
        }
        return new String(hexChars);
    }
 
    private AESCrypt() {
    }
}
 
 

C# (decrypt)
//http://stackoverflow.com/a/3312475
//ex.
//private String iv = "1234567890123456"
//private String SecretKey = "1234567890123456";
//
//byte[] key = Encoding.ASCII.GetBytes(SecretKey);
//byte[] IV = Encoding.ASCII.GetBytes(iv);
//
//textBox2.Text = DecryptString("aVUl3oBJoool9IZk+WngHg==");
 
public String DecryptString(String cypher)
{
    String sRet = "";
    RijndaelManaged rj = new RijndaelManaged();
    try
    {
        byte[] message = Convert.FromBase64String(cypher);
        rj.Key = Encoding.ASCII.GetBytes(SecretKey);
        rj.IV = Encoding.ASCII.GetBytes(iv);
        MemoryStream ms = new MemoryStream(message);
 
        using (CryptoStream cs = new CryptoStream(ms, rj.CreateDecryptor(), CryptoStreamMode.Read))
        {
            using (StreamReader sr = new StreamReader(cs))
            {
                sRet = sr.ReadToEnd();
            }
        }
 
    }
    finally
    {
        rj.Clear();
    }
 
    return sRet;
 
}
 

 
PHP (encrypt)
//https://gist.github.com/RiANOl/1077723
<?php
    function aes128_cbc_encrypt($key, $data, $iv) {
      if(16 !== strlen($key)) $key = hash('MD5', $key, true);
      if(16 !== strlen($iv)) $iv = hash('MD5', $iv, true);
      $padding = 16 - (strlen($data) % 16);
      $data .= str_repeat(chr($padding), $padding);
      return mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $data, MCRYPT_MODE_CBC, $iv);
    }
 
    $text = "test";
    $key = "1234567890123456";
    $iv = '1234567890123456';
    echo base64_encode(aes128_cbc_encrypt($key,$text,$iv));
?>
 
 

java android (decrypt)
//https://github.com/scottyab/AESCrypt-Android/blob/master/aescrypt/src/main/java/com/scottyab/aescrypt/AESCrypt.java
String SecretKey = "1234567890123456";
String iv = "1234567890123456";
 
byte[] bytes = AESCrypt.decrypt(new SecretKeySpec(SecretKey.getBytes(), "AES"),iv.getBytes(), Base64.decode("KL4IZKl5ywjzNIoCgEHWCg==", Base64.DEFAULT));
Log.w("decrypt",new String(bytes, "UTF-8")) ;
 
 

C# (encrypt)
//http://stackoverflow.com/a/3312475
//textBox1.Text=EncryptString("this is a test!!\"τεστ");
public String EncryptString(String message)
{
    String sRet = "";
    RijndaelManaged rj = new RijndaelManaged();
    try
    {
        rj.Key = Encoding.ASCII.GetBytes(SecretKey);
        rj.IV = Encoding.ASCII.GetBytes(iv);
        MemoryStream ms = new MemoryStream();
 
        using (CryptoStream cs = new CryptoStream(ms, rj.CreateEncryptor(), CryptoStreamMode.Write))
        {
            using (StreamWriter sw = new StreamWriter(cs))
            {
                sw.Write(message);
            }
        }
        byte[] encoded = ms.ToArray();
        sRet = Convert.ToBase64String(encoded);
 
    }
    finally
    {
        rj.Clear();
    }
 
    return sRet;
}