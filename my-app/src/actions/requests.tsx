import axios from "axios";

const baseUrl: string = 'https://api.chucknorris.io/jokes';
type possibleRequestParams = {
    category?: string,
    query?: string,
}
interface RequestOptions {
    method: 'get' | 'POST' | 'PATCH' | 'DELETE' | 'PUT',
    params?: possibleRequestParams,
}

async function generic_request(reqUrl: string, requestOptions: RequestOptions ){
    const req_response = await axios.request({url: `${baseUrl}/${reqUrl}`, ...requestOptions});
    return req_response.data;
}

async function get_random_joke(category? : string) : Promise<object|string|any> {
    // let req_response: string | object;
    const random_joke = await generic_request('random', {method: 'get', params: {category}});
    return random_joke;
}
async function get_jokes_categories() {
    const joke_categories = await generic_request('categories', {method: 'get'})
    return joke_categories;
}
async function search_jokes_by_joke(joke_content: string) {
    const search_result = await generic_request('search', {method: 'get',
        params: {query : joke_content}}
    );
    return search_result
}
export {
    generic_request,
    get_random_joke,
    get_jokes_categories,
    search_jokes_by_joke,
}