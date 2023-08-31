export interface Article {
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id: null;
    published_timestamp: Date;
    positive_reactions_count: number;
    cover_image: null | string;
    social_image: string;
    canonical_url: string;
    created_at: Date;
    edited_at: null;
    crossposted_at: null;
    published_at: Date;
    last_comment_at: Date;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    user: User;
}

export interface User {
    name: string;
    username: string;
    twitter_username: null;
    github_username: string;
    user_id: number;
    website_url: null;
    profile_image: string;
    profile_image_90: string;
}



export const load = async () => {
    try {
        const response = await fetch('https://dev.to/api/articles?username=harshkumar77')
        const articles = await response.json() as Article[]
        articles.sort((a , b) => b.public_reactions_count - a.public_reactions_count)
        return { articles: articles , success: true} 
    } catch (error) {
        console.log(55)
        return {  success: false, } 
    }
}


