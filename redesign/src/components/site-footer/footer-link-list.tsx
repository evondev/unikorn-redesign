import type { FooterLinkGroup } from "@/types/navigation";

interface FooterLinkListProps {
  group: FooterLinkGroup;
}

export default function FooterLinkList({ group }: FooterLinkListProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {group.links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-muted outline-hidden hover:text-foreground">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
