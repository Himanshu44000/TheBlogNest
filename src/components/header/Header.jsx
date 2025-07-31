import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const NavItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Explore", slug: "/feed", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
<header className="absolute top-0 left-0 w-full z-50 bg-black/20 hover:backdrop-blur-sm py-2 sm:py-3">
      <Container>
        <nav className="flex flex-wrap items-center justify-between w-full gap-y-4">
          {/* Logo */}
          <div className="mr-4">
            <Link to="/">
              <Logo width="50px" />
            </Link>
          </div>

          {/* Nav Links + Logout */}
          <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-white ml-auto">
            {NavItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="hover:text-gray-300 font-medium transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li className="shrink-0">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;