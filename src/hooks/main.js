import { useState, useEffect } from "react";

export const useSelect = (options, pick, handlePick) => {
    const value = pick ? { value: pick, label: pick } : null;

    const onChange = (selected) => handlePick(selected);

    const theme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: "#EDBABBff",
            primary: "#8D6467ff",
            neutral0: "#090E10ff",
            neutral80: "white",
        },
    });

    return {
        options,
        defaultValue: null,
        value,
        onChange,
        theme,
    };
};

export const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => removeEventListener("scroll", handleResize);
    });

    return width;
};

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(window.scrollY);

    const handleScroll = () => setScrollPosition(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => removeEventListener("scroll", handleScroll);
    }, [scrollPosition]);

    return scrollPosition;
};

export const usePaddingTop = (headerRef) => {
    const scrollPosition = useScrollPosition();

    const [paddingTop, setPaddingTop] = useState();
    useEffect(() => {
        const height = headerRef.current.offsetHeight;
        const padding = scrollPosition > 10 ? height * 1.76 : height;
        setPaddingTop(padding);
    }, []);

    return paddingTop;
};
