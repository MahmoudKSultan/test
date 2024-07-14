import Client from "@/components/client";
import Server from "@/components/server";
import Link from "next/link";
import React from "react";

function Landingpage() {
	console.log("server component");

	return (
		<div>
			Landing pagezzzzzzzzzzzzzzzzzzzz
			<Client>
				<Server msg="called inside server component" />
			</Client>
		</div>
	);
}

export default Landingpage;
