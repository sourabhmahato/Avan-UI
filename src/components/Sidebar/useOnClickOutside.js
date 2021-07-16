import { useCallback, useEffect } from "react";
export function useOnCLickOutside(ref, handler) {
  const optimizedHandler = useCallback(handler, []);
  useEffect(() => {
    const listner = (event) => {
      const logoId = document.getElementById("logo").id;
      const logoContainerId = document.getElementById("logo-container").id;
      const logoSvgId = document.getElementById("logo-svg").id;
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      if (
        event.target.id !== logoId &&
        event.target.id !== logoContainerId &&
        event.target.id !== logoSvgId
      ) {
        optimizedHandler(event);
      }
    };
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);
    return () => {
      document.addEventListener("mousedown", listner);
      document.addEventListener("touchstart", listner);
    };
  }, [ref, optimizedHandler]);
}
