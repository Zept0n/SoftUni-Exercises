function generateReport() {
    const rows = document.querySelectorAll(`tbody tr`); 
    const firstRow=Array.from(document.querySelectorAll(`thead th input`));  
    const output=document.getElementById(`output`);
    for(let index=0;index<firstRow.length;index++) {

    }

    let resultArray = [];
    console.log(firstRow);
    for (let row of rows) {
        //console.log(row)
        let employee = {};
        //[attribute=value]
        
        resultArray.push(employee);
    }
    output.textContent=JSON.stringify(resultArray);
}



/* const employeeColumn = document.querySelector(`[name=employee]`);
const departmentColumn = document.querySelector(`[name=deparment]`)
if (employeeColumn.checked == true) {
    employee['employee'] = row.children[0].textContent;
}
if (departmentColumn.checked == true) {
    employee['deparment'] = row.children[1].textContent;
}
let test = document.querySelector(`[name=status]`)
if (test.checked == true) {
    employee['status'] = row.children[2].textContent;
}
test = document.querySelector(`[name=dateHired]`)
if (test.checked == true) {
    employee['date hired'] = row.children[3].textContent;
}
test = document.querySelector(`[name=benefits]`)
if (test.checked == true) {
    employee['benefits'] = row.children[4].textContent;
}
test = document.querySelector(`[name=salary]`)
if (test.checked == true) {
    employee['compensation'] = row.children[5].textContent;
}
test = document.querySelector(`[name=rating]`)
if (test.checked == true) {
    employee['rating'] = row.children[6].textContent;
} */


    /*  <th>Employee <input type="checkbox" name="employee"></th>
                     <th>Department <input type="checkbox" name="deparment"></th>
                     <th>Status <input type="checkbox" name="status"></th>
                     <th>Date Hired <input type="checkbox" name="dateHired"></th>
                     <th>Benefits <input type="checkbox" name="benefits"></th>
                     <th>Compensation <input type="checkbox" name="salary"></th>
                     <th>Rating <input type="checkbox" name="rating"></th> */
    /* const [employeeArr,departmentArr,statusArr,dateHiredArr,benefitsArr,compensationArr,ratingArr]=[[],[],[],[],[],[],[]];
    for(let row of rows) {
        employeeArr.push(row.children[0]);
        departmentArr.push(row.children[1]);
        statusArr.push(row.children[2]);
        dateHiredArr.push(row.children[3]);
        benefitsArr.push(row.children[4]);
        compensationArr.push(row.children[5]);
        ratingArr.push(row.children[6]);
    }
    console.log(employeeArr,departmentArr,statusArr,dateHiredArr,benefitsArr,compensationArr,ratingArr) */