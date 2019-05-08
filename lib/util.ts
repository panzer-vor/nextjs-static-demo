export const throttle = function (func: Function, wait: number) {
  let context = null
  let args = null
  let result = null
  let timeout = 0
  let previous = 0
  const later = () => {
    previous = new Date().getTime()
    timeout = undefined
    result = func.apply(context, args)
    if (!timeout) {
      context = args = null
    }
  };
  return function() {
    const now = new Date().getTime()
    const remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = 0
      }
      previous = now;
      result = func.apply(context, args)
      if (!timeout) {
        context = args = null
      }
    } else if (!timeout) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

export const sliceArray = (size: number, array: any[]) => {
  const result = [];
  for (let x = 0; x < Math.ceil(array.length / size); x++) {
      const start = x * size;
      const end = start + size;
      result.push(array.slice(start, end));
  }
  return result;
}

export const animaitonStep = (rate: number, now: number, end: number) => {
  if (Math.abs(now - end) < 1) {
    return end
  }
  return now + (end - now) / (rate || 2)
}