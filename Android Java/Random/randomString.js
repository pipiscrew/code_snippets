//http://stackoverflow.com/questions/17196562/token-that-identify-the-user/17205999#17205999

//the call
 			RandomString randomString = new RandomString(36);
            System.out.println("RandomString>>>>" + randomString.nextString());

            String payload = randomString.nextString(); //scramble more!
            Log.e("Random generated Payload", ">>>>>" + payload);


//the class
package com.tc.contests.util;

import java.util.Random;

public class RandomString {

    private static final char[] symbols = new char[36];

    static {
        for (int idx = 0; idx < 10; ++idx)
            symbols[idx] = (char) ('0' + idx);
        for (int idx = 10; idx < 36; ++idx)
            symbols[idx] = (char) ('a' + idx - 10);
    }
    
    private final Random random = new Random();

    private final char[] buf;

    public RandomString(int length) {
        if (length < 1)
            throw new IllegalArgumentException("length < 1: " + length);
        
        buf = new char[length];
    }

    public String nextString() {
        for (int idx = 0; idx < buf.length; ++idx)
            buf[idx] = symbols[random.nextInt(symbols.length)];
        return new String(buf);
    }
}
