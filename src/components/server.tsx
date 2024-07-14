import React from "react";

function Server({ msg }: { msg: string }) {
	console.log(msg);
	return <div>Server</div>;
}

export default Server;
