export const Person = ({ person }) => {
  let partnerStatus = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerStatus = `${person.partnerName} is my wife`;
    } else {
      partnerStatus = `${person.partnerName} is my husband`;
    }
  } else {
    partnerStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
