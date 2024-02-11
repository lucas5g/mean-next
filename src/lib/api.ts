import { env } from "@/util/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.BASE_URL_API +'/api'
})