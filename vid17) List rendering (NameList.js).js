import React from 'react';
import Person from './Person';

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },

        {
            id: 2,
            name: 'Clark',
            skill: 'angular'
        },

        {
            id: 3,
            name: 'Diana',
            skill: 'vue'
        }

    ]
    const personList = persons.map(person =>
        <Person person={person} />
    )
    return <div>{personList}</div>;
}

export default NameList;
