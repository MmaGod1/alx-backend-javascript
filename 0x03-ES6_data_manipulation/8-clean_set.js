export default function cleanSet(set, startString) {
  if (!startString) return '';
  return [...set].filter((s) => s.startsWith(startString)).map((s) => s.slice(startString.length)).join('-');
}
