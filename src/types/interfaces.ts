export interface IntSource {
    id: string | null;
    name: string;
}

export interface IntArticles {
    source: IntSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface IntNewsResponce {
    status: string;
    totalResults: number;
    articles: IntArticles[];
}

export interface IntSourceResponce {
    status: string;
    sources: IntSource[];
}
