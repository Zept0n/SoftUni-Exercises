import { del, get, post, put } from "./api.js";

export async function getAllToys() {
    return get('/data/posts?sortBy=_createdOn%20desc');
}