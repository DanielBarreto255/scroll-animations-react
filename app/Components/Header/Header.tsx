"use client";

import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaBookReader } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import { GiCrocSword } from "react-icons/gi";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={46} />
          <h2>Elden Ring</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="search" />
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Builds</a>
          </li>
          <li>
            <a href="#">World</a>
          </li>
          <li>
            <a href="#">Lore</a>
          </li>
          <Button name="Search" icon={<FaBookReader />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>In the search for the elden ring</h1>
          <p>
            Tarnished, heed the call! Venture into the Lands Between, where
            legends are wrought and destinies forged. Embrace thy fate and
            become the Elden Lord.
          </p>
          <div className="buttons">
            <Button
              name="Go Forth Tarnished"
              background="#fa9337"
              color="#fff"
              border="1px solid #f2994a"
              icon={<GiCrocSword />}
            />
          </div>
        </div>
        <div className="image-content">
          <div className="image">
            <Image
              src="/images/cover.png"
              width={600}
              height={600}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
