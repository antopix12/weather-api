import "./styles.css";
import { greeting } from "./greeting.js";

require('dotenv').config();
const apiKey = process.env.VISUAL_CROSSING_API_KEY;

console.log(greeting);
