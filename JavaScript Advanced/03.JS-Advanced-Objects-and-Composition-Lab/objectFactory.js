
function factory(library,orderArray) {
    let resultArray=[];
    //iterate over orders
    for(let index=0;index<orderArray.length;index++) {
        let currentOrderObj=orderArray[index];
        const template=currentOrderObj.template;
        const parts=currentOrderObj.parts;
        //create a new object with properties from currentOrderObj
        const newObj={};
        
        //iterate over template properties and copy them into the new object
        for (let prop in template) {
            newObj[prop]=template[prop];
        }
        //
        for (let part of parts) {
            newObj[part]=library[part];
        }

        
        /* newObj[currentOrderObj.template.name]=currentOrderObj.template.name;
        //iterate over currentOrderObj parts
        //with the names of the functions from parts,look through the library object and add 
        //the functions corresponding to those names to the newObj.
        for (let i=0;i<currentOrderObj.parts.length;i++) {
            newObj[currentOrderObj.parts[i]]=library[currentOrderObj.parts[i]];
        } */


        resultArray.push(newObj);
    }
    return resultArray;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];

  const products = factory(library, orders);
  console.log(products);
  