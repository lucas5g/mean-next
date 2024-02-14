import { env } from "@/util/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API
})