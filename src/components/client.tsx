"use client";
import React, { ReactNode, useState } from "react";
import Server from "./server";

function Client({ children }: { children: ReactNode }) {
	const [count, setCount] = useState("");

	console.log("client components");
	return (
		<div>
			Client
			<button onClick={() => setCount(count + 1)}>click {count}</button>
			{children}
			<Server msg = "called inside client component" />
		</div>
	);
}

export default Client;
