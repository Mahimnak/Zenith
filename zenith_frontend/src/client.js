import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "qupnvkcd",
    dataset: 'production',
    apiVersion: '2023-02-17',
    useCdn: true,
    token: "sk9XXmjkexzycojw1vm17P2K7aYrqAlmu2W2ALdGNOPHZdfKgrMkIOJlnwvouKBowuZfkORt2OZdiLF1dwCN42HTEdLSn9FqVdF2WzByZSNHWsijnrmxgR0NRZvOQ3kUCx633IcxrRgeeISsQZnUmLoEw2sJNwroFUkXjJ7V7BbfDBPhAFt3",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);