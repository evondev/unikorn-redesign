import { Monitor, Moon, Sun } from "lucide-react";

import type { ThemeOption, ThemePreference } from "@/types/theme";

// Khoá lưu lựa chọn; script trong index.html đọc cùng khoá này để áp theme trước khi vẽ.
export const themeStorageKey = "unikorn-theme";

// Mặc định Sáng theo hướng đã duyệt cho người dùng phổ thông (luật M31 của skill mặc định Hệ thống).
export const defaultThemePreference: ThemePreference = "light";

export const themeOptions: ThemeOption[] = [
  { value: "light", label: "Sáng", icon: Sun },
  { value: "dark", label: "Tối", icon: Moon },
  { value: "system", label: "Theo hệ thống", icon: Monitor },
];
