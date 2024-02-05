import { createComment } from "../../lib/comments";

export default async function handler(req, res) {
    try {
        const body = JSON.parse(req.body);

        // Explicitly type the result of createComment
        const resJson: any | undefined = await createComment(body);

        // Check if resJson is defined before accessing properties
        if (resJson && resJson.errors) {
            console.error('GraphQL Errors:', resJson.errors);
            return res.status(500).json({ message: resJson.errors[0].message, body });
        } else if (
            resJson &&
            resJson.createComment.success !== null &&
            resJson.createComment.success  === true
        ) {
            return res.status(200).json({ message: "Your comment is awaiting approval" });
        }

        return res.status(500).json({ message: "Some error occurred" });
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

interface CommentResponse { 
    errors?: any[];
    data?: {
        createComment?: {
            success: boolean;
            // Other properties as needed
        };
    };
}
