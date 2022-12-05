import type {SearchResponse} from "~entities/search-response";
import type {SearchRequest} from "~entities/search-request";

export class SearchService {

    public static Search(text: string): Promise<SearchResponse> {
        const body: SearchRequest = {textSearch: text};
        return fetch(`https://go-links-api.azurewebsites.net/_search`, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(body)

        }).then((res: Response) => res.json());
    }
}
