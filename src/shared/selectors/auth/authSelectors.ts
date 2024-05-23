import type { RootState } from "@app/store";

export const getUserIsInit = (state: RootState) => state.auth.isInit;