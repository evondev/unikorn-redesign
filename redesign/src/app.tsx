import FeedPage from "@/features/feed/pages/feed-page";
import HomePage from "@/features/home/pages/home-page";

// Chưa có router: hai trang, chọn theo đường dẫn. Thêm trang thứ ba thì nên cài router.
export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/feed") return <FeedPage />;

  return <HomePage />;
}
