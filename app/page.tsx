import SuperJSON from "superjson";

type Data = {
  foo: string;
  date: Date;
  map: Map<string, string>;
  set: Set<string>;
};

function baseUrl() {
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default async function Home() {
  const response = await fetch(baseUrl() + "/api/foo");
  const json = await response.json();
  console.log("got back from api route", json);

  const data = SuperJSON.deserialize<Data>(json);
  console.log("parsed as", data);

  return <h1>{data.foo}</h1>;
}
