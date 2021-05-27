module.exports = {
  // images: {
  //   loader: "imgix",
  //   path: "/public/images/",
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
