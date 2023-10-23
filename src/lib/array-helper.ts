
export function genericSort<T>(getValue: (item: T) => number, orderBy: 'asc' | 'desc'  = 'asc') {
  return (a: T, b: T) => {
    if (getValue(a) < getValue(b)) {
      return orderBy === 'asc' ? -1 : 1;
    }
    if (getValue(a) > getValue(b)) {
      return orderBy === 'asc' ? 1 : -1;
    }
    return 0;
  }
}