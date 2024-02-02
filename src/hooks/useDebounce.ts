import { useCallback, useRef } from 'react'

export default function useDebounce(callback: any, delay: number) {
   const timer = useRef()

   const deboucedCallback = useCallback(
      (...args: any[]) => {
         if (timer.current) {
            clearTimeout(timer.current)
         }
         //@ts-ignore
         timer.current = setTimeout(() => {
            callback(...args)
         }, delay)
      },
      [callback, delay],
   )

   return deboucedCallback
}
