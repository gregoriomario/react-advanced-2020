import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPerson] = React.useState(data)

  const removePerson = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPerson(newPeople)
  }

  return (
    <>
    {people.map((person) => {
      const {id, name} = person
      return ( 
      <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
      );
    })}
      <button className="btn" onClick={() => setPerson([])}>testing</button>
    </>
  );
};

export default UseStateArray;
