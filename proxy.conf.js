const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:9091/",
    secure: false,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
