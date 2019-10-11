//ant build file
	X:\apache-ant-1.9.3\bin
	ant -D"file.encoding=UTF-8" release -buildfile "D:\Program Files\eclipseWorkspace\com.tc.contests"

//PRJ\proguard-project.txt
	# ProGuard Configuration file
	#
	# See http://proguard.sourceforge.net/index.html#manual/usage.html
	
	#set classes name
	#applymapping mapping.txt
	
	-assumenosideeffects class android.util.Log { public * ; }
	
	#bugsense - https://www.bugsense.com/docs/android#proguard-support
	-dontusemixedcaseclassnames
	-dontskipnonpubliclibraryclasses
	-dontskipnonpubliclibraryclassmembers
	#dontpreverify
	#verbose
	#-flattenpackagehierarchy com.tc.contests
	-repackageclasses
	-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*
	
	-optimizationpasses 5
	-printmapping out.map
	-renamesourcefileattribute SourceFile
	
	
	#flurry
	-keep class com.flurry.** { *; }
	-dontwarn com.flurry.**
	-keepclasseswithmembers class * {
	public <init>(android.content.Context, android.util.AttributeSet, int);
	}
	
	
	
	#firebase - needs Signature
	-keepattributes Signature,SourceFile,LineNumberTable
	
	-keep public class * extends android.app.Activity
	-keep public class * extends android.app.Application
	-keep public class * extends android.app.Service
	-keep public class * extends android.content.BroadcastReceiver
	-keep public class * extends android.content.ContentProvider
	-keep public class * extends android.app.backup.BackupAgentHelper
	-keep public class * extends android.preference.Preference
	
	
	-keep class com.bugsense.** { *; }
	-keep class org.shaded.apache.** { *; }
	-keep class org.brickred.** { *; }
	
	
	#firebase
	-keepnames class com.shaded.fasterxml.jackson.** { *; }
	
	#picasso
	-dontwarn com.squareup.okhttp.**
	
	#socialauth
	-dontwarn org.brickred.**
	
	#firebase
	-dontwarn  com.shaded.fasterxml.jackson.databind.ext.DOMSerializer
	
	-dontwarn com.google.android.gms.**
	-dontwarn org.apache.**
	-dontwarn org.shaded.apache.**
	
//PRJ\ant.properties
	key.store.password=wF53D1bjp2xDOpeL
	key.alias.password=W22bKcKt81MqCwUH
	key.store=D:\\Program Files\\eclipseWorkspace\\com.tc.contestsSIGN\\private
	key.alias=tc
	
//PRJ\project.properties
	proguard.config=${sdk.dir}/tools/proguard/proguard-android.txt:proguard-project.txt
	
	target=android-16
	android.library.reference.1=../google-play-services_lib
	
//PRJ\build.xml (created by androidSDK\tools\android update project --target android-16 --subprojects --path "path to your java project" build.xml generated+modded)
	<?xml version="1.0" encoding="UTF-8"?>
	<project name="com.tc.contests" default="help">
	 <delete dir="bin"/>
	    <property file="local.properties" />
	    <property file="ant.properties" />
	    <property environment="env" />
	    <condition property="sdk.dir" value="${env.ANDROID_HOME}">
	        <isset property="env.ANDROID_HOME" />
	    </condition>
	    <loadproperties srcFile="project.properties" />
	
	    <!-- quick check on sdk.dir -->
	    <fail
	            message="sdk.dir is missing. Make sure to generate local.properties using 'android update project' or to inject it through the ANDROID_HOME environment variable."
	            unless="sdk.dir"
	    />
	
	    <import file="custom_rules.xml" optional="true" />
	
	    <!-- version-tag: 1 -->
	    <import file="${sdk.dir}/tools/ant/build.xml" />
	
	</project>
