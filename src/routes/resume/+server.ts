import { redirect } from '@sveltejs/kit';
import { resumeDriveLink  } from "../../data";
export function GET({ url }) {
  	throw redirect(308, resumeDriveLink);
}
