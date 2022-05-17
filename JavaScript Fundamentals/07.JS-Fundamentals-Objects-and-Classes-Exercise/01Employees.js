function employ(input) {
    let employeeList= {};
    for(let index=0;index<input.length;index++) {
        employeeList.name=input[index];
        employeeList.number=input[index].length;
        console.log(`Name: ${employeeList.name} -- Personal Number: ${employeeList.number}`);

        
    }
}

employ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)

employ([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)