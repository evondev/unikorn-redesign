import { needGroups } from "@/constants/need-groups";

export function getNeedGroup(needGroupId: string) {
  const needGroup = needGroups.find((group) => group.id === needGroupId);

  if (!needGroup) throw new Error(`Không có nhóm việc "${needGroupId}"`);

  return needGroup;
}
