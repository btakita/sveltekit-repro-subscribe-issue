import type { Handle } from '@sveltejs/kit'
import type { Writable } from 'svelte/store'
import { get, writable } from 'svelte/store'
export const handle:Handle = async ({ request, resolve }) => {
	const val$ = writable<val_T>(null)
	console.debug('handle|debug|1')
	console.debug(writable.toString())
	// console.debug(val$.subscribe.toString())
	console.debug(get(val$))
	const response = await resolve(request)
	return {
		...response,
		headers: {
			...response.headers,
		}
	}
}
export interface val_T {
	foo:string
}
export type val$_T = Writable<string>
