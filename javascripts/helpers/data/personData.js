const persons = [
    {id: 'person1', name: 'Zoe Ames', isDead: false},
    {id: 'person2', name: 'Luke Lancaster', isDead: false},
    {id: 'person3', name: 'Mary West', isDead: false},
    {id: 'person4', name: 'Anca Simon', isDead: false},
    {id: 'person5', name: 'Beth Whitworth', isDead: false},
    {id: 'person6', name: 'Bethany Nielson', isDead: false},
    {id: 'person7', name: 'Chris Johnson', isDead: false},
    {id: 'person8', name: 'David Everett', isDead: false},
    {id: 'person9', name: 'Davis Lindell', isDead: false},
    {id: 'person10', name: 'Dylan Rowe', isDead: false},
    {id: 'person11', name: 'Joey Petrone', isDead: false},
    {id: 'person12', name: 'John Fleming', isDead: false},
    {id: 'person13', name: 'Jose Marquez', isDead: false},
    {id: 'person14', name: 'Kayla Melton', isDead: false},
    {id: 'person15', name: 'Ken McEastland', isDead: false},
    {id: 'person16', name: 'Liza Star', isDead: false},
    {id: 'person17', name: 'Michele Rawlins', isDead: false},
    {id: 'person18', name: 'Ola Oladinni', isDead: false},
    {id: 'person19', name: 'Sarah Holder', isDead: true},
    {id: 'person20', name: 'Todd Spainhour', isDead: true},
    {id: 'person21', name: 'Zac Crumpton', isDead: false},
    {id: 'person22', name: 'Steven Zelenak', isDead: true},
    {id: 'person23', name: 'Stephen Castanada', isDead: true},
    {id: 'person24', name: 'Monique Bass', isDead: false},
    {id: 'person25', name: 'Kayla Melton', isDead: false}
 
]

const getAlivePersons = () => {
    return persons.filter((x) => x.isDead === false);
};

const getDeadPersons = () => {
    return persons.filter((x) => x.isDead === true);
};

const randomMurder = () => {
    const alivePeople = getAlivePersons();
    const randomNum = Math.floor(Math.random() *alivePeople.length);
    const deadPersonId = alivePeople[randomNum].id;
    const deadMan = persons.findIndex((x) => x.id === deadPersonId);
    persons[deadMan].isDead = true;
}

const bringToLife = (personId) => {
    // console.log('it worked', .e);
    const itLives = persons.findIndex((x) => x.id === personId);
    persons[itLives].isDead = false;
    
}



export default { getAlivePersons, getDeadPersons, randomMurder, bringToLife };