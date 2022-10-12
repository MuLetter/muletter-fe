import { authState } from "@store/atom";
import { white } from "@styles/color";
import { P1, P3 } from "@styles/font";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { INavItem, NavItems } from "./NavItems";
import { NavStyleProps, NavItemStyleProps } from "./types";

function NavItem({ title, to, isActive }: INavItem & NavItemStyleProps) {
  return (
    <Link to={to}>
      <li className={isActive ? "active" : ""}>
        <P3>
          {title}
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <circle
              cx={6}
              cy={6}
              r={4.5}
              stroke={white[700]}
              strokeWidth={3}
              fill="none"
            />
          </svg>
        </P3>
      </li>
    </Link>
  );
}

function Logout() {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authState);

  const onLogout = React.useCallback(() => {
    localStorage.removeItem("muletter-token");

    navigate("/", { replace: true });
    setAuth(null);
  }, [navigate, setAuth]);

  return (
    <button onClick={onLogout}>
      <li>
        <P3>
          로그아웃
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <circle
              cx={6}
              cy={6}
              r={4.5}
              stroke={white[700]}
              strokeWidth={3}
              fill="none"
            />
          </svg>
        </P3>
      </li>
    </button>
  );
}

export default function Nav({ nickname }: NavStyleProps) {
  const { pathname } = useLocation();

  return (
    <NavBlock>
      <P1>
        Welcome! <b>{nickname}</b>
      </P1>
      <NavList>
        {NavItems.map((item, idx) => (
          <NavItem
            key={`nav-${idx}`}
            {...item}
            isActive={pathname.includes(item.to)}
          />
        ))}
        <Logout />
      </NavList>
    </NavBlock>
  );
}

const NavBlock = styled.div`
  color: ${white[500]};
  position: absolute;

  top: 45px;
  right: 80px;

  z-index: 2;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: 32px 0 0;
  row-gap: 8px;

  & > * {
    color: ${white[500]};
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  & li {
    & svg {
      margin: 0 0 0 8px;
    }
  }

  & li:hover,
  li.active {
    & circle {
      fill: white;
    }
  }
`;
