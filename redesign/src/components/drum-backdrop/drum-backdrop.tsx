import trongDongUrl from "@/assets/trong-dong.svg";

// Nửa dưới trống đồng sau header và hero, theo đúng trang gốc unikorn.vn:
// tâm trống nằm trên mép trang 100px nên chỉ thấy nửa dưới; từ md trống rộng bằng cột nội dung (1152px),
// màn hẹp rộng 300% màn để hoa văn còn đọc ra. Nền sáng nét đỏ nhạt, nền tối nét trắng mờ (token --drum-ink); quay một vòng mỗi 10 phút,
// đứng yên khi máy bật giảm chuyển động. SVG làm mask nên màu theo token.
export default function DrumBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[730px] overflow-hidden">
      {/* Khung 2:1 lo vị trí, trống vuông đặt top -100% nên tâm trống trùng mép trên khung (-100px).
          Tách hai khối để translate căn giữa và rotate không đè nhau. */}
      <div className="absolute -top-[100px] left-1/2 aspect-[2/1] w-[300%] -translate-x-1/2 md:w-full md:max-w-6xl">
        <div
          style={{ maskImage: `url(${trongDongUrl})` }}
          className="absolute inset-x-0 -top-full aspect-square w-full bg-drum-ink [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] will-change-transform motion-safe:animate-[spin_600s_linear_infinite]"
        />
      </div>
    </div>
  );
}
