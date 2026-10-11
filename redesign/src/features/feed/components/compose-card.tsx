import { ChartColumn, Lightbulb } from "lucide-react";

import { Button } from "@/components/button";
import { ListCard } from "@/components/list-card";

interface ComposeCardProps {
  onCreatePoll?: () => void;
  onShareIdea?: () => void;
}

export default function ComposeCard({ onCreatePoll, onShareIdea }: ComposeCardProps) {
  return (
    <ListCard title="Đăng bài">
      <div className="grid grid-cols-2 gap-2 border-t border-border px-5 py-4">
        <Button variant="outline" icon={ChartColumn} onClick={onCreatePoll}>
          Khảo sát
        </Button>
        <Button variant="outline" icon={Lightbulb} onClick={onShareIdea}>
          Ý tưởng
        </Button>
      </div>
    </ListCard>
  );
}
