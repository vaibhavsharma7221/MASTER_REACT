import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['bruce', 'clark', 'diana', 'bruce']
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
    const NameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>
    )
    return <div>{NameList}</div>;
}

export default NameList;
