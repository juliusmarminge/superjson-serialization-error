import SuperJSON from "superjson";

export const runtime = "edge";

export const GET = () => {
  const data = {
    foo: "bar",
    date: new Date(),
    map: new Map([["foo", "bar"]]),
    set: new Set(["foo", "bar"]),
  };

  return new Response(SuperJSON.stringify(data));
};
