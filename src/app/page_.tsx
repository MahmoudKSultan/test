"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);

		let result = await signIn("credentials", {
			email,
			password,
			callbackUrl: "/home",
			redirect: false
		});
		console.log(result);

		if (result?.error) {
			// Handle sign-in error
		} else {
			// Redirect the user after successful sign-in
			router.push("/home"); // Replace '/dashboard' with the desired URL
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="text"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Log in</button>
		</form>
	);
}
