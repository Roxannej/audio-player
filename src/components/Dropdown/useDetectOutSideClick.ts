import { useState, useEffect } from 'react';

/**
 * 在元素外面点击后关闭下拉框
 */
export interface clickProps {
  el: any;
  initialState: boolean;
}
export const useDetectOutsideClick = ( el:any, initialState:any ) => {
  const [isActive, setIsActive] = useState<any>(initialState);

  useEffect(() => {
    const onClick = (e:any) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  // 这个return是把东西给返回出去
  return [isActive, setIsActive];
};

// export default useDetectOutsideClick;
