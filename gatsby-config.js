module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: `https://wpgatsbydemo.wpengine.com/graphql`,
			}
		}
	]
}
