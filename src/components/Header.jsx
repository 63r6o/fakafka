import { forwardRef } from "react";
import { useScrollPosition } from "../hooks/main";

const Header = forwardRef((props, ref) => {
  const scrollPosition = useScrollPosition();

  return (
    <header ref={ref}>
      <h1 className={scrollPosition > 10 ? "wordmark stuck" : "wordmark"}>
        fakafka
      </h1>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
