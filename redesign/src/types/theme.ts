import type { LucideIcon } from "lucide-react";

export type ThemePreference = "light" | "dark" | "system";

export interface ThemeOption {
  value: ThemePreference;
  label: string;
  icon: LucideIcon;
}
