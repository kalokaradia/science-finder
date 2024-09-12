"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky left-0 right-0 top-0 z-[9999] border-b-2 border-blue-500 bg-blue-500/50 shadow-lg backdrop-blur-sm">
			<div className="container flex w-full items-center justify-between px-10 py-4">
				<Link href={"/"} className="text-3xl font-bold uppercase">
					Science Finder
				</Link>

				<nav className="hidden w-1/2 items-center justify-between text-xl sm:flex">
					<Link href={"/"}>Home</Link>
					<Link href={"/tentang"}>About</Link>
					<Link href={"/obrol"}>Chat</Link>
					<Link href={"/daftar"}>List</Link>
					{/* COMING SOON FEATURE */}
					{/* <span className="cursor-pointer rounded border-[1px] border-blue-700 bg-blue-400 p-1 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
							/>
						</svg>
					</span> */}
				</nav>

				<span
					className="cursor-pointer rounded border-[1px] border-blue-700 bg-blue-400 p-1 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow sm:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-8 w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</span>
			</div>

			<div
				className={`fixed left-0 top-0 h-screen w-[75%] bg-blue-400 text-xl transition-transform duration-300 ease-in-out ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				} flex flex-col items-center justify-center *:flex *:h-full *:items-center *:justify-center sm:hidden`}
			>
				<Link href={"/"} onClick={() => setMenuOpen(false)}>
					Home
				</Link>
				<Link href={"/tentang"} onClick={() => setMenuOpen(false)}>
					About
				</Link>
				<Link href={"/obrol"} onClick={() => setMenuOpen(false)}>
					Chat
				</Link>
				<Link href={"/daftar"} onClick={() => setMenuOpen(false)}>
					List
				</Link>
				<span
					className="cursor-pointer p-4"
					onClick={() => setMenuOpen(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
						/>
					</svg>
				</span>
			</div>
		</header>
	);
}
