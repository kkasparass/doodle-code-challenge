"use client";
import { ReactNode, useEffect, useRef } from "react";
import { Tooltip, TooltipRefProps } from "react-tooltip";

const Header = ({ isError }: { isError?: boolean }) => {
  const tooltipRef = useRef<TooltipRefProps>(null);

  useEffect(() => {
    if (isError) tooltipRef.current?.open();
  }, [isError]);

  return (
    <div>
      <p
        data-tooltip-id="header-tooltip"
        data-tooltip-content="Could not retrieve chat, please try again later"
      >
        Top Tier Work Group
      </p>
      <Tooltip
        ref={tooltipRef}
        place="bottom"
        className="bg-red-500! font-medium"
        id="header-tooltip"
        openEvents={{}}
      />
    </div>
  );
};

export default Header;
