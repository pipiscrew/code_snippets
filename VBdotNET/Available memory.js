            Dim k2 = New PerformanceCounter("Memory", "Available MBytes")
            MsgBox("Available memory:  " & k2.NextValue() & "Mb")

'Performance Counter Definitions
'source : http://technet.microsoft.com/en-us/library/aa997156%28EXCHG.65%29.aspx            
**Available Mbytes
    Displays the amount of physical memory, in bytes, available to processes running on the computer.

**Bytes Total/sec
    The total rate of bytes transferred by the Web service. This counter is the sum of Bytes Sent/sec and Bytes Received/sec.

**Client Latency
    The latency of MAPI/remote procedure call (RPC) actions measured at the LoadSim/Microsoft® Office Outlook® client. This counter measures the time it takes for the server to fulfill the client request. It can be used to estimate the time a user would have to wait between initiating individual Outlook actions.

**Database\Database Cache Size
    The average amount of system memory used by the database cache manager to hold commonly used information from the database files to prevent file operations. If the database cache size seems too small for optimal performance and there is very little available memory on the system (see Memory/Available Mbytes), adding more memory to the system may increase performance. If there is a lot of available memory on the system and the database cache size is not growing beyond a certain point, the database cache size may be restricted to an artificially low limit. Increasing this limit may increase performance.

**DB Disk Transfers/sec
    The average sum of all random read/write input/output (I/O) operations to the Microsoft Exchange Database disk volumes (both .edb and .stm files).

**Disk Bytes/sec
    The average number of disk bytes written or read per second across all disk volumes.

**IMAP4 Connections
    The number of current Internet Message Access Protocol version 4rev1 (IMAP4) client connections.

**IMAP4 UID/sec
    The number of unique identifier (UID) commands per second.

**ISAPI Extension Requests/sec
    The number of requests per second for Outlook Web Access transactions.

**Log Writes/sec
    The average sum of all sequential write I/O operations to the Exchange log file disk volumes (.log files).

**MSExchangeIS Mailbox\Local Delivery Rate
    The average rate at which messages are delivered locally to the Exchange store.

**MSExchangeIS\RPC Operations/sec
    The rate at which RPC operations occur. This counter is a good rate counter to measure Exchange workload because all MAPI-based actions use the RPC protocol.

**MSExchangeIS\RPC Requests
    The number of client requests that are currently being processed by the Exchange store.

**Network Interface\Bytes Total/sec
    The average rate at which bytes are sent and received over each network adapter, including framing characters. Network Interface\Bytes Total/sec is the sum of Network Interface\Bytes Received/sec and Network Interface\Bytes Sent/sec.

**Network Usage
    Measures network traffic on the server going to and from the server's network adapter.

**POP3 DELE/sec
    The number of message delete commands per second.

**POP3 STAT/sec
    The number of STAT commands per second. A STAT command is issued once per each user's connection.

**Private Bytes
    Displays the current number of bytes this process has allocated that cannot be shared with other processes.

**Processor\% Processor Time
    The average percentage of elapsed time that the processor spends to execute a non-idle thread. It is calculated by measuring the duration of time the idle thread is active in the sample interval, and subtracting that time from the interval duration. (Each processor has an idle thread that consumes cycles when no other threads are ready to run.) This counter is the primary indicator of processor activity, and it displays the average percentage of busy time observed during the sample interval.

**SMTP Local Queue
    The number of messages in the local queue waiting delivery to local users.

**SMTP Messages Del/sec
    The number of messages being delivered each second to local users.

**SMTP Messages Sent/sec
    The number of messages being sent each second to a remote server.

**Store Virtual Bytes
    The average size, in bytes, of the virtual address space that the Store.exe process is using. Use of virtual address space does not necessarily imply corresponding use of either disk or main memory pages. Virtual space is finite, and the process can limit its ability to load libraries.

**System\Context Switches/sec
    The combined average rate at which all processors in the computer are switched from one thread to another. Context switches occur when a running thread voluntarily relinquishes the processor, is preempted by a higher priority ready thread, or switches between user-mode and privileged (kernel) mode to use an Executive or subsystem service. This counter is the sum of Thread\Context Switches/sec for all threads running on all processors in the computer, and it is measured in numbers of switches. There are context switch counters on the System and Thread objects. This counter displays the difference between the values observed in the last two samples, divided by the duration of the sample interval.

**Web ISAPI Extension Requests/sec
    The rate at which Internet Server Application Programming Interface (ISAPI) extension requests are received by the Web service. Internet server API requests are used by Outlook Web Access to access the Exchange server.

**Working Set
    The set of memory pages (areas of memory allocated to a process) recently used by the threads in a process. If available memory on the server is above a specified threshold, pages remain in the Working Set of a process even if they are not in use. When available memory falls below a specified threshold, pages are removed from the Working Set. If these pages are needed, they will be returned back to the Working Set before they leave main memory and are made available for other processes to use.
