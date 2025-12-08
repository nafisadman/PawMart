import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `PawMart | ${title}`;
    }, [title]);
};

export default useTitle;