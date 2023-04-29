export default function Posts() {
    const posts = [
        {
            id: 1,
            text: "hello world",
            timestamp: "just a sec ago:",
            author: {
                username: "Susan",
            },
        },
        {
            id: 2,
            text: "Second Post",
            timestamp: "More recently",
            author: {
                username: "John",
            },
        },
    ]
    return (
        <>
        {posts.length === 0 ?
                <p>There are no blog posts.</p>
                :
                posts.map(post => {
                    return (
                        <p key={post.id}>
                            <b>{post.author.username}</b> &mdash; {post.timestamp}
                            <br />
                            {post.text}
                        </p>
                    );
                })
        }
        </>
    )
}
