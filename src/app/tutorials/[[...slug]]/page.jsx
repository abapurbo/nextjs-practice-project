import React from "react";

export default async function Tutorial({ params }) {
    const slug = await params;
    const [technology, topic, page, page_no, subject] = slug.slug || []
    console.log(slug)
    return <div>
        <h1>{technology} wellcome</h1>
        <h1>Topic:{topic}</h1>
        <h1>Page no:{page_no}</h1>
        <h1>Subject:{subject}</h1>
    </div>;
}
