export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-nakul"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://jwq7i48jl0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_ExIUsfikU",
        APP_CLIENT_ID: "h4op98udph2ap6o89tnpv50ro",
        IDENTITY_POOL_ID: "us-east-1:796266cc-4ade-448c-8e84-c79b1e7de840"
    },
    STRIPE_KEY: "pk_test_2ZX4xZCRZtg6CGpdtXkQhWb800rCE9LiQ8",
};