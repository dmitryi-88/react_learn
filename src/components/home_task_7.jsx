import { useState, useEffect, useLayoutEffect, useRef } from "react";

function ResizableBox() {
    const squareRef = useRef(null);

    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    const updateSize = () => {
        const rect = squareRef.current.getBoundingClientRect();

        console.log("Обновлянем размеры");

        setSize({
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        });
    };

    useEffect(() => {
        console.log("Сработал useEffect");

        updateSize();

        window.addEventListener("resize", updateSize);

        return () => {
            console.log("сработал cleanup");

            window.removeEventListener("resize", updateSize);
        };
    }, []);

    console.log("Render");

    return (
        <>
            <div
                ref={squareRef}
                style={{
                    width: "60%",
                    height: "200px",
                    background: "skyblue",
                }}
            />
            <p>
                Ширина: {size.width}px, Высота: {size.height}px
            </p>
        </>
    );
}

export default ResizableBox;
