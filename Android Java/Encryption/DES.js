//https://gist.github.com/aogilvie/6267013#file-string_encrypt_decrypt-md

//Encrypt It

private static String cryptoPass = "sup3rS3xy";

public static String encryptIt(String value) {
    try {
        DESKeySpec keySpec = new DESKeySpec(cryptoPass.getBytes("UTF8"));
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        SecretKey key = keyFactory.generateSecret(keySpec);

        byte[] clearText = value.getBytes("UTF8");
        // Cipher is not thread safe
        Cipher cipher = Cipher.getInstance("DES");
        cipher.init(Cipher.ENCRYPT_MODE, key);

        String encrypedValue = Base64.encodeToString(cipher.doFinal(clearText), Base64.DEFAULT);
        Log.d(TAG, "Encrypted: " + value + " -> " + encrypedValue);
        return encrypedValue;

    } catch (InvalidKeyException e) {
        e.printStackTrace();
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    } catch (InvalidKeySpecException e) {
        e.printStackTrace();
    } catch (NoSuchAlgorithmException e) {
        e.printStackTrace();
    } catch (BadPaddingException e) {
        e.printStackTrace();
    } catch (NoSuchPaddingException e) {
        e.printStackTrace();
    } catch (IllegalBlockSizeException e) {
        e.printStackTrace();
    }
    return value;
}; 


//Decrypt It

private static String cryptoPass = "sup3rS3xy";

public static String decryptIt(String value) {
    try {
        DESKeySpec keySpec = new DESKeySpec(cryptoPass.getBytes("UTF8"));
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        SecretKey key = keyFactory.generateSecret(keySpec);

        byte[] encrypedPwdBytes = Base64.decode(value, Base64.DEFAULT);
        // cipher is not thread safe
        Cipher cipher = Cipher.getInstance("DES");
        cipher.init(Cipher.DECRYPT_MODE, key);
        byte[] decrypedValueBytes = (cipher.doFinal(encrypedPwdBytes));

        String decrypedValue = new String(decrypedValueBytes);
        Log.d(TAG, "Decrypted: " + value + " -> " + decrypedValue);
        return decrypedValue;

    } catch (InvalidKeyException e) {
        e.printStackTrace();
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    } catch (InvalidKeySpecException e) {
        e.printStackTrace();
    } catch (NoSuchAlgorithmException e) {
        e.printStackTrace();
    } catch (BadPaddingException e) {
        e.printStackTrace();
    } catch (NoSuchPaddingException e) {
        e.printStackTrace();
    } catch (IllegalBlockSizeException e) {
        e.printStackTrace();
    }
    return value;
} 