var file = new java.io.File("C:\\Users\\003TLK744\\Documents\\NeoLoad Projects\\Art Mass_TestData\\CaptureSalesDocID.txt");
var writer = new java.io.FileWriter(file, true); // to append the next value to the file

var SaleDocNum = context.variableManager.getValue("c_capture_salesDoc");
writer.write(SaleDocNum + "\n");

writer.close();

logger.debug("value" +SaleDocNum + "has been written to example file");