//https://docs.microsoft.com/en-us/dotnet/api/system.transactions.transactionscope?view=netframework-4.0
try
{
    using (TransactionScope scope = new TransactionScope())
    {
        // Do Operation 1
        // Do Operation 2
        //...
  
        // if all the coperations complete successfully, this would be called and commit the trabsaction. 
        // In case of an exception, it wont be called and transaction is rolled back
        scope.Complete();
    }
}
catch (ThreadAbortException ex)
{
    // Handle exception
}