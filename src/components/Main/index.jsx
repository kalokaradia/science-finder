import Link from "next/link";

// jumbotron
export function Jumbotron() {
	return (
		<section
			className="h-screen bg-gradient-to-b from-sky-400 to-blue-300 text-slate-800"
			id="jumbotron"
		>
			<div className="container flex h-full flex-col items-center justify-center text-center">
				<h1 className="mb-8 flex justify-around text-5xl font-bold">
					Selamat Datang di Science Finder
				</h1>
				<p className="text-2xl">
					Temukan dan pahami istilah-istilah sains dengan mudah dan
					cepat.
				</p>
				<span className="my-14 h-1.5 w-20 rotate-90 rounded bg-blue-500"></span>
				<Link
					href={"/tentang"}
					className="rounded-md bg-slate-100 px-6 py-3 text-xl font-bold text-blue-500 transition duration-300 hover:bg-slate-200"
				>
					Pelajari Lebih Lanjut
				</Link>
			</div>
		</section>
	);
}

// features
function Card({ title, desc }) {
	return (
		<div className="borderue-500 rounded-lg bg-blue-400 px-5 py-2 shadow-md">
			<div className="container text-center">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="max-w-xl text-xl">{desc}</p>
			</div>
		</div>
	);
}

const featuresData = [
	{
		id: 1,
		title: "Mudah 👍",
		desc: "Aplikasi mudah digunakan dengan hanya memasukkan kata-katanya saja, maka hasilnya akan otomatis muncul!",
	},
	{
		id: 2,
		title: "Cepat 🚀",
		desc: "Aplikasi ini juga cukup cepat dalam mencari kata-kata!",
	},
	{
		id: 3,
		title: "Gratis 💸",
		desc: "Aplikasi ini gratis. Tidak akan ada pembayaran sama sekali dalam aplikasi ini.",
	},
];

export function Features() {
	return (
		<section id="features" className="my-40 bg-blue-300 p-10">
			<div className="container flex flex-col">
				<h1 className="mb-10 text-center text-4xl font-bold">
					Fitur Aplikasi Ini:
				</h1>
				<div className="flex gap-5 max-sm:flex-col">
					{featuresData.map((data) => {
						return (
							<Card
								key={data.id}
								title={data.title}
								desc={data.desc}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// web data
const webData = {
	author: "Kaloka Radia Nanda",
	auth_email: ["kalokaradiananda@gmail.com", "kalokaradia@gmail.com"],
	publish_date: "08/09/2024",
	github_link: "https://github.com/kalokaradia/science-finder",
	api: "https://science-api.vercel.app/vocability.json",
};

export function WebData() {
	return (
		<section id="web-data" className="my-40 bg-blue-300 p-10">
			<div className="container flex flex-col gap-5 max-sm:flex-col">
				<h1 className="text-center text-4xl font-bold">
					Data Pokok Website Ini:
				</h1>
				<table className="min-w-full rounded-lg bg-blue-400 bg-opacity-30 shadow-md backdrop-blur-md">
					<tbody>
						<tr>
							<td className="px-4 py-2 text-xl font-semibold">
								Pembuat
							</td>
							<td className="px-4 py-2 text-xl">
								{webData.author}
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 text-xl font-semibold">
								Email Pembuat
							</td>
							<td className="px-4 py-2 text-xl">
								{webData.auth_email.join(", ")}
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 text-xl font-semibold">
								Tanggal Publikasi
							</td>
							<td className="px-4 py-2 text-xl">
								{webData.publish_date}
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 text-xl font-semibold">
								Link GitHub
							</td>
							<td className="px-4 py-2 text-xl">
								<Link
									href={webData.github_link}
									className="text-blue-900 underline"
								>
									{webData.github_link}
								</Link>
							</td>
						</tr>
						<tr>
							<td className="px-4 py-2 text-xl font-semibold">
								Link API
							</td>
							<td className="px-4 py-2 text-xl">
								<a
									href={webData.api}
									className="text-blue-900 underline"
								>
									{webData.api}
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
