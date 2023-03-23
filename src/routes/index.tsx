import { component$ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();

  return (
    <div class="main">
      <button onClick$={() => navigate("/child/")}>Go to child page</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
