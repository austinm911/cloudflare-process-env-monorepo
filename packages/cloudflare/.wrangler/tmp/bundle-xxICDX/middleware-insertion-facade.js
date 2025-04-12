				import worker, * as OTHER_EXPORTS from "/Users/am/Coding/repro/cloudflare-process-env-monorepo/packages/cloudflare/src/index.ts";
				import * as __MIDDLEWARE_0__ from "/Users/am/Coding/repro/cloudflare-process-env-monorepo/node_modules/.pnpm/wrangler@4.10.0_@cloudflare+workers-types@4.20250412.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/am/Coding/repro/cloudflare-process-env-monorepo/node_modules/.pnpm/wrangler@4.10.0_@cloudflare+workers-types@4.20250412.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";

				export * from "/Users/am/Coding/repro/cloudflare-process-env-monorepo/packages/cloudflare/src/index.ts";
				const MIDDLEWARE_TEST_INJECT = "__INJECT_FOR_TESTING_WRANGLER_MIDDLEWARE__";
				export const __INTERNAL_WRANGLER_MIDDLEWARE__ = [
					
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default
				]
				export default worker;