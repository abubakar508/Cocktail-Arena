/** @type {import('next').NextConfig} */
const nextConfig = {
    // this ensures that nextjs allows the configuration of the 
    // cocktail image domain in the optimized image tag and the browser.
    images: {
        domains: ['www.thecocktaildb.com'], 
      },
}

module.exports = nextConfig
