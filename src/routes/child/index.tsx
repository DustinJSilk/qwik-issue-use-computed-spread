import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useDataLoader = routeLoader$(async () => {
  return {
    name: "my name",
  };
});

export default component$(() => {
  const data = useDataLoader();
  const updates = useSignal<Partial<{ name: string }>>({});
  const result = useComputed$(() => ({ ...data.value, ...updates.value }));

  return <div>{result.value.name}</div>;
});
