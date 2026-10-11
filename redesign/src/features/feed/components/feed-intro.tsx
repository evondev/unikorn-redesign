// Tên trang text-xl (budgets.md: tên trang xl ở mọi khổ), một câu nói bảng tin có gì.
export default function FeedIntro() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-xl font-semibold text-foreground">Bảng tin</h1>
      <p className="max-w-[60ch] text-sm text-muted text-pretty">
        App vừa ra mắt, người dùng nói gì và maker vừa cập nhật gì, từ cộng đồng 11.200 thành viên.
      </p>
    </div>
  );
}
