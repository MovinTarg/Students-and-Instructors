var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
function getName(arr) {
    for (var i = 0; i <arr.length; i++) {
        console.log(arr[i].first_name + " " + arr[i].last_name);
    }
}
getName(students);

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
}
function getUser() {
    for (var group in users) {
        console.log(group);
        for (var i = 0; i < users[group].length; i++) {
            var nameLength = users[group][i].first_name + users[group][i].last_name;
            console.log(i+1 + " - " + users[group][i].first_name + users[group][i].last_name + " - " + nameLength.length);
        }
    }
}
getUser(users);