function extract(fileLocation) {
let fileNameAndExtension=fileLocation.split("\\").pop();
let index=fileNameAndExtension.lastIndexOf(".")
let extension=fileNameAndExtension.substring(index).replace(".","");
//let extension=fileNameAndExtension.substring(index+1);
let fileName=fileNameAndExtension.substring(0,index);
console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}

extract('C:\\Internal\\training-internal\\Template.bak.pptx');
extract('C:\\Projects\\Data-Structures\\LinkedList.cs');