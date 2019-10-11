SELECT @@VERSION

Result Set:

Microsoft SQL Server 2005 – 9.00.5000.00 (Intel X86)
       Dec 10 2010 10:56:29
       Copyright (c) 1988-2005 Microsoft Corporation
       Express Edition on Windows NT 6.0 (Build 6002: Service Pack 2)

Here the service pack reported is for Operating System. Service Pack for SQL Server can be identified by using SERVERPROPERTY() function as below, This returns SP4 which is the service pack level of SQL Server on my system:

SELECT SERVERPROPERTY('ProductLevel')

Result Set:

SP4

This has been "fixed" with SQL Server 2008+, @@VERSION now also returns service pack level for SQL Server:

SELECT @@VERSION

Result Set:

Microsoft SQL Server 2008 (SP3) – 10.0.5500.0 (Intel X86)
       Sep 22 2011 00:28:06
       Copyright (c) 1988-2008 Microsoft Corporation
       Enterprise Edition on Windows NT 6.0 <X86> (Build 6002: Service Pack 2)

As you can see from the output, both SQL Server and Windows service pack are displayed. You can use SERVERPROPERTY('ProductLevel') for a cleaner output.