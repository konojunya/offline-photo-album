import { ThunkDispatch } from "../type";

type AnyActionFunc = (...args: any[]) => any;

export function dispatchable<T extends AnyActionFunc>(
  dispatch: ThunkDispatch<ReturnType<T>>,
  action: T
): T {
  return ((...args: any[]) => dispatch(action(...args))) as any;
}
