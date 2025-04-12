/* eslint-disable turbo/no-undeclared-env-vars */

export default {
	async fetch() {
		const testEnv = process.env.MY_SECRET_ENV_VAR
		return new Response(`This is my secret env var: ${testEnv}`)
	},
}

