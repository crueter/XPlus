import { patchHalves } from "../patch.ts";
import { extern_HeartBeat } from "./externs.ts";

export let API: any;

extern_HeartBeat.then(exports => patchHalves(exports, "S1", (_, [api]) => API = api));
