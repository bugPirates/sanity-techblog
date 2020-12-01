import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "2c6979lh",
    dataset: "production",
    useCdn: true,
});