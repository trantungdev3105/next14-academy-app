/** @format */

import { Manrope } from "next/font/google";
import { Roboto } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-roboto" });

export { manrope, roboto }
