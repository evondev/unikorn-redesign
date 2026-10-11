import { LayoutGrid } from "lucide-react";

// Ô cuối bản đồ là link sang trang danh mục, viền đứt để khác các ô chọn.
export default function AllCategoriesTile() {
  return (
    <a
      href="#"
      className="flex w-34 shrink-0 flex-col gap-3 rounded-2xl border border-dashed border-foreground/15 p-4 outline-hidden transition-colors hover:bg-item-hover md:w-auto"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-foreground/5 text-foreground/80">
        <LayoutGrid className="size-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground">Tất cả danh mục</span>
        <span className="mt-0.5 block text-xs text-muted">18 danh mục</span>
      </span>
    </a>
  );
}
