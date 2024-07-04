// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var SalesOrder = context.variableManager.getValue ("c_yc4_ZCDM_Order");

var lock= new java.util.concurrent.locks.ReentrantLock();

//Lock the file so that no two users can write at the same time
 lock.lock();

 //Create new or open existing file for writing
 var writer= new java.io.FileWriter("C:\\\\Users\\\\in005887\\\\Documents\\\\Performance Test data\\\\VA01\\\\created_salesOrderGT400.csv",true);
  //Write the following text to the above file
 writer.write(SalesOrder);
 writer.write("\r\n");
//Close the file
 writer.close();
 //Unlock the lock so that other users can write on it
 lock.unlock();