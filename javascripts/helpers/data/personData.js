const persons = [
    {id: 'person1', name: 'Zoe Ames', isDead: false},
    {id: 'person2', name: 'Luke Lancaster', isDead: false},
    {id: 'person3', name: 'Mary West', isDead: false},
    {id: 'person4', name: 'Anca Simon', isDead: false},
    {id: 'person5', name: 'Beth', isDead: false},
    {id: 'person6', name: 'Bethany', isDead: false},
    {id: 'person7', name: 'Chris', isDead: false},
    {id: 'person8', name: 'David', isDead: false},
    {id: 'person9', name: 'Davis', isDead: false},
    {id: 'person10', name: 'Dylan', isDead: false},
    {id: 'person11', name: 'Joey', isDead: false},
    {id: 'person12', name: 'John F', isDead: false},
    {id: 'person13', name: 'Jose', isDead: false},
    {id: 'person14', name: 'Kayla', isDead: false},
    {id: 'person15', name: 'Ken', isDead: false},
    {id: 'person16', name: 'Liza', isDead: false},
    {id: 'person17', name: 'Michele', isDead: false},
    {id: 'person18', name: 'Ola', isDead: false},
    {id: 'person19', name: 'Sarah', isDead: false},
    {id: 'person20', name: 'Todd', isDead: false},
    {id: 'person21', name: 'Zach', isDead: false},
    {id: 'person22', name: 'Steven Z', isDead: false},
    {id: 'person23', name: 'Stephen', isDead: false},
    {id: 'person24', name: 'Monique', isDead: false},
    {id: 'person25', name: 'Kayla', isDead: false}
 
]

const getAlivePersons = () => {
    return persons.filter((x) => x.isDead === false);
};

export default { getAlivePersons };