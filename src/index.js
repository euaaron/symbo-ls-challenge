"use strict";

import { create } from "smbls";

import designSystem from "./shared/designSystem";
import components from "./shared/components";
import pages from "./App/pages";
import { App } from "./App/app";

create(
  App,
  {
    designSystem,
    components,
    pages,
  }
);
