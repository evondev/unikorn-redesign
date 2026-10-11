// Logo tạm: ô trắng bo góc như logo thật của site, ".vn" đỏ theo vai chữ nhấn. Có file logo thật thì thay ô chữ "U".
export default function Logo() {
  return (
    <a href="/" className="flex shrink-0 items-center gap-2 outline-hidden" aria-label="Unikorn.vn, trang chủ">
      <span
        className="grid size-8 place-items-center rounded-lg bg-foreground text-sm font-bold text-background"
        aria-hidden="true"
      >
        U
      </span>
      <span className="text-base font-semibold text-foreground">
        Unikorn<span className="text-brand">.vn</span>
      </span>
    </a>
  );
}
