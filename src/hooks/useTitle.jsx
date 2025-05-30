import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `PodOfCast | ${title}`;
  });
};

export default useTitle;
