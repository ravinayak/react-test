import React from "react";
import { logger } from "@app/lib/Logger";

export function Child() {
  logger.info("Child component rendered");
  return <div>Child Component</div>;
}
