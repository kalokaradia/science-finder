import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-10 border-t-2 border-blue-500 bg-blue-500/50 py-8 shadow-lg backdrop-blur-sm">
			<div className="container mx-auto flex flex-wrap justify-between px-10 text-slate-900">
				<div className="mb-6 w-full sm:mb-0 sm:w-1/3">
					<Link href="/" className="text-3xl font-bold uppercase">
						Science Finder
					</Link>
					<p className="mt-4 text-xl">Temukan Istilah, Pahami Ilmu</p>
				</div>

				<div className="mb-6 w-full text-lg sm:mb-0 sm:w-1/3">
					<h3 className="text-xl font-bold uppercase">Quick Links</h3>
					<ul className="mt-4 space-y-2">
						<li>
							<Link href="/" className="hover:underline">
								Home
							</Link>
						</li>
						<li>
							<Link href="/tentang" className="hover:underline">
								About
							</Link>
						</li>
						<li>
							<Link href="/obrol" className="hover:underline">
								Chat
							</Link>
						</li>
						<li>
							<Link href="/daftar" className="hover:underline">
								List
							</Link>
						</li>
					</ul>
				</div>

				<div className="w-full text-lg sm:w-1/3">
					<h3 className="text-xl font-bold uppercase">Follow Us</h3>
					<div className="mt-6">
						<p>
							Email:{" "}
							<span className="flex flex-col">
								<Link
									href="mailto:kalokaradiananda@gmail.com"
									className="underline"
								>
									kalokaradiananda@gmail.com
								</Link>
								<Link
									href="mailto:kalokaradia@gmail.com"
									className="underline"
								>
									kalokaradia@gmail.com
								</Link>
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="mt-8 border-t border-blue-700 pt-4 text-center text-lg font-bold">
				© 2024 Science Finder. All Rights Reserved.
			</div>
		</footer>
	);
}
