export function Welcome({ name , age }) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      {age >= 18 && <p>You are {age} years old.</p>}
      {age && <p>You are {age} years old.</p>}
      {age> 18 < 65 && <p>You are too young!</p>}
      { name === 'John' && age > 18 < 65 && <p>you are {age} years old.</p>}
    </div>
  );
}
