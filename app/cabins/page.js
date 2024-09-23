import Counter from '@/components/Counter';

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Cabin page data</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <Counter user={data} />
    </div>
  );
}
