import { useCallback, useEffect, useState } from "react";

import { defaultThemePreference, themeStorageKey } from "@/constants/theme-options";
import type { ThemePreference } from "@/types/theme";

const darkQuery = "(prefers-color-scheme: dark)";

function readStoredPreference(): ThemePreference {
  try {
    const storedValue = localStorage.getItem(themeStorageKey);
    if (storedValue === "light" || storedValue === "dark" || storedValue === "system") return storedValue;
  } catch {
    // Trình duyệt chặn localStorage (chế độ riêng tư): dùng mặc định.
  }

  return defaultThemePreference;
}

function isDarkPreference(preference: ThemePreference) {
  return preference === "dark" || (preference === "system" && window.matchMedia(darkQuery).matches);
}

// Gắn .dark lên <html>; tắt transition một nhịp để cả trang lật cùng lúc (M31).
function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;

  root.classList.add("theme-switching");
  root.classList.toggle("dark", isDarkPreference(preference));
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(readStoredPreference);
  const [isDark, setIsDark] = useState(() => isDarkPreference(readStoredPreference()));

  useEffect(() => {
    applyTheme(preference);
    setIsDark(isDarkPreference(preference));

    if (preference !== "system") return;

    // Đang theo hệ thống thì nghe máy đổi sáng/tối.
    const mediaQueryList = window.matchMedia(darkQuery);

    function handleSystemChange() {
      applyTheme("system");
      setIsDark(mediaQueryList.matches);
    }

    mediaQueryList.addEventListener("change", handleSystemChange);

    return () => mediaQueryList.removeEventListener("change", handleSystemChange);
  }, [preference]);

  const changePreference = useCallback((nextPreference: ThemePreference) => {
    try {
      localStorage.setItem(themeStorageKey, nextPreference);
    } catch {
      // Không lưu được thì vẫn đổi cho phiên này.
    }

    setPreference(nextPreference);
  }, []);

  return { preference, isDark, changePreference };
}
