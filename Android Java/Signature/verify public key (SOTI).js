

//the call
		try {
			final CertificateDetector detector = new CertificateDetector(LoginActivity.this.getPackageManager());
			if (!detector.getSignatureHash(LoginActivity.this.getPackageName()).equalsIgnoreCase("DB585618479631A0F30037313664DF73B36335E2"))
			{	complain("New version is available!\r\nYou should download it!");
				return;
			}


		} catch (Exception ex) {
			System.exit(0);
		}



//CertificateDetector class
package com.tc.contests;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

public class CertificateDetector

{

	public static final String ALGORITHM = "SHA-1";

	private final PackageManager packageManager;

	public CertificateDetector(final PackageManager packageManager) {
		super();
		this.packageManager = packageManager;
	}

	private PackageInfo getPackageInfo(final String s)  {
		try {
			final PackageInfo packageInfo = this.packageManager.getPackageInfo(s, 64);
			return packageInfo;
		}
		catch (Exception ex) {
			return null;
		}
	}

	public static String byteArrayToHex(final byte[] array) {

		if (array == null) {
			return null;
		}

		final StringBuilder sb = new StringBuilder(2 * array.length);

		for (int length = array.length, i = 0; i < length; ++i) {
			sb.append(String.format("%02X", array[i]));
		}
		return sb.toString();
	}

	public String getSignatureHash(final String s) {
		final PackageInfo packageInfo = this.getPackageInfo(s);

		try {
			final MessageDigest instance = MessageDigest.getInstance("SHA-1");

			if (packageInfo.signatures.length > 0) {
				instance.update(packageInfo.signatures[0].toByteArray());
			} else {
				instance.update("".getBytes());
			}
			return byteArrayToHex(instance.digest());
		} catch (NoSuchAlgorithmException ex) {
			return String.valueOf(packageInfo.signatures[0].hashCode());
		}
	}
}




--------------------------------------------------------------
original :

package net.soti.mobicontrol.certificate;

import java.security.NoSuchAlgorithmException;
import android.util.Log;
import net.soti.mobicontrol.util.StringUtils;
import java.security.MessageDigest;
import android.content.pm.PackageManager$NameNotFoundException;
import net.soti.mobicontrol.util.Assert;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

public class CertificateDetector
{
    public static final String ALGORITHM = "SHA-1";
    private final PackageManager packageManager;
    
    public CertificateDetector(final PackageManager packageManager) {
        super();
        this.packageManager = packageManager;
    }
    
    private PackageInfo getPackageInfo(final String s) throws SignatureNotFoundException {
        try {
            Assert.notNull(s, "packageName parameter can't be null.");
            final PackageInfo packageInfo = this.packageManager.getPackageInfo(s, 64);
            Assert.state(packageInfo != null, "packageInfo can't be null for package " + s);
            return packageInfo;
        }
        catch (PackageManager$NameNotFoundException ex) {
            throw new SignatureNotFoundException("unable to find android package to get signature : ", (Throwable)ex);
        }
    }
    
    public String getSignatureHash(final String s) throws SignatureNotFoundException {
        final PackageInfo packageInfo = this.getPackageInfo(s);
        try {
            final MessageDigest instance = MessageDigest.getInstance("SHA-1");
            if (packageInfo.signatures.length > 0) {
                instance.update(packageInfo.signatures[0].toByteArray());
            }
            else {
                instance.update("".getBytes());
            }
            return StringUtils.byteArrayToHex(instance.digest());
        }
        catch (NoSuchAlgorithmException ex) {
            Log.e("soti", "No SHA-1 implementation on a device?");
            return String.valueOf(packageInfo.signatures[0].hashCode());
        }
    }
}




package net.soti.mobicontrol.certificate;

import net.soti.mobicontrol.MobiControlException;

public class SignatureNotFoundException extends MobiControlException
{
    public SignatureNotFoundException(final String s, final Throwable t) {
        super(s, t);
    }
}


    public static String byteArrayToHex(final byte[] array) {
        if (array == null) {
            return null;
        }
        final StringBuilder sb = new StringBuilder(2 * array.length);
        for (int length = array.length, i = 0; i < length; ++i) {
            sb.append(String.format("%02X", array[i]));
        }
        return sb.toString();
    }