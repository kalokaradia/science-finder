"use client";

export default function About() {
	return (
		<section id="about" className="min-h-screen">
			<div className="container mx-auto px-4 py-8">
				<h1 className="mb-8 text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
					Tentang Science Finder
				</h1>

				<div className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
					<p className="mb-4">
						<strong>Science Finder</strong> adalah alat pencari
						kosakata ilmiah yang dirancang untuk membantu siswa,
						guru, dan peneliti menemukan istilah-istilah sains dari
						berbagai bidang dengan cepat dan mudah. Alat ini
						menyediakan definisi kosakata ilmiah dari berbagai
						disiplin ilmu untuk memudahkan pemahaman konsep-konsep
						yang kompleks.
					</p>

					<p className="mb-4">
						Dengan antarmuka yang sederhana dan mudah digunakan,{" "}
						<strong>Science Finder</strong> memungkinkan pengguna
						untuk mencari kosakata hanya dengan memasukkan kata
						kunci. Aplikasi ini juga dilengkapi dengan definisi
						kosakata yang mendalam, sehingga membantu memahami
						istilah sains secara komprehensif.
					</p>

					<p className="mb-4">
						Proyek ini dikembangkan dengan tujuan untuk mendukung
						pendidikan ilmiah dan meningkatkan literasi sains bagi
						semua kalangan. Apapun latar belakang pendidikan Anda,
						Science Finder adalah alat yang tepat untuk memperkaya
						pengetahuan Anda dalam dunia sains.
					</p>

					<h2 className="mb-4 mt-8 text-2xl font-semibold">
						Fitur Utama:
					</h2>
					<ul className="mb-4 list-inside list-disc">
						<li>
							Pencarian kosakata ilmiah secara cepat dan mudah.
						</li>
						<li>
							Definisi istilah dari berbagai bidang ilmu sains.
						</li>
						<li>Antarmuka ramah pengguna dan responsif.</li>
						<li>
							Pembaruan data secara berkala untuk menambah istilah
							baru.
						</li>
					</ul>

					<p className="mb-4">
						Kami berkomitmen untuk terus meningkatkan{" "}
						<strong>Science Finder</strong> dengan menambahkan lebih
						banyak istilah sains serta menyediakan definisi yang
						semakin mendalam dan relevan.
					</p>

					<p>
						Jelajahi dunia sains bersama{" "}
						<strong>Science Finder</strong>, dan temukan kosakata
						yang akan membuka wawasan baru dalam bidang yang Anda
						minati.
					</p>
				</div>
			</div>
		</section>
	);
}
