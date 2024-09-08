"use client";

import { useState, useRef, useEffect } from "react";

export default function App() {
	const [user, setUser] = useState("");
	const [data, setData] = useState("");
	const userRef = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://science-api.vercel.app/vocability.json",
			);
			const result = await response.json();

			// Ubah semua nama kosakata menjadi lowercase
			const normalizedData = result.map((vocab) => ({
				...vocab,
				name: vocab.name.toLowerCase(),
			}));

			const userInputLower = user.toLowerCase();
			const foundVocabulary = normalizedData.find(
				(vocab) => vocab.name === userInputLower,
			);
			if (foundVocabulary) {
				setData(foundVocabulary.description);
			} else {
				setData("Tidak ditemukan");
			}
		};
		if (user) {
			fetchData();
		}
	}, [user]);

	const handleSearch = (e) => {
		e.preventDefault();
		const fetchData = async () => {
			const response = await fetch(
				"https://science-api.vercel.app/vocability.json",
			);
			const result = await response.json();

			// Ubah semua nama kosakata menjadi lowercase
			const normalizedData = result.map((vocab) => ({
				...vocab,
				name: vocab.name.toLowerCase(),
			}));

			const userInputLower = user.toLowerCase();
			const foundVocabulary = normalizedData.find(
				(vocab) => vocab.name === userInputLower,
			);
			if (foundVocabulary) {
				setData(foundVocabulary.description);
			} else {
				setData("Tidak ditemukan");
			}
		};
		fetchData();
	};

	return (
		<section id="app" className="min-h-screen bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto px-4 py-8">
				<h1 className="mx-auto mb-4 w-fit rounded-lg bg-blue-500 px-10 py-5 text-center text-5xl font-bold uppercase text-white dark:bg-blue-700">
					Science Finder
				</h1>

				<p className="mt-10 text-center text-2xl font-medium text-gray-700 dark:text-gray-300">
					Masukkan kosakata
				</p>
				<form
					onSubmit={handleSearch}
					className="mx-auto mb-8 mt-2 flex w-1/2 items-center justify-center"
				>
					<input
						type="text"
						name="vocabulary"
						id="vocabulary"
						className="focus:outline-3 mr-4 w-full cursor-pointer rounded-md border-gray-300 bg-gray-300 px-3 py-3 placeholder:text-xl placeholder:font-bold placeholder:text-gray-500/50 focus:border-blue-500 focus:outline-none focus:outline-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-blue-700 dark:focus:ring-blue-700 sm:text-sm"
						ref={userRef}
						value={user}
						onChange={(e) => setUser(e.target.value)}
						placeholder="Masukkan kosakata..."
						autoFocus
						required
					/>

					<button
						type="submit"
						className="rounded-lg bg-blue-500 px-4 py-2 text-xl text-white transition duration-300 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</button>
				</form>

				<div className="text-gray-700 dark:text-gray-300">
					<p className="text-3xl font-medium">Hasil Pencarian:</p>
					<p className="mt-2 rounded-lg bg-gray-300 p-5 text-xl font-semibold">
						{data}
					</p>
				</div>
			</div>
		</section>
	);
}
