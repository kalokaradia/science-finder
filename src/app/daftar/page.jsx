"use client";

import { useState, useEffect } from "react";

export default function Page() {
	const [vocabList, setVocabList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVocabList = async () => {
			try {
				const response = await fetch(
					"https://science-api.vercel.app/vocability.json",
				);
				if (!response.ok) {
					throw new Error("Gagal mengambil data");
				}
				const result = await response.json();
				setVocabList(result);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchVocabList();
	}, []);

	return (
		<section id="daftar" className="min-h-screen">
			<div className="container mx-auto px-4 py-8">
				<h1 className="mb-8 text-center text-4xl font-bold">
					Daftar Kosakata di API
				</h1>

				{loading && <p className="text-center">Memuat data...</p>}
				{error && <p className="text-center text-red-500">{error}</p>}

				{!loading && !error && (
					<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{vocabList.map((vocab) => (
							<li
								key={vocab.id}
								className="rounded-lg bg-blue-400 p-4 shadow-lg"
							>
								<h2 className="text-2xl font-bold">
									{vocab.name}
								</h2>
								<p className="mt-2">{vocab.description}</p>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}
