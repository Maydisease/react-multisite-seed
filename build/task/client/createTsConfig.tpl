{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "react",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@": ["./src"],
      "@common/services/*": ["./src/services/*"],
      "@common/utils/*": ["./src/utils/*"],
      "@common/common_view/*":["src/common_view/*"],
      "@common/interface/*":["src/interface/*"],
      "@common/decorator/*":["src/decorator/*"],
      "@@/*": ["./src/application/<%= applicationName %>/*"],
      "@@config/*": ["./src/application/<%= applicationName %>/config/*"],
      "@@modules/*": ["./src/application/<%= applicationName %>/modules/*"],
      "@@intercept/*": ["./src/application/<%= applicationName %>/intercept/*"],
      "@@middleware/*": ["./src/application/<%= applicationName %>/middleware/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true
  }
}
