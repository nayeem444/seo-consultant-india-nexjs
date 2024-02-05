import fetchAPI from "./api";

export async function createComment(body) {
    // const mutation = {
    //     query: 
    //             `mutation createComment(
    //                 $author: String = "${body.author}", 
    //                 $authorEmail: String = "${body.authorEmail}",  
    //                 $clientMutationId: String = "UniqueId", 
    //                 $commentOn: Int = ${parseInt(body.postId)}, 
    //                 $content: String = "${body.content}" 
    //                 $status: CommentStatusEnum = APPROVE) {
    //                 createComment(
    //                 input: {author: $author, authorEmail: $authorEmail, commentOn: $commentOn, content: $content, clientMutationId: $clientMutationId, status: $status}
    //                 ) {
    //                 success
    //                 }
    //             }`


    // };
    const mutation = {
        query: `
            mutation createComment(
                $author: String = "${body.author}", 
                $authorEmail: String = "${body.authorEmail}",  
                $clientMutationId: String = "UniqueId", 
                $commentOn: Int = ${body.postId}, 
                $content: String = "${body.content}", 
                $status: CommentStatusEnum = APPROVE
            ) {
                createComment(
                    input: {
                        author: $author,
                        authorEmail: $authorEmail,
                        commentOn: $commentOn,
                        content: $content,
                        clientMutationId: $clientMutationId,
                        status: $status
                    }
                ) {
                    success
                }
            }
        `,
    };
    const resJson = await fetchAPI(mutation.query);

    if (resJson.errors) {
        console.error('GraphQL Errors:', resJson.errors);
        return resJson;
    } else {
        // Assuming your GraphQL response structure is like { data: { createComment: { success: boolean } } }
        console.log(resJson.createComment.success , "response")
        if (resJson.createComment.success !== undefined) {
            console.log('GraphQL Success:', resJson.createComment.success );
            return resJson; // Return the success value from the GraphQL response
        } else {
            console.error('GraphQL Success: Undefined or Invalid');
            return resJson;
        }
    }
    
}

export async function getComments(slug) {
    const query = {
        query: `query getComments {
            post(id: "${slug}", idType: SLUG) {
              comments(where: {parentIn: "null"}) {
                nodes {
                  content
                  author {
                    node {
                      name
                      avatar {
                        url
                        height
                        width
                      }
                    }
                  }
                  date
                  parentId
                  id
                }
              }
              commentCount
            }
          }`
    };

     try {
        const resJson = await fetchAPI(query.query);

        if (resJson.errors) {
            console.error('GraphQL Errors:', resJson.errors);
        }

        return resJson; // Assuming resJson is CommentResponse
    } catch (error) {
        console.error('Failed to fetch API:', error);
        return { errors: [{ message: 'Failed to fetch API' }] }; // Default error response
    }
}


