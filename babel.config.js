module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        pragma: "h", // Preact의 h 함수 사용
        pragmaFrag: "Fragment", // Preact의 Fragment 사용
        runtime: "classic", // runtime을 classic으로 설정하여 명시적 pragma를 사용
      },
    ],
  ],
};
