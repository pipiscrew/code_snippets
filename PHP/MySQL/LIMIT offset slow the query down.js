//http://stackoverflow.com/questions/4481388/why-does-mysql-higher-limit-offset-slow-the-query-down
I had the exact same problem myself. Given the fact that u want to collect a large amount of this data and not a specific set of 30 u 'll be probably running a loop and incrementing the offset by 30.

So what you can do instead is:

1)Hold the last id of a set of data(30) (e.g. lastId = 530)
2)Add the condition "WHERE id > lastId limit 0,30"

So u can always have a ZERO offset. You will be amazed by the performance improvement.