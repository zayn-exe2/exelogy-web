import { useEffect } from "react";

type JsonLdProps = {
  /** Unique id so multiple JsonLd instances on one page don't collide. */
  id: string;
  data: object;
};

export default function JsonLd({ id, data }: JsonLdProps) {
  useEffect(() => {
    let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      document.head.querySelector<HTMLScriptElement>(`script#${id}`)?.remove();
    };
  }, [id, data]);

  return null;
}
