import {gitConfig} from "@/lib/layout.shared";
import {EditIcon} from "lucide-react";
import React from "react";

interface EditOnGithubProps {
  pagePath: string;
}

export function EditOnGithub({pagePath}: EditOnGithubProps): React.ReactElement {
  return (
      <a
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/main/content/docs/${pagePath}`}
          rel="noreferrer noopener"
          target="_blank"
          className="w-fit inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-medium text-fd-secondary-foreground bg-fd-secondary transition-colors hover:text-fd-accent-foreground hover:bg-fd-accent no-underline"
      >
        <EditIcon className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Edit on GitHub</span>
      </a>
  );
}
