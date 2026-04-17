import type { SkillCategory as SkillCategoryType } from "@/types";
import { Badge } from "@/components/ui/Badge";
import styles from "./SkillCategory.module.css";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className={styles.category}>
      <h3 className={styles.name}>{category.name}</h3>
      <div className={styles.skills}>
        {category.skills.map((skill) => (
          <Badge key={skill} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
