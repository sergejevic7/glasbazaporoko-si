/**
 * Na podstraneh hash-povezave postanejo `/ #sekacija`, da delujejo iz `/zasebnost` itd.
 */
export function siteHashHref(pathname: string, hash: string): string {
  if (!hash.startsWith("#")) return hash;
  return pathname === "/" ? hash : `/${hash}`;
}

export function siteHomeHref(pathname: string): string {
  return pathname === "/" ? "#vrh" : "/";
}
